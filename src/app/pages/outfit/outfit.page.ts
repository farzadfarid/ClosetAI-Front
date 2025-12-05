import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton,IonToggle, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Closet } from 'src/app/services/closet';

import { MenPromptInput } from 'src/app/models/menPromptInput.model';
import { ToastService } from 'src/app/services/toast';

import { addIcons } from 'ionicons';
import { cloudUploadOutline, downloadOutline, homeOutline } from 'ionicons/icons';

import { LoadingComponent } from 'src/app/Core/Components/loading/loading.component';
import { lastValueFrom } from 'rxjs';
import { ClosetCategoryService } from 'src/app/services/closet-category';
import { GroupType } from 'src/app/models/groupType.enum';
import { ResponseClosetCategory } from '../../models/categoryResponse.model';
import { ClosetItems } from 'src/app/models/closetItems.model';
import { ClosetItemsService } from 'src/app/services/closet-items';
import { SelectionSummaryComponent } from "../selection-summary.component";
import { SelectionItem } from 'src/app/models/SelectionItem';

// union type برای کلیدهای دسته‌ها
type MenCategoryKey = string;

@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.page.html',
  styleUrls: ['./outfit.page.scss'],
  standalone: true,
  imports: [
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
    IonToggle, SelectionSummaryComponent, IonRefresher, IonRefresherContent],

})
export class OutfitPage {
  @ViewChild('outfitFileInput') outfitFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('userFileInput') userFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild(IonContent) ionContent!: IonContent;

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
  selectionSummary: SelectionItem[] = [];

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
  menCategoriesData: ResponseClosetCategory[] = [];
  activeCategory: MenCategoryKey | null = null;
  activeSubCategories: ResponseClosetCategory[] = [];
  selectedStyle: any | null = null;
  selectedStyles: Record<MenCategoryKey, any | null> = {};



  onRemoveSelection(item: SelectionItem) {
    console.log('🗑️ Removing selection:', item);
    // حذف آیتم از انتخاب‌های کاربر
    const categoryKey = item.category.toLowerCase() as MenCategoryKey;

    // پاک کردن استایل انتخاب‌شده از آن گروه
    this.selectedStyles[categoryKey] = null;

    // پاک کردن پرامپت آن گروه
    this.selectedItemPrompts[categoryKey] = null;

    // پاک کردن رنگ آن گروه (اگر داشته باشد)
    if (this.colorPalettes[categoryKey]) {
      const newPalettes = { ...this.colorPalettes };
      delete newPalettes[categoryKey];
      this.colorPalettes = newPalettes;
    }

    // بروزرسانی selectionSummary
    this.updateSelectionSummary();

    this.cdRef.markForCheck();
    console.log('✅ Selection removed. Current selections:', this.selectionSummary);
  }

  onClearAllSelections() {
    // حذف تمام انتخاب‌های کاربر
    this.selectedStyles = Object.keys(this.selectedStyles).reduce((acc, key) => {
      acc[key as MenCategoryKey] = null;
      return acc;
    }, {} as Record<MenCategoryKey, any | null>);

    this.selectedItemPrompts = Object.keys(this.selectedItemPrompts).reduce((acc, key) => {
      acc[key as MenCategoryKey] = null;
      return acc;
    }, {} as Record<MenCategoryKey, string | null>);

    this.colorPalettes = {};
    this.selectedBackgroundPrompt = null;

    // بروزرسانی selectionSummary
    this.updateSelectionSummary();

    this.cdRef.markForCheck();
  }

  private updateSelectionSummary() {
    // ساخت خلاصهٔ انتخابات از selectedStyles
    const entries = Object.entries(this.selectedStyles).filter(([_, style]) => !!style);
    console.log('📊 updateSelectionSummary - selectedStyles entries:', entries);

    this.selectionSummary = entries
      .map(([category, style]) => ({
        category: category.charAt(0).toUpperCase() + category.slice(1),
        value: style?.name || '',
        image: style?.image || ''
      }));

    console.log('📋 Updated selectionSummary:', this.selectionSummary);

    // اسکرول به پایین برای دیدن color picker
    setTimeout(() => {
      this.ionContent?.scrollToBottom(300);
    }, 100);
  }




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




private resolveItemPrompt(item: ClosetItems): string {
  // از سرور دریافت شد، می‌توانیم از prompt آن استفاده کنیم
  return item.prompt || item.name || 'neutral tone';
}




  // پارامترهای لباس برای prompt

  constructor(
    private toast: ToastService,
    private cdRef: ChangeDetectorRef,
    private categoryService: ClosetCategoryService,
    private itemsService: ClosetItemsService,
    private closetService: Closet
  ) {
    addIcons({ cloudUploadOutline, downloadOutline, homeOutline });
  }

  private fixImagePaths(categories: ResponseClosetCategory[], baseUrl: string) {
  categories.forEach(cat => {
    // اصلاح مسیر عکس دسته
    cat.image = baseUrl + cat.image;

    // اگر آیتم دارد → اصلاح مسیر آیتم‌ها
    if (cat.items) {
      cat.items = cat.items.map(item => ({
        ...item,
        image: baseUrl + item.image
      }));
    }

    // اگر زیرگروه دارد → فراخوانی بازگشتی
    if (cat.subCategories && cat.subCategories.length > 0) {
      this.fixImagePaths(cat.subCategories, baseUrl);
    }
  });
}




  ngOnInit(): void {
    this.isLoading = true;
    this.categoryService.getAllMen(GroupType.Men).subscribe(categories => {
      console.log('Men Categories:', categories);
      this.fixImagePaths(categories, this.imageurl);
      this.menCategoriesData = categories;

      // انتخاب اولین دسته و دریافت آیتم‌های آن
      if (categories && categories.length > 0) {
        const firstCategory = categories[0];
        this.activeCategory = firstCategory.title as MenCategoryKey;

        // دریافت آیتم‌های اولین دسته از سرور
        if (firstCategory.id) {
          this.itemsService.getByCategory(firstCategory.id).subscribe(
            (items: ClosetItems[]) => {
              // اصلاح مسیر عکس
              const itemsWithFixedPaths = items.map(item => ({
                ...item,
                image: this.imageurl + item.image
              }));

              // آپدیت دسته با آیتم‌های دریافت‌شده
              firstCategory.items = itemsWithFixedPaths;
              this.isLoading = false;
              this.cdRef.markForCheck();
              console.log(`📦 Initial: Loaded ${items.length} items for category: ${firstCategory.title}`);
            },
            (error: any) => {
              console.error(`❌ Error loading items for ${firstCategory.title}:`, error);
              this.isLoading = false;
              this.toast.showError(`Failed to load items for ${firstCategory.title}`);
            }
          );
        } else {
          this.isLoading = false;
        }
      } else {
        this.isLoading = false;
      }
    }, (error: any) => {
      console.error('❌ Error loading categories:', error);
      this.isLoading = false;
      this.toast.showError('Failed to load categories');
    });
  }


  getActiveCategoryColor(): string {
  if (!this.activeCategory) return '#ffffff';
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
  

  // 🟧 رنگ اصلی برای پرامپت
  
  

const activeCat = this.activeCategory;
if (activeCat) {
  const selected = this.selectedStyles[activeCat];
  if (selected) {
    this.selectedItemPrompts[activeCat] = this.resolveItemPrompt(selected);
  }
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
  
  

  // ۳. بازسازی پرامپت برای برگشت به رنگ پیش‌فرض
  const selected = this.selectedStyles[categoryKey];
  if (selected) {
    this.selectedItemPrompts[categoryKey] = this.resolveItemPrompt(selected);
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
  // Normalize key to lowercase
  const normalizedKey = key.toLowerCase() as MenCategoryKey;

  if (this.activeCategory?.toLowerCase() === normalizedKey) return;
  this.activeCategory = normalizedKey;
  this.selectedStyle = null;

  // پاک کردن پرامپت قبلی در کتگوری‌های دیگر
  Object.keys(this.selectedItemPrompts).forEach(k => {
    if (k.toLowerCase() !== normalizedKey) this.selectedItemPrompts[k as MenCategoryKey] = null;
  });

  // دریافت آیتم‌های دسته از سرور
  const category = this.menCategoriesData.find(cat => cat.title.toLowerCase() === key.toLowerCase());
  if (category && category.id) {
    this.isLoading = true;
    this.itemsService.getByCategory(category.id).subscribe(
      (items: ClosetItems[]) => {
        // اصلاح مسیر عکس آیتم‌ها
        const itemsWithFixedPaths = items.map(item => ({
          ...item,
          image: this.imageurl + item.image
        }));

        // آپدیت دسته فعال با آیتم‌های دریافت‌شده
        if (category) {
          category.items = itemsWithFixedPaths;
        }
        this.isLoading = false;
        this.cdRef.markForCheck();
        console.log(`📦 Loaded ${items.length} items for category: ${key}`);
      },
      (error:any) => {
        console.error(`❌ Error loading items for ${key}:`, error);
        this.isLoading = false;
        this.toast.showError(`Failed to load items for ${key}`);
      }
    );
  }
}


  getStylesForActiveCategory(): ClosetItems[] {
    // اگر دسته فعال نیست یا items ندارد
    if (!this.activeCategory) return [];

    // آیتم‌های دسته فعال را برگردان
    const activeCategory = this.menCategoriesData.find(cat => cat.title.toLowerCase() === this.activeCategory!.toLowerCase());
    return activeCategory?.items || [];
  }

toggleStyle(style: ClosetItems) {


 


  const cat = this.activeCategory;
  if (!cat) return;

  // Normalize category key to lowercase for consistency
  const catKey = cat.toLowerCase() as MenCategoryKey;
  const catLower = catKey; // Use the same normalized key
  const current = this.selectedStyles[catKey];
  this.selectedStyles[catKey] = current?.id === style.id ? null : style;

  // ثبت پرامپت
  this.selectedItemPrompts[catKey] = this.selectedStyles[catKey]
    ? this.resolveItemPrompt(this.selectedStyles[catKey])
    : null;

  // آپدیت outfitParams برای گروه‌ها
  if (['shirt', 'tshirt', 'jacket', 'hoodie', 'suit'].includes(catLower)) {
    
  } else if (['pants', 'jeans', 'shorts'].includes(catLower)) {
    
  } else if (catLower === 'shoes') {
    
  } else if (catLower === 'background') {
    const selected = this.selectedStyles[catKey];
    this.selectedBackgroundPrompt = selected ? selected.prompt || selected.name : null;
  }

  // بروزرسانی selectionSummary
  this.updateSelectionSummary();

  this.cdRef.markForCheck();
}



  hasAnySelection(): boolean {
    return !!this.selectedUserFile && Object.values(this.selectedStyles).some(s => !!s) || this.isCreativeMode;
  }

  handleRefresh(event: any) {
    // پاک کردن تمام انتخاب‌ها و بازگشت به حالت اولیه
    this.isLoading = true;
    this.previewUser = null;
    this.processedPreview = null;
    this.selectedUserFile = null;
    this.selectedOutfitFile = null;
    this.colorPalettes = {};
    this.selectedStyles = Object.keys(this.selectedStyles).reduce((acc, key) => {
      acc[key as MenCategoryKey] = null;
      return acc;
    }, {} as Record<MenCategoryKey, any | null>);
    this.selectedItemPrompts = Object.keys(this.selectedItemPrompts).reduce((acc, key) => {
      acc[key as MenCategoryKey] = null;
      return acc;
    }, {} as Record<MenCategoryKey, string | null>);
    this.selectedBackgroundPrompt = null;
    this.updateSelectionSummary();

    // پایان رفرش
    setTimeout(() => {
      event.target.complete();
       this.isLoading = false;
      this.cdRef.markForCheck();
    }, 500);
  }




  get activeCategoryLabel(): string {
    return this.activeCategory ?? '';
  }

  // ------------------------------------------
  // ☁️ آپلود و پردازش
  // ------------------------------------------
async uploadFile() {
  if (!this.selectedUserFile) return this.toast.showError('Please select your photo.');
  if (!this.hasAnySelection()) return this.toast.showError('Please select at least one outfit item.');

  try {
    this.isLoading = true;
    this.processedPreview = null;
    this.cdRef.markForCheck();

    // جمع‌آوری پرامپت‌های آیتم‌های انتخاب‌شده

    // جمع‌آوری itemIds از selectedStyles
    const itemIds = Object.entries(this.selectedStyles)
      .filter(([k, v]) => !!v && k !== 'background')
      .map(([_, v]) => v!.id)
      .filter((id): id is number => id !== undefined);

    // استخراج اولین رنگ انتخاب‌شده
    let selectedColor: string | undefined;
    for (const categoryKey of Object.keys(this.colorPalettes)) {
      if (this.colorPalettes[categoryKey]?.length > 0) {
        selectedColor = this.colorPalettes[categoryKey][0];
        break;
      }
    }

    // ساخت MenPromptInput
    const menPromptInput: MenPromptInput = {
      colorPalettes: selectedColor,
      selectedBackground: this.selectedBackgroundPrompt || undefined,
      itemIds: itemIds,
      isCreativeMode: this.isCreativeMode
    };

    console.log('📤 Sending MenPromptInput:', menPromptInput);

    // آپلود فایل و داده‌ها به سرور
    const res = await lastValueFrom(
      this.closetService.uploadMenData(this.selectedUserFile, menPromptInput)
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
