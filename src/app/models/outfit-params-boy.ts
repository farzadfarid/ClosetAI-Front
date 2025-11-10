// src/app/models/outfit-params-boy.ts

export interface BoyOutfitReference {
  mode: 'preset' | 'reference' | 'text';
  presetKey?:
    | 'Casual'
    | 'Playtime'
    | 'Party'
    | 'Outdoor'
    | 'Classic'
    | 'Minimal'
    | 'Summer'
    | 'Winter';
  referenceUrl?: string;
  referenceFile?: File;
  textPrompt?: string;
  colorPalette?: string[];
}

export interface BoyOutfitParams {
  topType?: string;        // tshirt, shirt, sweater, hoodie, cardigan
  bottomType?: string;     // pants, jeans, shorts
  shoeType?: string;       // sneakers, boots, sandals
  style?: string;          // Casual, Party, Outdoor, etc.
  colors?: string[];
  fit?: 'Regular' | 'Relaxed';
  fabric?: 'Cotton' | 'Denim' | 'Linen' | 'Polyester' | 'Fleece' | 'Wool';
  accessories?: string[];
  reference?: BoyOutfitReference;
  selectedItems?: string[];
  colorName?: string;
  color?: string;
}

/**
 * 🧵 ساخت پرامپت استاندارد لباس پسرانه
 */
export function buildBoyOutfitPrompt(sel: {
  outfitStyle?: string;
  outfit?: BoyOutfitParams;
  colorPalettes?: Record<string, string[]>;
  selectedBackground?: string;
  selectedBackgroundPrompt?: string;
  itemPrompts?: string[];
}): string {
  const parts: string[] = [];
  const lowerPrompts = (sel.itemPrompts ?? []).map(p => p.toLowerCase());

  const colorName =
    sel.outfit?.colorName?.toLowerCase() ||
    sel.outfit?.color?.toLowerCase() ||
    "soft pastel tone";

  const sanitize = (s: string): string => {
    const base = s
      .replace(/\{color\}/gi, colorName)
      .replace(/\b(logo|brand|text|slogan)\b/gi, "fun motif")
      .replace(/\b(open[-\s]?front)\b/gi, "front-opening")
      .replace(/\b(print)\b/gi, "pattern")
      .replace(/\b(neon)\b/gi, "colorful")
      .replace(/\b(graphic)\b/gi, "playful pattern")
      .replace(/\b(pixel[-\s]?identical|pixel[-\s]?perfect)\b/gi, "")
      // حذف موارد نامناسب برای سن کودک
      .replace(/\b(buttocks|lingerie|swimwear|transparent|revealing|tight|figure-hugging)\b/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();
    return base;
  };

  const isJeans = lowerPrompts.some(p => /\bjeans?\b/.test(p));

  // ----- پس‌زمینه -----
  if (sel.selectedBackground) {
    parts.push(`Use background: ${sel.selectedBackground}.`);
  } else {
    parts.push("Keep the original background and lighting consistent with the input photo.");
  }

  // ----- مشخصات لباس -----
  if (sel.itemPrompts?.length) {
    const specs = sel.itemPrompts.map(sanitize).filter(Boolean);
    if (specs.length) {
      const lockedSpecs = specs.map(sp =>
        isJeans
          ? `${sp}; pants category; not skirt; not shorts for girls`
          : sp
      );
      parts.push(`Outfit description: ${lockedSpecs.join("; ")}.`);
    }
  }

  // ----- سبک کلی -----
  const STYLE_MAP: Record<string, string> = {
    Casual: "casual everyday outfit for a young boy, comfortable and natural cotton fabrics with soft colors.",
    Playtime: "playful outfit suitable for boys aged 2 to 10, bright colors, flexible materials, easy for active movement.",
    Party: "cute and neat outfit for a young boy at a celebration, stylish but simple and age-appropriate.",
    Outdoor: "sturdy and practical outdoor outfit for an active boy, with durable materials and relaxed fit.",
    Classic: "timeless boy's outfit with clean lines and coordinated colors.",
    Minimal: "simple and comfortable style for a young boy, soft tones and clean design.",
    Summer: "light and airy summer outfit with breathable fabrics and cheerful colors.",
    Winter: "warm layered outfit for a young boy, cozy textures and gentle tones."
  };

  const styleLine = STYLE_MAP[sel.outfitStyle ?? "Casual"];
  if (styleLine) parts.push(styleLine);

  // ----- کیفیت نهایی -----
  parts.push(
    "Photorealistic quality with correct child proportions and natural fabric texture.",
    "Keep the boy’s face, hair, and body shape identical to the input photo.",
    "The child must remain clearly recognizable, with no change to facial identity or age.",
    "Ensure the outfit fits naturally for a child, avoiding any adult-like design.",
    "Do not include text, logos, or watermarks."
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

/**
 * 🧠 حالت خلاقانه (Creative Mode)
 * در این حالت مدل می‌تواند لباس، رنگ و پس‌زمینه را برای هماهنگی طبیعی تغییر دهد،
 * اما چهره و هویت پسر باید کاملاً قابل تشخیص باقی بماند.
 */
export function buildBoyCreativePrompt(): string {
  return `
    Create a full-body photorealistic image of a young boy aged 2–10.
    The AI may freely adjust outfit style, color harmony, and background for natural and artistic balance.
    Keep the appearance cheerful, natural, and age-appropriate.
    The boy must remain the same person — preserve his exact facial features, skin tone, and hairstyle.
    Allow natural expressions such as smiling, curiosity, or joy.
    Maintain realistic proportions and soft lighting.
    The background should harmonize with the outfit naturally (indoor or outdoor).
    Do not alter the boy’s facial structure, age, or identity.
    Do not include text, brand logos, or watermarks.
  `.trim();
}
