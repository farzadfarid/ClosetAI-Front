import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote,
  IonToggle, IonSegment, IonSegmentButton, IonLabel, IonRefresher, IonRefresherContent
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ToastService } from 'src/app/services/toast';
import { addIcons } from 'ionicons';
import { cloudUploadOutline, downloadOutline, homeOutline } from 'ionicons/icons';
import { LoadingComponent } from 'src/app/Core/Components/loading/loading.component';
import { lastValueFrom } from 'rxjs';
import { Closet } from 'src/app/services/closet';
import { BoyPromptInput } from 'src/app/models/boyPromptInput.model';
import { ClosetCategoryService } from 'src/app/services/closet-category';
import { GroupType } from 'src/app/models/groupType.enum';
import { ResponseClosetCategory } from '../../models/categoryResponse.model';
import { ClosetItems } from 'src/app/models/closetItems.model';
import { ClosetItemsService } from 'src/app/services/closet-items';
import { SelectionSummaryComponent } from '../selection-summary.component';
import { SelectionItem } from 'src/app/models/SelectionItem';

type BoyCategoryKey = string;

@Component({
  selector: 'app-outfit-boy',
  templateUrl: './outfit-boy.page.html',
  styleUrls: ['./outfit-boy.page.scss'],
  standalone: true,
  imports: [
 CommonModule, FormsModule, IonHeader, IonContent,
    IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, RouterLink, LoadingComponent,
    IonToggle, SelectionSummaryComponent, IonRefresher, IonRefresherContent
  ],
})
export class OutfitBoyPage {
  @ViewChild('userFileInput') userFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('outfitFileInput') outfitFileInput!: ElementRef<HTMLInputElement>;
  @ViewChild(IonContent) ionContent!: IonContent;

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

  isCreativeMode = false;
  outputMode: 'single' | 'four-view' = 'single';

  // 👕 دسته‌ها و آیتم‌های پسرانه
  boyCategoriesData: ResponseClosetCategory[] = [];
  activeCategory: BoyCategoryKey | null = null;
  selectedStyle: ClosetItems | null = null;
  selectedStyles: Record<BoyCategoryKey, ClosetItems | null> = {};
  selectionSummary: SelectionItem[] = [];

  private selectedItemPrompts: Record<BoyCategoryKey, string | null> = {};

  constructor(
    private toast: ToastService,
    private cdRef: ChangeDetectorRef,
    private categoryService: ClosetCategoryService,
    private itemsService: ClosetItemsService,
    private closetService: Closet
  ) {
    addIcons({ cloudUploadOutline, downloadOutline, homeOutline });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.categoryService.getAllBoy(GroupType.Boy).subscribe((categories: ResponseClosetCategory[]) => {
      console.log('Boy Categories:', categories);
      this.fixImagePaths(categories, this.imageurl);
      this.boyCategoriesData = categories;

      // انتخاب اولین دسته و دریافت آیتم‌های آن
      if (categories && categories.length > 0) {
        const firstCategory = categories[0];
        this.activeCategory = firstCategory.title as BoyCategoryKey;

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

  // Helper functions
  private resolveItemPrompt(item: ClosetItems): string {
    return item.prompt || item.name || 'neutral tone';
  }

  // رنگ
  getActiveCategoryColor(): string {
    if (!this.activeCategory) return '#ffffff';
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

    const selected = this.selectedStyles[categoryKey];
    if (selected) {
      this.selectedItemPrompts[categoryKey] = this.resolveItemPrompt(selected);
    }

    this.cdRef.detectChanges();
  }

  removeSingleColorForCategory(categoryKey: string) {
    if (!this.colorPalettes[categoryKey]) return;
    const newPalettes = { ...this.colorPalettes };
    delete newPalettes[categoryKey];
    this.colorPalettes = newPalettes;

    const selected = this.selectedStyles[categoryKey];
    if (selected) {
      this.selectedItemPrompts[categoryKey] = this.resolveItemPrompt(selected);
    }

    this.cdRef.detectChanges();
  }

  // فایل‌ها
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

  // انتخاب آیتم
  toggleCategory(key: BoyCategoryKey) {
    // Normalize key to lowercase
    const normalizedKey = key.toLowerCase() as BoyCategoryKey;

    if (this.activeCategory?.toLowerCase() === normalizedKey) return;
    this.activeCategory = normalizedKey;
    this.selectedStyle = null;

    // دریافت آیتم‌های دسته از سرور
    const category = this.boyCategoriesData.find(cat => cat.title.toLowerCase() === normalizedKey);
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
        (error: any) => {
          console.error(`❌ Error loading items for ${key}:`, error);
          this.isLoading = false;
          this.toast.showError(`Failed to load items for ${key}`);
        }
      );
    }
  }

  getStylesForActiveCategory(): ClosetItems[] {
    if (!this.activeCategory) return [];
    const activeCategory = this.boyCategoriesData.find(cat => cat.title.toLowerCase() === this.activeCategory!.toLowerCase());
    return activeCategory?.items || [];
  }

  toggleStyle(style: ClosetItems) {
    const cat = this.activeCategory;
    if (!cat) return;

    // Normalize category key to lowercase for consistency
    const catKey = cat.toLowerCase() as BoyCategoryKey;
    const catLower = catKey;

    const current = this.selectedStyles[catKey];
    this.selectedStyles[catKey] = current?.id === style.id ? null : style;
    this.selectedItemPrompts[catKey] = this.selectedStyles[catKey]
      ? this.resolveItemPrompt(this.selectedStyles[catKey]!)
      : null;

    if (catLower === 'background') {
      this.selectedBackgroundPrompt = this.selectedStyles[catKey]
        ? style.prompt || style.name
        : null;
    }

    // بروزرسانی selectionSummary
    this.updateSelectionSummary();

    this.cdRef.markForCheck();
  }

  hasAnySelection(): boolean {
    return !!this.selectedUserFile && Object.values(this.selectedStyles).some(s => !!s) || this.isCreativeMode;
  }

  get activeCategoryLabel(): string {
    return this.activeCategory ?? '';
  }

  onOutputModeChange(ev: CustomEvent) {
    this.outputMode = ev.detail.value as 'single' | 'four-view';
  }

  // آپلود و پردازش
  async uploadFile() {
    if (!this.selectedUserFile) return this.toast.showError('Please select your photo.');
    if (!this.hasAnySelection()) return this.toast.showError('Please select at least one outfit item.');

    try {
      this.isLoading = true;
      this.processedPreview = null;
      this.cdRef.markForCheck();

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

      // ساخت BoyPromptInput
      const boyPromptInput: BoyPromptInput = {
        colorPalettes: selectedColor,
        selectedBackground: this.selectedStyles['background']?.name,
        itemIds: itemIds,
        isCreativeMode: this.isCreativeMode
      };

      console.log('📤 Sending BoyPromptInput:', boyPromptInput);

      // آپلود فایل و داده‌ها به سرور
      const res = await lastValueFrom(
        this.closetService.uploadBoyData(this.selectedUserFile, boyPromptInput)
      );

      this.previewUser = URL.createObjectURL(this.selectedUserFile);

      if (res?.processed) {
        this.processedPreview = res.processed.startsWith('http')
          ? res.processed
          : this.imageurl + res.processed;
      }

      this.isLoading = false;
      this.toast.showSuccess('Image processed successfully 👕');
      this.cdRef.markForCheck();
    } catch (err) {
      console.error('❌ Upload Error:', err);
      this.isLoading = false;
      this.toast.showError('Error processing outfit 😢');
      this.cdRef.markForCheck();
    }
  }

  onRemoveSelection(item: SelectionItem) {
    console.log('🗑️ Removing selection:', item);
    // حذف آیتم از انتخاب‌های کاربر
    const categoryKey = item.category.toLowerCase() as BoyCategoryKey;

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
      acc[key as BoyCategoryKey] = null;
      return acc;
    }, {} as Record<BoyCategoryKey, ClosetItems | null>);

    this.selectedItemPrompts = Object.keys(this.selectedItemPrompts).reduce((acc, key) => {
      acc[key as BoyCategoryKey] = null;
      return acc;
    }, {} as Record<BoyCategoryKey, string | null>);

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

  handleRefresh(event: any) {
    // پاک کردن تمام انتخاب‌ها و بازگشت به حالت اولیه
    this.isLoading = true;
    this.previewUser = null;
    this.processedPreview = null;
    this.selectedUserFile = null;
    this.selectedOutfitFile = null;
    this.colorPalettes = {};
    this.selectedStyles = Object.keys(this.selectedStyles).reduce((acc, key) => {
      acc[key as BoyCategoryKey] = null;
      return acc;
    }, {} as Record<BoyCategoryKey, ClosetItems | null>);
    this.selectedItemPrompts = Object.keys(this.selectedItemPrompts).reduce((acc, key) => {
      acc[key as BoyCategoryKey] = null;
      return acc;
    }, {} as Record<BoyCategoryKey, string | null>);
    this.selectedBackgroundPrompt = null;
    this.updateSelectionSummary();

    // پایان رفرش
    setTimeout(() => {
      event.target.complete();
       this.isLoading = false;
      this.cdRef.markForCheck();
    }, 500);
  }
}
