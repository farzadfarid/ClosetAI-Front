import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonToggle,
  IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote, IonSegmentButton, IonLabel, IonSegment } from '@ionic/angular/standalone';
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
  MEN_BACKGROUNDS,
  type WomenCategory,
  type TitleCategory,
  WOMEN_BAGS,
  WOMEN_JEWELRY,
  WOMEN_SCARVES,
  WOMEN_HATS
} from 'src/app/mock/outfit-options';
import { LoadingComponent } from 'src/app/Core/Components/loading/loading.component';
import { lastValueFrom } from 'rxjs';

type WomenCategoryKey = typeof WOMEN_CATEGORIES[number]['key'];

@Component({
  selector: 'app-outfit-women',
  templateUrl: './outfit-women.page.html',
  styleUrls: ['./outfit-women.page.scss'],
  standalone: true,
  imports: [IonSegment, 
    IonNote, IonCardContent, IonCardTitle, IonCardHeader, IonCard,
    CommonModule, FormsModule,
    IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
    RouterLink, LoadingComponent, IonToggle,IonSegmentButton,IonLabel
  ],
})
export class OutfitWomenPage {
  @ViewChild('userFileInput') userFileInput!: ElementRef<HTMLInputElement>;
  isLoading = false;

  imageurl = environment.imageUrl;
  previewUser: string | null = null;
  processedPreview: string | null = null;
  selectedUserFile: File | null = null;
  colorPalettes: Record<string, string[]> = {};
  selectedBackgroundPrompt: string | null = null;
  isCreativeMode = false;
    outputMode= 'single';

  // دسته‌ها
  womenCategories = WOMEN_CATEGORIES;
  activeCategory: WomenCategoryKey = WOMEN_CATEGORIES[0]?.key as WomenCategoryKey;
  selectedStyle: WomenCategory | null = null;
  selectedStyles: Record<WomenCategoryKey, WomenCategory | null> = Object.fromEntries(
    WOMEN_CATEGORIES.map(cat => [cat.key, null])
  ) as Record<WomenCategoryKey, WomenCategory | null>;

  // Map داده‌های هر کتگوری
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
    reference: { mode: 'preset', presetKey: 'Casual' }
  };

  constructor(
    private uploadService: UploadService,
    private toast: ToastService,
    private cdRef: ChangeDetectorRef
  ) {
    addIcons({ cloudUploadOutline, downloadOutline, homeOutline });
  }

  onOutputModeChange(ev: CustomEvent) {
  this.outputMode = ev.detail.value as  'single'|'four-view' ;
}

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
    this.cdRef.detectChanges(); 
  }

  removeSingleColorForCategory(categoryKey: string) {
    const newPalettes = { ...this.colorPalettes };
    delete newPalettes[categoryKey];
    this.colorPalettes = newPalettes;
    this.cdRef.detectChanges();
  }

  async onUserFileSelected(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0] ?? null;
    this.selectedUserFile = file;
    this.previewUser = file ? URL.createObjectURL(file) : null;
    this.processedPreview = null;
    this.cdRef.markForCheck();
  }

  toggleCategory(key: WomenCategoryKey) {
    if (this.activeCategory === key) return;
    this.activeCategory = key;
    this.selectedStyle = null;
  }

  getStylesForActiveCategory(): WomenCategory[] {
    const groups = this.stylesByCategory[this.activeCategory] ?? [];
    return groups.flatMap(g => g.items);
  }

  toggleStyle(style: WomenCategory) {
    const cat = this.activeCategory;
    const current = this.selectedStyles[cat];
    this.selectedStyles[cat] = current?.name === style.name ? null : style;

    // دسته‌بندی نوع لباس
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

  async uploadFile() {
    if (!this.selectedUserFile) return this.toast.showError('Please select your photo.');
    if (!this.hasAnySelection()) return this.toast.showError('Please select at least one outfit item.');

    try {
      this.isLoading = true;
      this.processedPreview = null;
      this.cdRef.markForCheck();

      const selectedNames = Object.entries(this.selectedStyles)
        .filter(([key, s]) => !!s && key !== 'background')
        .map(([_, s]) => (s as WomenCategory).name);

      const prompt = buildWomenOutfitPrompt({
        outfitStyle: this.outfitParams.style,
        outfit: { ...this.outfitParams, selectedItems: selectedNames },
        colorPalettes: this.colorPalettes,
        selectedBackground: this.selectedStyles['background']?.name,
        selectedBackgroundPrompt: this.selectedBackgroundPrompt || undefined,
        isCreativeMode: this.isCreativeMode,
        outputMode: this.outputMode as 'single' | 'four-view',
      });

      console.log('🧾 Prompt (Women):', prompt);
      const res: UploadResponse = await lastValueFrom(this.uploadService.uploadImage(this.selectedUserFile, prompt));

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
