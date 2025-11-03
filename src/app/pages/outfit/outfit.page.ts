import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton,IonToggle, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UploadService, UploadResponse } from 'src/app/services/upload';
import { buildOutfitPrompt, OutfitParams } from 'src/app/models/outfit-params';
import { ToastService } from 'src/app/services/toast';

import { addIcons } from 'ionicons';
import { cloudUploadOutline, downloadOutline, homeOutline } from 'ionicons/icons';

import {
  MEN_CATEGORIES,
  MEN_SHIRTS,
  MEN_TSHIRTS,
  MEN_PANTS,
  MEN_JEANS,
  MEN_SUITS,
  MEN_JACKETS,
  MEN_HOODIES,
  MEN_SHORTS,
  MEN_SHOES,
  type TitleCategory,
  type MenCategory,
  MEN_BACKGROUNDS
} from 'src/app/mock/outfit-options';

import { LoadingComponent } from 'src/app/Core/Components/loading/loading.component';
import { lastValueFrom } from 'rxjs';

// union type از کلیدهای دسته‌ها
type MenCategoryKey = typeof MEN_CATEGORIES[number]['key'];

@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.page.html',
  styleUrls: ['./outfit.page.scss'],
  standalone: true,
  imports: [IonLabel, IonSegmentButton, IonSegment,  IonNote, IonCardContent, IonCardTitle, IonCardHeader, IonCard, 
    CommonModule,
    FormsModule,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink,
    LoadingComponent,
    IonToggle
  ],

})
export class OutfitPage {
  @ViewChild('outfitFileInput') outfitFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('userFileInput') userFileInput!: ElementRef<HTMLInputElement>;

  isLoading = false;
  imageurl = environment.imageUrl;

  // پیش‌نمایش‌ها
  previewUser: string | null = null;     // برای نمایش عکس کاربر
  previewOutfit: string | null = null;   // اگر لباس فایل بده
  processedPreview: string | null = null;

  selectedUserFile: File | null = null;
  selectedOutfitFile: File | null = null;
  colorPalettes: Record<string, string[]> = {};
  pendingColors: Record<string, string | null> = {};
  selectedBackgroundPrompt: string | null = null;
  isCreativeMode = false;
  outputMode= 'single';

  // پرامپت هر کتگوریِ انتخاب‌شده
private selectedItemPrompts: Record<MenCategoryKey, string | null> = {
  shirt: null,
  tshirt: null,
  pants: null,
  jeans: null,
  suit: null,
  jacket: null,
  hoodie: null,
  shorts: null,
  shoes: null,
  background: null,
};



  // دسته‌ها و آیتم‌های مردانه
  menCategories = MEN_CATEGORIES;
  activeCategory: MenCategoryKey = MEN_CATEGORIES[0]?.key as MenCategoryKey;
  selectedStyle: MenCategory | null = null;
  selectedStyles: Record<MenCategoryKey, MenCategory | null> = {
  shirt: null,
  tshirt: null,
  pants: null,
  jeans: null,
  suit: null,
  jacket: null,
  hoodie: null,
  shorts: null,
  shoes: null,
  background:null,
};




normalizeColorForTemplate(colorRaw: string | undefined, itemPromptTemplate: string): string | undefined {
  if (!colorRaw) return colorRaw;
  let color = colorRaw.trim();

  // اگر متن آیتم جنس پارچه را خودش دارد، جنس را از color حذف کن
  const fabrics = ["denim", "linen", "cotton", "wool", "leather", "canvas", "polyester", "twill"];
  const lowerTemplate = itemPromptTemplate.toLowerCase();

  for (const f of fabrics) {
    if (lowerTemplate.includes(f)) {
      // حذف f از color (فقط کلمه‌ی مستقل)
      color = color.replace(new RegExp(`\\b${f}\\b`, "ig"), "").replace(/\s{2,}/g, " ").trim();
    }
  }
  return color;
}




private resolveItemPrompt(style: MenCategory, categoryKey: MenCategoryKey): string {
  // رنگ نهایی
  const userColorForCat = this.colorPalettes[categoryKey]?.[0];
  const globalUserColor = this.outfitParams.colorName || this.outfitParams.color;
  const defaultColor = (style as any).defaultColor || 'neutral tone';

  // قالب خام آیتم
  const template = ((style as any).prompt || style.name || '').trim();

  // رنگ را نسبت به قالب آیتم نرمال کن (مثلاً حذف "denim" اگر خود قالب "denim shorts" دارد)
  const rawColor = userColorForCat || globalUserColor || defaultColor;
  const finalColor = this.normalizeColorForTemplate(rawColor, template) || 'neutral tone';

  // اعمال رنگ در قالب
  let p = template.includes('{color}')
    ? template.replace(/\{color\}/gi, finalColor)
    : `${finalColor} ${template}`;

  // نقشه‌ی واژگان حساس → امن
  const map: Record<string, string> = {
    print: 'pattern',
    logo: 'motif',
    brand: 'motif',
    text: 'design',
    badge: 'motif',
    emblem: 'motif',
    graphic: 'artistic',
    neon: 'colorful',
    vibrant: 'rich',
    'lower garment area': ''
  };
  for (const [bad, safe] of Object.entries(map)) {
    p = p.replace(new RegExp(`\\b${bad}\\b`, 'gi'), safe);
  }

  // حذف تکرارهای پشت‌سرهم (مثلاً "denim denim", "linen linen")
  const dedupSet = ["denim", "linen", "cotton", "wool", "leather", "canvas", "twill", "shorts", "jeans", "pants"];
  for (const w of dedupSet) {
    p = p.replace(new RegExp(`\\b(${w})\\s+\\1\\b`, "gi"), "$1");
  }

  // اگر رنگ شامل همان جنس است و قالب هم همان جنس را دارد → جنسِ دوم را حذف کن (…color… denim denim shorts)
p = p.replace(
  /\b(denim|linen|cotton|wool|leather|canvas|twill)\s+(shorts)\b/gi,
  (_match: string, fab: string, item: string): string => {
    // اگر قبل از fab یک fab دیگر آمده، یکی را نگه‌دار
    return `${fab} ${item}`;
  }
);


  // پاکسازی کانکتورهای بی‌صاحب و علائم
  p = p
    .replace(/\s*(,|;)\s*(,|;)\s*/g, "; ")       // ویرگول/نقطه‌ویرگول‌های پیاپی
    .replace(/\s*(,|;)\s*(and)\s*(,|;)\s*/gi, "; ") // ", and ," → "; "
    .replace(/\b(and|or)\s*(,|;)\s*$/gi, "")     // "and ," در انتها
    .replace(/\s{2,}/g, " ")
    .trim();

  return p;
}








onOutputModeChange(ev: CustomEvent) {
  this.outputMode = ev.detail.value as  'single'|'four-view' ;
}

  // مپ دیتای هر تب
  private stylesByCategory: Record<MenCategoryKey, TitleCategory[]> = {
    shirt: MEN_SHIRTS,
    tshirt: MEN_TSHIRTS,
    pants: MEN_PANTS,
    jeans: MEN_JEANS,
    suit: MEN_SUITS,
    jacket: MEN_JACKETS,
    hoodie: MEN_HOODIES,
    shorts: MEN_SHORTS,
    shoes: MEN_SHOES,
    background:MEN_BACKGROUNDS
  };

  // پارامترهای لباس برای prompt
  outfitParams: OutfitParams = {
    style: 'Casual',
    colors: [],
    fit: 'Regular',
    fabric: undefined,
    accessories: [],
    reference: { mode: 'preset', presetKey: 'Casual' },
    topType: undefined,
    bottomType: undefined,
    colorName: undefined,
    color: undefined
  };

  constructor(
    private uploadService: UploadService,
    private toast: ToastService,
    private cdRef: ChangeDetectorRef
  ) {
    addIcons({ cloudUploadOutline, downloadOutline, homeOutline });
  }


  getActiveCategoryColor(): string {
  const colors = this.colorPalettes[this.activeCategory];
  return colors && colors.length ? colors[0] : '#ffffff';
}



// فقط یک رنگ برای هر کتگوری
onSingleColorPicked(categoryKey: string, event: Event) {
  const input = event.target as HTMLInputElement;
  const color = input.value;

  if (!color) return;

  const newPalettes = { ...this.colorPalettes };
  newPalettes[categoryKey] = [color]; // فقط یک مقدار
  this.colorPalettes = newPalettes;
  this.outfitParams.colors = this.getAllSelectedColors();

  // 🟧 رنگ اصلی برای پرامپت
  this.outfitParams.color = color;
  this.outfitParams.colorName = color;

const activeCat = this.activeCategory;
const selected = this.selectedStyles[activeCat];
if (selected) {
  this.selectedItemPrompts[activeCat] = this.resolveItemPrompt(selected as MenCategory, activeCat);
}

  this.cdRef.detectChanges();
  console.log('Selected single color:', color, 'for', categoryKey, this.colorPalettes);
}

// حذف رنگ انتخابی
removeSingleColorForCategory(categoryKey: string) {
  if (!this.colorPalettes[categoryKey]) return;

  // ۱. حذف رنگ از پالت
  const newPalettes = { ...this.colorPalettes };
  delete newPalettes[categoryKey];
  this.colorPalettes = newPalettes;

  // ۲. اگر رنگ انتخاب‌شده‌ی کلی مربوط به همین کتگوری بوده → پاکش کن
  this.outfitParams.color = undefined;
  this.outfitParams.colorName = undefined;

  // ۳. بازسازی پرامپت برای برگشت به رنگ پیش‌فرض
  const selected = this.selectedStyles[categoryKey];
  if (selected) {
    this.selectedItemPrompts[categoryKey] = this.resolveItemPrompt(
      selected as MenCategory,
      categoryKey as MenCategoryKey
    );
  }

  this.cdRef.detectChanges();
  console.log('Removed color for', categoryKey, this.colorPalettes);
}



getAllSelectedColors(): string[] {
  return Object.values(this.colorPalettes).flat();
}




// وقتی کاربر رنگ انتخاب می‌کند
onColorPicked(categoryKey: string, event: Event) {
  const input = event.target as HTMLInputElement;
  const color = input.value;
  this.pendingColors[categoryKey] = color;
  console.log(`Color picked for ${categoryKey}:`, color);
}



  // ------------------------------------------
  // 📁 انتخاب عکس کاربر
  // ------------------------------------------
  async onUserFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    this.selectedUserFile = file;
    this.previewUser = null;
    this.processedPreview = null;

    if (file) {
      this.previewUser = URL.createObjectURL(file);
    }

    // برای انتخاب مجدد همان فایل
    input.value = '';
    
    this.cdRef.markForCheck();
  }

  // ------------------------------------------
  // 📁 انتخاب عکس لباس (اختیاری)
  // ------------------------------------------
  async onOutfitFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    this.selectedOutfitFile = file;
    this.previewOutfit = null;

    if (file) {
      this.previewOutfit = URL.createObjectURL(file);
    }

    input.value = '';
    this.cdRef.markForCheck();
  }

  // ------------------------------------------
  // 🔹 تب دسته‌بندی و انتخاب آیتم لباس
  // ------------------------------------------
toggleCategory(key: MenCategoryKey) {
  if (this.activeCategory === key) return;
  this.activeCategory = key;
  this.selectedStyle = null;

  // پاک کردن پرامپت قبلی در کتگوری‌های دیگر (مخصوصاً برای جلوگیری از باقی ماندن 'hoodie')
  Object.keys(this.selectedItemPrompts).forEach(k => {
    if (k !== key) this.selectedItemPrompts[k as MenCategoryKey] = null;
  });
}


  getStylesForActiveCategory(): MenCategory[] {
    const groups = this.stylesByCategory[this.activeCategory] ?? [];
    const result: MenCategory[] = [];
    for (const g of groups) {
      result.push(...g.items);
    }
    return result;
  }


toggleStyle(style: MenCategory) {
  const cat = this.activeCategory;
  if (!cat) return;

  const current = this.selectedStyles[cat];
  this.selectedStyles[cat] = current?.name === style.name ? null : style;
  // ذخیره‌ی پرامپت آماده‌ی ارسال برای همین کتگوری
this.selectedItemPrompts[cat] = this.selectedStyles[cat]
  ? this.resolveItemPrompt(this.selectedStyles[cat] as MenCategory, cat)
  : null;


  // 👕 بالاتنه
  if (['shirt', 'tshirt', 'jacket', 'hoodie', 'suit'].includes(cat)) {
    this.outfitParams.topType = this.selectedStyles[cat]?.name || undefined;
  }
  // 👖 پایین‌تنه
  else if (['pants', 'jeans', 'shorts'].includes(cat)) {
    this.outfitParams.bottomType = this.selectedStyles[cat]?.name || undefined;
  }
  // 👟 کفش
  else if (['shoes'].includes(cat)) {
    this.outfitParams.shoeType = this.selectedStyles[cat]?.name || undefined;
  }
  // 🏞️ بک‌گراند
  else if (cat === 'background') {
    const selected = this.selectedStyles[cat];
    this.selectedBackgroundPrompt = selected ? (selected as any).prompt || selected.name : null;
  }

  this.selectedItemPrompts[cat] = this.selectedStyles[cat]
  ? this.resolveItemPrompt(this.selectedStyles[cat] as MenCategory, cat)
  : null;


  this.cdRef.markForCheck();
}



hasAnySelection(): boolean {
  const anySelected = Object.values(this.selectedStyles).some(s => !!s);
  return !!(this.selectedUserFile && anySelected);
}




  get activeCategoryLabel(): string {
    return this.menCategories.find(c => c.key === this.activeCategory)?.label ?? '';
  }

  // ------------------------------------------
  // ☁️ آپلود و پردازش
  // ------------------------------------------
async uploadFile() {
  if (!this.selectedUserFile) {
    this.toast.showError('Please select your photo.');
    return;
  }

  const hasSelection = Object.values(this.selectedStyles).some(s => !!s);
  if (!hasSelection) {
    this.toast.showError('Please select at least one outfit item.');
    return;
  }

  try {
    this.isLoading = true;
    this.processedPreview = null; 
    this.cdRef.markForCheck();

    // جمع‌آوری آیتم‌های انتخاب‌شده
const selectedNames = Object.entries(this.selectedStyles)
  .filter(([key, s]) => !!s && key !== 'background')
  .map(([_, s]) => (s as MenCategory).name);

const itemPrompts = Object.entries(this.selectedItemPrompts)
  .filter(([k, v]) => !!v && k !== 'background')
  .map(([_, v]) => v!);

// 🎨 تزریق رنگ انتخابی کاربر به پرامپت‌ها
const mainColor =
  this.outfitParams.colorName?.toLowerCase() ||
  this.outfitParams.color?.toLowerCase() ||
  'neutral tone';

const userHasColor = Boolean(this.outfitParams.colorName || this.outfitParams.color);

// فقط وقتی کاربر رنگ داده، {color} را جایگزین کن.
// هرگز رنگ‌های متنی داخل پرامپت را با ریجکس عوض نکن تا defaultColor خراب نشود.
const promptsForApi = userHasColor
  ? itemPrompts.map(p => p.includes('{color}') ? p.replace(/\{color\}/gi, mainColor) : p)
  : itemPrompts;


  


const prompt = buildOutfitPrompt({
  outfitStyle: this.outfitParams.style,
  outfit: { ...this.outfitParams, selectedItems: [] },
  colorPalettes: this.colorPalettes,
  selectedBackground: this.selectedStyles['background']?.name,
  selectedBackgroundPrompt: this.selectedBackgroundPrompt || undefined,
  isCreativeMode: this.isCreativeMode,
  outputMode: this.outputMode as 'single'|'four-view',
  itemPrompts: promptsForApi,   // ← فقط همین
});






    console.log('🧾 Generated Prompt:', prompt);
    console.log('PROMPT LENGTH:', prompt.length);
    console.log('🎨 Color Palettes:', this.colorPalettes);
    console.log('🧥 Outfit Params:', this.outfitParams);

    const res: UploadResponse = await lastValueFrom(
      this.uploadService.uploadImage(this.selectedUserFile, prompt)
    );

    this.previewUser = URL.createObjectURL(this.selectedUserFile);

    if (res?.processed) {
      this.processedPreview = res.processed.startsWith('http')
        ? res.processed
        : this.imageurl + res.processed;
    }

    this.isLoading = false;
    this.toast.showSuccess('The image processed successfully 🎉');
    this.cdRef.markForCheck();
  } catch (err) {
    console.error('❌ Upload Error:', err);
    this.isLoading = false;
    this.toast.showError('Error in processing outfit 😢');
    this.cdRef.markForCheck();
  }
}


}
