// src/app/models/outfit-params-women.ts

export interface WomenOutfitReference {
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

export interface WomenOutfitParams {
  topType?: string;        // blouse, t-shirt, crop, sweater, jacket, blazer, hoodie, cardigan
  bottomType?: string;     // pants, jeans, skirt, shorts
  dressType?: string;      // dress, jumpsuit
  shoeType?: string;       // heels, sneakers, boots, sandals
  style?: string;          // Casual, Formal, etc.
  colors?: string[];
  fit?: 'Slim' | 'Regular' | 'Loose';
  fabric?: 'Cotton' | 'Denim' | 'Leather' | 'Linen' | 'Polyester' | 'Wool' | 'Silk' | 'Velvet';
  accessories?: string[];  // bag, jewelry, scarf, hat, etc.
  reference?: WomenOutfitReference;
  selectedItems?: string[];
  colorName?: string;
  color?: string;
}

export function buildWomenOutfitPrompt(sel: {
  outfitStyle?: string;
  outfit?: WomenOutfitParams;
  colorPalettes?: Record<string, string[]>;
  selectedBackground?: string;
  selectedBackgroundPrompt?: string;

  itemPrompts?: string[];

}): string {
  const parts: string[] = [];
  const lowerPrompts = (sel.itemPrompts ?? []).map(p => p.toLowerCase());

  // ----- category checks -----
const isJeans = lowerPrompts.some(p => /\bjeans?\b/.test(p));



  // ----- creative vs strict -----

const sanitize = (s: string): string => {
  const base = s
    .replace(/\{color\}/gi, colorName)
    .replace(/\b(logo|brand|text|slogan)\b/gi, "motif")
    .replace(/\bopen[-\s]?front\b/gi, "front-opening") // برای کاردیگان
    .replace(/\b(print)\b/gi, "pattern")
    .replace(/\b(neon)\b/gi, "colorful")
    .replace(/\b(graphic)\b/gi, "artistic")
    .replace(/\b(pixel[-\s]?identical|pixel[-\s]?perfect)\b/gi, "")
    .replace(/\b(buttocks|lingerie|swimwear|transparent|revealing)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  return base;
};


 if (sel.selectedBackground) {
    parts.push(`Use background: ${sel.selectedBackground}.`);
  } else {
    parts.push("Keep the original background consistent with the input photo.");
  }
  // ----- colors + item specs -----
  const colorName =
    sel.outfit?.colorName?.toLowerCase() || sel.outfit?.color?.toLowerCase() || "neutral tone";

// ----- colors + item specs -----
if (sel.itemPrompts?.length) {
  const specs = sel.itemPrompts.map(sanitize).filter(Boolean);
  if (specs.length) {
    const lockedSpecs = specs.map(sp =>
      isJeans
        ? `${sp}; trousers category; not a skirt; not shorts; not leggings`
        : sp
    );
    parts.push(`Outfit description: ${lockedSpecs.join("; ")}.`);
  }
}


  // ----- style -----
  const STYLE_MAP: Record<string, string> = {
    Casual: "Casual everyday look, comfortable and feminine.",
    Formal: "Elegant formal outfit with refined tailoring.",
    Streetwear: "Trendy urban streetwear style.",
    "Smart Casual": "Stylish yet semi-formal outfit.",
    Athleisure: "Sporty feminine style with casual comfort.",
    Classic: "Timeless and balanced classic style.",
    Minimalist: "Clean minimalist aesthetic.",
    Vintage: "Retro-inspired look with delicate charm.",
    Summer: "Light summer outfit with breathable fabrics.",
    Winter: "Layered winter outfit with warm textures."
  };
  const styleLine = STYLE_MAP[sel.outfitStyle ?? "Casual"];
  if (styleLine) parts.push(styleLine);

  // ----- quality + final -----
  parts.push(
    "Photorealistic quality. Maintain correct proportions, lighting, and fabric texture.",
    "Preserve identity, facial features, and hair exactly as in the input photo.",
    "Do not include any text, watermarks, or labels in the image."
  );

  return clean(parts.join(" "));

  function clean(s: string): string {
    return s
      .replace(/\s*;\s*\./g, ".")
      .replace(/;\s*;/g, ";")
      .replace(/\s{2,}/g, " ")
      .trim()
      .slice(0, 35000);
  }
}
