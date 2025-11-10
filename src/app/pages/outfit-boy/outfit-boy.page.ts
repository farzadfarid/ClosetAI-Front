import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonNote,
  IonToggle
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UploadService, UploadResponse } from 'src/app/services/upload';
import { ToastService } from 'src/app/services/toast';
import { addIcons } from 'ionicons';
import { cloudUploadOutline, downloadOutline, homeOutline } from 'ionicons/icons';
import { MEN_BACKGROUNDS } from 'src/app/mock/outfit-options';
import { LoadingComponent } from 'src/app/Core/Components/loading/loading.component';
import { lastValueFrom } from 'rxjs';

import { buildBoyCreativePrompt, buildBoyOutfitPrompt, BoyOutfitParams } from 'src/app/models/outfit-params-boy';

import {
  BOY_CATEGORIES,
  BOY_TSHIRTS,
  BOY_SHIRTS,
  BOY_SWEATERS,
  BOY_HOODIES,
  BOY_PANTS,
  BOY_JEANS,
  BOY_SHORTS,
  BOY_JACKETS,
  BOY_COATS,
  BOY_SNEAKERS,
  BOY_BOOTS,
  BOY_CAPS,
  BOY_SCARVES,
  BoyCategory,
  BoyTitleCategory,
} from 'src/app/mock/boy-options';

type BoyCategoryKey = typeof BOY_CATEGORIES[number]['key'];

@Component({
  selector: 'app-outfit-boy',
  templateUrl: './outfit-boy.page.html',
  styleUrls: ['./outfit-boy.page.scss'],
  standalone: true,
  imports: [
    IonNote, IonCardContent, IonCardTitle, IonCardHeader, IonCard,
    CommonModule, FormsModule, IonHeader, IonContent,
    IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
    RouterLink, LoadingComponent, IonToggle
  ],
})
export class OutfitBoyPage {

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

  isCreativeMode = false;
  outputMode: 'single' | 'four-view' = 'single';

  // 👕 دسته‌ها و آیتم‌های پسرانه
  boyCategories = BOY_CATEGORIES;
  activeCategory: BoyCategoryKey = BOY_CATEGORIES[0]?.key as BoyCategoryKey;
  selectedStyle: BoyCategory | null = null;

  selectedStyles: Record<BoyCategoryKey, BoyCategory | null> = Object.fromEntries(
    BOY_CATEGORIES.map(cat => [cat.key, null])
  ) as Record<BoyCategoryKey, BoyCategory | null>;

  private selectedItemPrompts: Record<BoyCategoryKey, string | null> = Object.fromEntries(
    BOY_CATEGORIES.map(cat => [cat.key, null])
  ) as Record<BoyCategoryKey, string | null>;

  // داده‌ها
  private stylesByCategory: Record<BoyCategoryKey, BoyTitleCategory[]> = {
    tshirt: BOY_TSHIRTS,
    shirt: BOY_SHIRTS,
    sweater: BOY_SWEATERS,
    hoodie: BOY_HOODIES,
    pants: BOY_PANTS,
    jeans: BOY_JEANS,
    shorts: BOY_SHORTS,
    jacket: BOY_JACKETS,
    coat: BOY_COATS,
    sneakers: BOY_SNEAKERS,
    boots: BOY_BOOTS,
    cap: BOY_CAPS,
    scarf: BOY_SCARVES,
    background: MEN_BACKGROUNDS
  };

  outfitParams: BoyOutfitParams = {
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

  normalizeColorForTemplate(colorRaw: string | undefined, itemPromptTemplate: string): string | undefined {
    if (!colorRaw) return colorRaw;
    let color = colorRaw.trim();
    const fabrics = ["cotton", "denim", "linen", "polyester", "fleece", "wool", "leather"];
    const lowerTemplate = itemPromptTemplate.toLowerCase();
    for (const f of fabrics) {
      if (lowerTemplate.includes(f)) {
        color = color.replace(new RegExp(`\\b${f}\\b`, "ig"), "").replace(/\s{2,}/g, " ").trim();
      }
    }
    return color;
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
  

  private resolveItemPrompt(style: BoyCategory, categoryKey: BoyCategoryKey): string {
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
      graphic: 'fun pattern'
    };

    for (const [bad, safe] of Object.entries(map)) {
      p = p.replace(new RegExp(`\\b${bad}\\b`, 'gi'), safe);
    }

    p = p.replace(/\s{2,}/g, ' ').trim();
    return p;
  }

  toggleCategory(key: BoyCategoryKey) {
    if (this.activeCategory === key) return;
    this.activeCategory = key;
    this.selectedStyle = null;
    this.cdRef.markForCheck();
  }

  getStylesForActiveCategory(): BoyCategory[] {
    const groups = this.stylesByCategory[this.activeCategory] ?? [];
    return groups.flatMap(g => g.items);
  }

  toggleStyle(style: BoyCategory) {
    const cat = this.activeCategory;
    const current = this.selectedStyles[cat];
    this.selectedStyles[cat] = current?.name === style.name ? null : style;
    this.selectedItemPrompts[cat] = this.selectedStyles[cat]
      ? this.resolveItemPrompt(this.selectedStyles[cat], cat)
      : null;

    if (['tshirt', 'shirt', 'sweater', 'hoodie', 'jacket', 'coat'].includes(cat))
      this.outfitParams.topType = this.selectedStyles[cat]?.name;
    else if (['pants', 'jeans', 'shorts'].includes(cat))
      this.outfitParams.bottomType = this.selectedStyles[cat]?.name;
    else if (['sneakers', 'boots'].includes(cat))
      this.outfitParams.shoeType = this.selectedStyles[cat]?.name;
    else if ([ 'scarf', 'hat'].includes(cat))
      this.outfitParams.accessories = [this.selectedStyles[cat]?.name || ''];
    else if (cat === 'background')
      this.selectedBackgroundPrompt = style.prompt || style.name;

    this.cdRef.markForCheck();
  }

  hasAnySelection(): boolean {
    return !!this.selectedUserFile && Object.values(this.selectedStyles).some(s => !!s) || this.isCreativeMode;
  }

  get activeCategoryLabel(): string {
    return this.boyCategories.find(c => c.key === this.activeCategory)?.label ?? '';
  }

  async onUserFileSelected(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0] ?? null;
    this.selectedUserFile = file;
    this.previewUser = file ? URL.createObjectURL(file) : null;
    this.processedPreview = null;
    this.cdRef.markForCheck();
  }

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

      const prompt = this.isCreativeMode
        ? buildBoyCreativePrompt()
        : buildBoyOutfitPrompt({
            outfitStyle: this.outfitParams.style,
            outfit: { ...this.outfitParams, selectedItems: [] },
            colorPalettes: this.colorPalettes,
            selectedBackground: this.selectedStyles['background']?.name,
            selectedBackgroundPrompt: this.selectedBackgroundPrompt || undefined,
            itemPrompts: promptsForApi,
          });

      console.log('🧾 Prompt (Boy):', prompt);

      const res: UploadResponse = await lastValueFrom(
        this.uploadService.uploadImage(this.selectedUserFile, prompt)
      );

      this.previewUser = URL.createObjectURL(this.selectedUserFile);
      if (res?.processed)
        this.processedPreview = res.processed.startsWith('http')
          ? res.processed
          : this.imageurl + res.processed;

      this.toast.showSuccess('Image processed successfully 👕');
    } catch (err) {
      console.error('❌ Upload Error:', err);
      this.toast.showError('Error processing outfit 😢');
    } finally {
      this.isLoading = false;
      this.cdRef.markForCheck();
    }
  }
}
