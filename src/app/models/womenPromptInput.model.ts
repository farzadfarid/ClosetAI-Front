export interface WomenOutfitReference {
  mode: 'preset' | 'reference' | 'text';
  presetKey?: string;
  referenceUrl?: string;
  referenceFile?: File | null;
  textPrompt?: string;
  colorPalette?: string[];
}


export interface WomenOutfitParams {
  topType?: string;
  bottomType?: string;
  dressType?: string;
  shoeType?: string;
  style?: string;
  colors?: string[];
  fit?: string;
  fabric?: string;
  accessories?: string[];
  reference?: WomenOutfitReference;
  selectedItems?: string[];
  colorName?: string;
  color?: string;
}


export interface WomenPromptInput {
  colorPalettes?: string;
  selectedBackground?: string;
  itemIds?: number[];
  isCreativeMode: boolean;
}
