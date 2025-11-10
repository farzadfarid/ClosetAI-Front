// src/app/models/outfit-params.ts

export interface OutfitReference {
  mode: 'preset' | 'reference' | 'text';
  presetKey?:
    | 'Casual'
    | 'Formal'
    | 'Streetwear'
    | 'Smart Casual'
    | 'Athleisure'
    | 'Classic'
    | 'Minimalist'
    | 'Vintage'
    | 'Summer'
    | 'Winter';
  referenceUrl?: string;
  referenceFile?: File;
  textPrompt?: string;
  colorPalette?: string[];
}

export interface OutfitParams {
  topType?: string;        // shirt, t-shirt, hoodie, jacket, ...
  bottomType?: string;     // jeans, trousers, shorts, etc.
  shoeType?: string;       // sneakers, boots, formal, ...
  style?: string;          // Casual, Formal, ...
  colors?: string[];
  fit?: 'Slim' | 'Regular' | 'Loose';
  fabric?: 'Cotton' | 'Denim' | 'Leather' | 'Linen' | 'Polyester' | 'Wool';
  accessories?: string[];  // belt, watch, glasses, etc.
  reference?: OutfitReference;
  selectedItems?: string[];
  colorName?: string;      // main color name used in templates
  color?: string;          // main color value
}

export function buildOutfitPrompt(sel: {
  outfitStyle?: string;
  outfit?: OutfitParams;
  colorPalettes?: Record<string, string[]>;
  selectedBackground?: string;
  selectedBackgroundPrompt?: string;
  itemPrompts?: string[];
}): string {
  const parts: string[] = [];

  // ---------- background ----------
  if (sel.selectedBackgroundPrompt) {
    parts.push(`Use background: ${sel.selectedBackgroundPrompt}.`);
  } else if (sel.selectedBackground) {
    parts.push(`Use background: ${sel.selectedBackground}.`);
  } else {
    parts.push('Keep the original background exactly as in the input photo.');
  }

  // ---------- colors & sanitize ----------
  const colorName =
    sel.outfit?.colorName?.toLowerCase() ||
    sel.outfit?.color?.toLowerCase() ||
    'neutral tone';

  const sanitize = (s: string): string => {
    return s
      // رنگ
      .replace(/\{color\}/gi, colorName)
      // برند و متن
      .replace(/\b(logo|brand|badge|emblem|slogan|text)\b/gi, 'motif')
      .replace(/\bprint\b/gi, 'pattern')
      .replace(/\bneon\b/gi, 'colorful')
      .replace(/\bgraphic\b/gi, 'artistic')
      // حذف عبارات زائد یا خطرناک
      .replace(/\b(pixel[-\s]?identical|pixel[-\s]?perfect)\b/gi, '')
      .replace(/\b(buttocks|groin|underwear|swimwear|lingerie)\b/gi, '')
      .replace(/\s*(,|;)\s*(,|;)\s*/g, '; ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  };

  // ---------- outfit description (only selected items) ----------
  if (sel.itemPrompts && sel.itemPrompts.length) {
    const specs = sel.itemPrompts
      .map(sanitize)
      .filter(Boolean);

    if (specs.length) {
      parts.push(
        `Outfit description: ${specs.join('; ')}.`,
        'Apply only the described garments and accessories; keep all other existing clothing items unchanged.',
        'Avoid letters, words, or visible brand marks on fabrics.'
      );
    }
  }

  // ---------- style ----------
  const STYLE_MAP: Record<string, string> = {
    Casual: 'Casual everyday look, clean and comfortable.',
    Formal: 'Formal look with neat, well-fitted tailoring.',
    Streetwear: 'Modern streetwear style with balanced proportions.',
    'Smart Casual': 'Refined smart-casual outfit, relaxed but polished.',
    Athleisure: 'Sporty casual outfit suitable for everyday wear.',
    Classic: 'Timeless classic menswear style.',
    Minimalist: 'Simple, minimal, clean design.',
    Vintage: 'Subtle vintage-inspired aesthetic.',
    Summer: 'Light outfit suitable for warm weather.',
    Winter: 'Layered outfit suitable for cold weather.'
  };

  const styleLine = STYLE_MAP[sel.outfitStyle ?? sel.outfit?.style ?? 'Casual'];
  if (styleLine) {
    parts.push(styleLine);
  }

  // ---------- global constraints ----------
  parts.push(
    'Photorealistic quality with correct lighting, fabric texture, and natural shadows.',
    'Preserve the person’s identity exactly: keep the same face, facial features, hairstyle, hairline, beard or stubble style, and skin tone.',
    'Do not change body shape, pose, hands, or any part of the person’s anatomy.',
    'Do not alter elements that are not explicitly part of the selected outfit items (watch, jewelry, tattoos, etc.) unless they are directly specified.',
    'Do not add or render any text, logos, labels, or watermarks in the image.'
  );

  return clean(parts.join(' '));

  function clean(s: string): string {
    return s
      .replace(/\s*;\s*\./g, '.')
      .replace(/;\s*;/g, ';')
      .replace(/\s{2,}/g, ' ')
      .trim()
      .slice(0, 3500);
  }


  
}


export function buildCreativePromptForMen(): string {
  return `
    Edit this input photo of the man.
    Keep the same man exactly: same facial features, hairstyle, age, body shape, and overall identity so he is clearly recognizable.
    Do not redraw, replace, or reinterpret his face.
    You may adjust and improve his outfit style, colors, and layering to look more cohesive and modern.
    You may subtly adjust the background to better match the outfit while keeping a realistic environment.
    Maintain natural proportions, realistic lighting, and photorealistic quality.
    Do not add any text, logos, or watermarks.
  `.trim();
}



