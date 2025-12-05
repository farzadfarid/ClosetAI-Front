import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote, IonSegmentButton, IonLabel,IonSegment, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Closet } from 'src/app/services/closet';
import { AtelierPromptInput } from 'src/app/models/atelierPromptInput.model';
import { ToastService } from 'src/app/services/toast';
import { addIcons } from 'ionicons';
import { cloudUploadOutline, downloadOutline, homeOutline } from 'ionicons/icons';
import { lastValueFrom } from 'rxjs';
import { ClosetCategoryService } from 'src/app/services/closet-category';
import { GroupType } from 'src/app/models/groupType.enum';
import { ResponseClosetCategory } from '../../models/categoryResponse.model';
import { ClosetItems } from 'src/app/models/closetItems.model';
import { ClosetItemsService } from 'src/app/services/closet-items';

import { LoadingComponent } from 'src/app/Core/Components/loading/loading.component';

type AtelierCategoryKey = string;

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.page.html',
  styleUrls: ['./atelier.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton,
    IonIcon,
    RouterLink, LoadingComponent, IonRefresher, IonRefresherContent
  ]
})
export class AtelierPage {
  @ViewChild('userFileInput') userFileInput!: ElementRef<HTMLInputElement>;

  imageurl = environment.imageUrl;
  isLoading = false;

  // 📸 پیش‌نمایش‌ها
  previewUser: string | null = null;
  processedPreview: string | null = null;
  selectedUserFile: File | null = null;

  isCreativeMode = false;

  // 🎨 دسته‌ها و آیتم‌های آتلیه‌ای
  atelierCategoriesData: ResponseClosetCategory[] = [];
  activeCategory: AtelierCategoryKey | null = null;
  selectedStyle: ClosetItems | null = null;
  selectedStyles: Record<AtelierCategoryKey, ClosetItems | null> = {};

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
    this.categoryService.getAllAtelier(GroupType.Atelier).subscribe((categories: ResponseClosetCategory[]) => {
      console.log('Atelier Categories:', categories);
      this.fixImagePaths(categories, this.imageurl);
      this.atelierCategoriesData = categories;

      // انتخاب اولین دسته و دریافت آیتم‌های آن
      if (categories && categories.length > 0) {
        const firstCategory = categories[0];
        this.activeCategory = firstCategory.title as AtelierCategoryKey;

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

  // ------------------------------------------
  // 📁 انتخاب عکس کاربر
  // ------------------------------------------
  async onUserFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.selectedUserFile = file;
    this.previewUser = file ? URL.createObjectURL(file) : null;
    this.processedPreview = null;
    input.value = '';
    this.cdRef.markForCheck();
  }

  // ------------------------------------------
  // 🔹 تغییر تب گروه
  // ------------------------------------------
  toggleCategory(key: AtelierCategoryKey) {
    if (this.activeCategory === key) return;
    this.activeCategory = key;
    this.selectedStyle = null;

    // دریافت آیتم‌های دسته از سرور
    const category = this.atelierCategoriesData.find(cat => cat.title === key);
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

  // دریافت آیتم‌های هر گروه
  getStylesForActiveCategory(): ClosetItems[] {
    if (!this.activeCategory) return [];
    const activeCategory = this.atelierCategoriesData.find(cat => cat.title === this.activeCategory);
    return activeCategory?.items || [];
  }

  // انتخاب آیتم از گرید
  toggleStyle(style: ClosetItems) {
    const cat = this.activeCategory;
    if (!cat) return;

    // بررسی اگر این آیتم قبلاً انتخاب شده یا نه
    const current = this.selectedStyles[cat];

    if (current?.id === style.id) {
      // اگر همان آیتم انتخاب شده است، آن را لغو کن
      this.selectedStyles[cat] = null;
    } else {
      // پاک کردن تمام انتخاب‌های قبلی از تمام دسته‌ها
      Object.keys(this.selectedStyles).forEach(key => {
        this.selectedStyles[key] = null;
      });

      // انتخاب آیتم جدید فقط در دسته فعلی
      this.selectedStyles[cat] = style;
    }

    this.cdRef.markForCheck();
  }

  hasAnySelection(): boolean {
    return !!this.selectedUserFile && Object.values(this.selectedStyles).some(s => !!s);
  }

  get activeCategoryLabel(): string {
    return this.activeCategory ?? '';
  }

  // ------------------------------------------
  // ☁️ آپلود و پردازش تصویر
  // ------------------------------------------
  async uploadFile() {
    if (!this.selectedUserFile) return this.toast.showError('Please select your photo.');
    if (!this.hasAnySelection()) return this.toast.showError('Please select at least one atelier style.');

    try {
      this.isLoading = true;
      this.processedPreview = null;
      this.cdRef.markForCheck();

      // پیدا کردن آیتم انتخاب‌شده
      const selectedItem = Object.values(this.selectedStyles).find(s => !!s);

      // ساخت AtelierPromptInput
      const atelierPromptInput: AtelierPromptInput = {
        categoryLabel: this.activeCategoryLabel,
        itemId: selectedItem?.id,
        isCreativeMode: this.isCreativeMode
      };

      console.log('📤 Sending AtelierPromptInput:', atelierPromptInput);

      // آپلود فایل و داده‌ها به سرور
      const res = await lastValueFrom(
        this.closetService.uploadAtelierData(this.selectedUserFile, atelierPromptInput)
      );

      this.previewUser = URL.createObjectURL(this.selectedUserFile);

      if (res?.processed) {
        this.processedPreview = res.processed.startsWith('http')
          ? res.processed
          : this.imageurl + res.processed;
      }

      this.isLoading = false;
      this.toast.showSuccess('Image processed successfully 🎉');
      this.cdRef.markForCheck();
    } catch (err) {
      console.error('❌ Upload Error:', err);
      this.isLoading = false;
      this.toast.showError('Error during atelier processing 😢');
      this.cdRef.markForCheck();
    }
  }

  handleRefresh(event: any) {
    // پاک کردن تمام انتخاب‌ها و بازگشت به حالت اولیه
    this.isLoading = true;
    this.previewUser = null;
    this.processedPreview = null;
    this.selectedUserFile = null;
    this.selectedStyles = Object.keys(this.selectedStyles).reduce((acc, key) => {
      acc[key as AtelierCategoryKey] = null;
      return acc;
    }, {} as Record<AtelierCategoryKey, ClosetItems | null>);

    // پایان رفرش
    setTimeout(() => {
      event.target.complete();
       this.isLoading = false;
      this.cdRef.markForCheck();
    }, 500);
  }
}
