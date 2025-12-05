export interface GirlOutfitReference {
  mode: 'preset' | 'reference' | 'text';
  presetKey?: string;
  referenceUrl?: string;
  referenceFile?: File | null;
  textPrompt?: string;
  colorPalette?: string[];
}

export interface GirlOutfitParams {
  topType?: string;
  bottomType?: string;
  dressType?: string;
  shoeType?: string;
  style?: string;
  colors?: string[];
  fit?: string;
  fabric?: string;
  accessories?: string[];
  reference?: GirlOutfitReference;
  selectedItems?: string[];
  colorName?: string;
  color?: string;
}

export interface GirlPromptInput {
  colorPalettes?: string;
  selectedBackground?: string;
  itemIds?: number[];
  isCreativeMode: boolean;
}
