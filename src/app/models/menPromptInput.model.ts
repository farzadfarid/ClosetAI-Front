export interface OutfitReference {
  mode: 'preset' | 'reference' | 'text';
  presetKey?: string; // Casual, Formal, ...
  referenceUrl?: string;
  referenceFile?: File | null;
  textPrompt?: string;
  colorPalette?: string[];
}


export interface OutfitParams {
  topType?: string;
  bottomType?: string;
  shoeType?: string;
  style?: string;
  colors?: string[];
  fit?: string;
  fabric?: string;
  accessories?: string[];
  reference?: OutfitReference;
  selectedItems?: string[];
  colorName?: string;
  color?: string;
}


export interface MenPromptInput {
  colorPalettes?: string;
  selectedBackground?: string;
  itemIds?: number[];
  isCreativeMode: boolean;
}
