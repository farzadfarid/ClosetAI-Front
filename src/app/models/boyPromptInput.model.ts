export interface BoyOutfitReference {
  mode: 'preset' | 'reference' | 'text';
  presetKey?: string;
  referenceUrl?: string;
  referenceFile?: File | null;
  textPrompt?: string;
  colorPalette?: string[];
}

export interface BoyOutfitParams {
  topType?: string;
  bottomType?: string;
  shoeType?: string;
  style?: string;
  colors?: string[];
  fit?: string;
  fabric?: string;
  accessories?: string[];
  reference?: BoyOutfitReference;
  selectedItems?: string[];
  colorName?: string;
  color?: string;
}

export interface BoyPromptInput {
  colorPalettes?: string;
  selectedBackground?: string;
  itemIds?: number[];
  isCreativeMode: boolean;
}
