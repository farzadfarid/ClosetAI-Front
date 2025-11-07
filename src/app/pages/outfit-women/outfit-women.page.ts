import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonToggle,
  IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote,
  IonSegment, IonSegmentButton, IonLabel
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UploadService, UploadResponse } from 'src/app/services/upload';
import { buildWomenOutfitPrompt, WomenOutfitParams } from 'src/app/models/outfit-params-women';
import { ToastService } from 'src/app/services/toast';
import { addIcons } from 'ionicons';
import { cloudUploadOutline, downloadOutline, homeOutline } from 'ionicons/icons';
import {
  WOMEN_CATEGORIES,
  WOMEN_BLOUSES,
  WOMEN_TSHIRTS,
  WOMEN_CROPS,
  WOMEN_SWEATERS,
  WOMEN_DRESSES,
  WOMEN_JUMPSUITS,
  WOMEN_PANTS,
  WOMEN_JEANS,
  WOMEN_SKIRTS,
  WOMEN_SHORTS,
  WOMEN_JACKETS,
  WOMEN_BLAZERS,
  WOMEN_HOODIES,
  WOMEN_CARDIGANS,
  WOMEN_HEELS,
  WOMEN_SNEAKERS,
  WOMEN_BOOTS,
  WOMEN_SANDALS,
  WOMEN_BAGS,
  WOMEN_JEWELRY,
  WOMEN_SCARVES,
  WOMEN_HATS,
  MEN_BACKGROUNDS,
  type WomenCategory,
  type TitleCategory
} from 'src/app/mock/outfit-options';
import { LoadingComponent } from 'src/app/Core/Components/loading/loading.component';
import { lastValueFrom } from 'rxjs';

type WomenCategoryKey = typeof WOMEN_CATEGORIES[number]['key'];

@Component({
  selector: 'app-outfit-women',
  templateUrl: './outfit-women.page.html',
  styleUrls: ['./outfit-women.page.scss'],
  standalone: true,
  imports: [
    IonNote, IonCardContent, IonCardTitle,
    IonCardHeader, IonCard, CommonModule, FormsModule, IonHeader, IonContent,
    IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, RouterLink, LoadingComponent,
  ],
})
export class OutfitWomenPage {
  @ViewChild('userFileInput') userFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('outfitFileInput') outfitFileInput!: ElementRef<HTMLInputElement>;

  isLoading = false;
  imageurl = environment.imageUrl;

  previewUser: string | null = null;
  previewOutfit: string | null = null;
  processedPreview: string | null = null;

  selectedUserFile: File | null = null;
  selectedOutfitFile: File | null = null;

  colorPalettes: Record<string, string[]> = {};
  pendingColors: Record<string, string | null> = {};
  selectedBackgroundPrompt: string | null = null;

  // isCreativeMode = false;
  outputMode: 'single' | 'four-view' = 'single';

  // 💄 دسته‌ها و آیتم‌های زنانه
  womenCategories = WOMEN_CATEGORIES;
  activeCategory: WomenCategoryKey = WOMEN_CATEGORIES[0]?.key as WomenCategoryKey;
  selectedStyle: WomenCategory | null = null;
  selectedStyles: Record<WomenCategoryKey, WomenCategory | null> = Object.fromEntries(
    WOMEN_CATEGORIES.map(cat => [cat.key, null])
  ) as Record<WomenCategoryKey, WomenCategory | null>;

  private selectedItemPrompts: Record<WomenCategoryKey, string | null> = Object.fromEntries(
    WOMEN_CATEGORIES.map(cat => [cat.key, null])
  ) as Record<WomenCategoryKey, string | null>;

  // داده‌ها
  private stylesByCategory: Record<WomenCategoryKey, TitleCategory[]> = {
    blouse: WOMEN_BLOUSES,
    tshirt: WOMEN_TSHIRTS,
    crop: WOMEN_CROPS,
    sweater: WOMEN_SWEATERS,
    dress: WOMEN_DRESSES,
    jumpsuit: WOMEN_JUMPSUITS,
    pants: WOMEN_PANTS,
    jeans: WOMEN_JEANS,
    skirt: WOMEN_SKIRTS,
    shorts: WOMEN_SHORTS,
    jacket: WOMEN_JACKETS,
    blazer: WOMEN_BLAZERS,
    hoodie: WOMEN_HOODIES,
    cardigan: WOMEN_CARDIGANS,
    heels: WOMEN_HEELS,
    sneakers: WOMEN_SNEAKERS,
    boots: WOMEN_BOOTS,
    sandals: WOMEN_SANDALS,
    bag: WOMEN_BAGS,
    jewelry: WOMEN_JEWELRY,
    scarf: WOMEN_SCARVES,
    hat: WOMEN_HATS,
    background: MEN_BACKGROUNDS
  };

  outfitParams: WomenOutfitParams = {
    style: 'Casual',
    colors: [],
    fit: 'Regular',
    accessories: [],
    reference: { mode: 'preset', presetKey: 'Casual' },
  };

  constructor(
    private uploadService: UploadService,
    private toast: ToastService,
    private cdRef: ChangeDetectorRef
  ) {
    addIcons({ cloudUploadOutline, downloadOutline, homeOutline });
  }

  // -----------------------------
  // 🔸 Helper functions
  // -----------------------------
  normalizeColorForTemplate(colorRaw: string | undefined, itemPromptTemplate: string): string | undefined {
    if (!colorRaw) return colorRaw;
    let color = colorRaw.trim();
    const fabrics = ["silk", "cotton", "denim", "linen", "leather", "wool", "chiffon", "satin", "polyester"];
    const lowerTemplate = itemPromptTemplate.toLowerCase();
    for (const f of fabrics) {
      if (lowerTemplate.includes(f)) {
        color = color.replace(new RegExp(`\\b${f}\\b`, "ig"), "").replace(/\s{2,}/g, " ").trim();
      }
    }
    return color;
  }

  private resolveItemPrompt(style: WomenCategory, categoryKey: WomenCategoryKey): string {
    const userColorForCat = this.colorPalettes[categoryKey]?.[0];
    const globalUserColor = this.outfitParams.colorName || this.outfitParams.color;
    const defaultColor = (style as any).defaultColor || 'neutral tone';

    const template = ((style as any).prompt || style.name || '').trim();
    const rawColor = userColorForCat || globalUserColor || defaultColor;
    const finalColor = this.normalizeColorForTemplate(rawColor, template) || 'neutral tone';

    let p = template.includes('{color}')
      ? template.replace(/\{color\}/gi, finalColor)
      : `${finalColor} ${template}`;

    const map: Record<string, string> = {
      print: 'pattern',
      logo: 'motif',
      brand: 'motif',
      text: 'design',
      badge: 'motif',
      emblem: 'motif',
      graphic: 'artistic'
    };
    for (const [bad, safe] of Object.entries(map)) {
      p = p.replace(new RegExp(`\\b${bad}\\b`, 'gi'), safe);
    }

    p = p.replace(/\s{2,}/g, ' ').trim();
    return p;
  }

  // -----------------------------
  // 🎨 رنگ
  // -----------------------------
  getActiveCategoryColor(): string {
    const colors = this.colorPalettes[this.activeCategory];
    return colors && colors.length ? colors[0] : '#ffffff';
  }

  getAllSelectedColors(): string[] {
    return Object.values(this.colorPalettes).flat();
  }

  onSingleColorPicked(categoryKey: string, event: Event) {
    const color = (event.target as HTMLInputElement).value;
    if (!color) return;
    this.colorPalettes = { ...this.colorPalettes, [categoryKey]: [color] };
    this.outfitParams.colors = this.getAllSelectedColors();
    this.outfitParams.color = color;
    this.outfitParams.colorName = color;

    const selected = this.selectedStyles[categoryKey];
    if (selected) {
      this.selectedItemPrompts[categoryKey] = this.resolveItemPrompt(selected, categoryKey);
    }

    this.cdRef.detectChanges();
  }

  removeSingleColorForCategory(categoryKey: string) {
    if (!this.colorPalettes[categoryKey]) return;
    const newPalettes = { ...this.colorPalettes };
    delete newPalettes[categoryKey];
    this.colorPalettes = newPalettes;
    this.outfitParams.color = undefined;
    this.outfitParams.colorName = undefined;

    const selected = this.selectedStyles[categoryKey];
    if (selected) {
      this.selectedItemPrompts[categoryKey] = this.resolveItemPrompt(selected, categoryKey);
    }

    this.cdRef.detectChanges();
  }

  // -----------------------------
  // 📁 فایل‌ها
  // -----------------------------
  async onUserFileSelected(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0] ?? null;
    this.selectedUserFile = file;
    this.previewUser = file ? URL.createObjectURL(file) : null;
    this.processedPreview = null;
    this.cdRef.markForCheck();
  }

  async onOutfitFileSelected(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0] ?? null;
    this.selectedOutfitFile = file;
    this.previewOutfit = file ? URL.createObjectURL(file) : null;
    this.cdRef.markForCheck();
  }

  // -----------------------------
  // 🔹 انتخاب آیتم
  // -----------------------------
  toggleCategory(key: WomenCategoryKey) {
    if (this.activeCategory === key) return;
    this.activeCategory = key;
    this.selectedStyle = null;
    // Object.keys(this.selectedItemPrompts).forEach(k => {
    //   if (k !== key) this.selectedItemPrompts[k as WomenCategoryKey] = null;
    // });
     this.cdRef.markForCheck();
  }

  getStylesForActiveCategory(): WomenCategory[] {
    const groups = this.stylesByCategory[this.activeCategory] ?? [];
    return groups.flatMap(g => g.items);
  }

  toggleStyle(style: WomenCategory) {
    const cat = this.activeCategory;
    const current = this.selectedStyles[cat];
    this.selectedStyles[cat] = current?.name === style.name ? null : style;
    this.selectedItemPrompts[cat] = this.selectedStyles[cat]
      ? this.resolveItemPrompt(this.selectedStyles[cat], cat)
      : null;

    if (['blouse', 'tshirt', 'crop', 'sweater', 'jacket', 'hoodie', 'blazer', 'cardigan'].includes(cat))
      this.outfitParams.topType = this.selectedStyles[cat]?.name;
    else if (['pants', 'jeans', 'skirt', 'shorts'].includes(cat))
      this.outfitParams.bottomType = this.selectedStyles[cat]?.name;
    else if (['dress', 'jumpsuit'].includes(cat))
      this.outfitParams.dressType = this.selectedStyles[cat]?.name;
    else if (['heels', 'sneakers', 'boots', 'sandals'].includes(cat))
      this.outfitParams.shoeType = this.selectedStyles[cat]?.name;
    else if (['bag', 'jewelry', 'scarf', 'hat'].includes(cat))
      this.outfitParams.accessories = [this.selectedStyles[cat]?.name || ''];
    else if (cat === 'background')
      this.selectedBackgroundPrompt = style.prompt || style.name;

    this.cdRef.markForCheck();
  }

  hasAnySelection(): boolean {
    return !!this.selectedUserFile && Object.values(this.selectedStyles).some(s => !!s);
  }

  get activeCategoryLabel(): string {
    return this.womenCategories.find(c => c.key === this.activeCategory)?.label ?? '';
  }

  onOutputModeChange(ev: CustomEvent) {
    this.outputMode = ev.detail.value as 'single' | 'four-view';
  }

  // -----------------------------
  // ☁️ آپلود و پرامپت
  // -----------------------------
  async uploadFile() {
    if (!this.selectedUserFile) return this.toast.showError('Please select your photo.');
    if (!this.hasAnySelection()) return this.toast.showError('Please select at least one outfit item.');

    try {
      this.isLoading = true;
      this.processedPreview = null;
      this.cdRef.markForCheck();

      const itemPrompts = Object.entries(this.selectedItemPrompts)
        .filter(([k, v]) => !!v && k !== 'background')
        .map(([_, v]) => v!);

      const mainColor =
        this.outfitParams.colorName?.toLowerCase() ||
        this.outfitParams.color?.toLowerCase() ||
        'neutral tone';

      const userHasColor = Boolean(this.outfitParams.colorName || this.outfitParams.color);
      const promptsForApi = userHasColor
        ? itemPrompts.map(p => p.includes('{color}') ? p.replace(/\{color\}/gi, mainColor) : p)
        : itemPrompts;

      const prompt = buildWomenOutfitPrompt({
        outfitStyle: this.outfitParams.style,
        outfit: { ...this.outfitParams, selectedItems: [] },
        colorPalettes: this.colorPalettes,
        selectedBackground: this.selectedStyles['background']?.name,
        selectedBackgroundPrompt: this.selectedBackgroundPrompt || undefined,
        itemPrompts: promptsForApi,
      });

      console.log('🧾 Prompt (Women):', prompt);

      const res: UploadResponse = await lastValueFrom(
        this.uploadService.uploadImage(this.selectedUserFile, prompt)
      );

      this.previewUser = URL.createObjectURL(this.selectedUserFile);
      if (res?.processed)
        this.processedPreview = res.processed.startsWith('http')
          ? res.processed
          : this.imageurl + res.processed;

      this.toast.showSuccess('Image processed successfully 🎀');
    } catch (err) {
      console.error('❌ Upload Error:', err);
      this.toast.showError('Error processing outfit 😢');
    } finally {
      this.isLoading = false;
      this.cdRef.markForCheck();
    }
  }
}
