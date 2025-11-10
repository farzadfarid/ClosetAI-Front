// src/app/models/outfit-params-girl.ts

export interface GirlOutfitReference {
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

export interface GirlOutfitParams {
  topType?: string;        // tshirt, blouse, sweater, hoodie, cardigan
  bottomType?: string;     // pants, jeans, skirt, shorts, leggings
  dressType?: string;      // dress, jumpsuit, romper
  shoeType?: string;       // sneakers, boots, sandals, flats
  style?: string;          // Casual, Party, Outdoor, etc.
  colors?: string[];
  fit?: 'Regular' | 'Relaxed';
  fabric?: 'Cotton' | 'Denim' | 'Linen' | 'Polyester' | 'Fleece' | 'Wool';
  accessories?: string[];
  reference?: GirlOutfitReference;
  selectedItems?: string[];
  colorName?: string;
  color?: string;
}

export function buildGirlOutfitPrompt(sel: {
  outfitStyle?: string;
  outfit?: GirlOutfitParams;
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
      .replace(/\b(logo|brand|text|slogan)\b/gi, "cute motif")
      .replace(/\b(open[-\s]?front)\b/gi, "front-opening")
      .replace(/\b(print)\b/gi, "pattern")
      .replace(/\b(neon)\b/gi, "colorful")
      .replace(/\b(graphic)\b/gi, "playful")
      .replace(/\b(pixel[-\s]?identical|pixel[-\s]?perfect)\b/gi, "")
      // حذف هر چیز غیرمجاز برای سن کودک
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
          ? `${sp}; trousers category; not skirt; not shorts; not leggings`
          : sp
      );
      parts.push(`Outfit description: ${lockedSpecs.join("; ")}.`);
    }
  }

  // ----- سبک کلی -----
  const STYLE_MAP: Record<string, string> = {
    Casual: "casual everyday outfit for a young girl, soft and comfortable cotton fabrics, natural childlike tone.",
    Playtime: "playful outfit suitable for children aged 2 to 10, bright colors, soft materials, and easy movement.",
    Party: "cute and cheerful party outfit for a little girl, decorative but modest and age-appropriate.",
    Outdoor: "practical outdoor outfit with durable fabric, relaxed and active style.",
    Classic: "timeless children's outfit with neat design and balanced colors.",
    Minimal: "simple and clean children's style, lightweight and natural look.",
    Summer: "light summer outfit with breathable fabric, bright pastel tones.",
    Winter: "warm layered outfit for a young girl with cozy textures and soft colors."
  };

  const styleLine = STYLE_MAP[sel.outfitStyle ?? "Casual"];
  if (styleLine) parts.push(styleLine);

  // ----- کیفیت نهایی -----
  parts.push(
    "Photorealistic quality with accurate proportions and natural fabric texture.",
    "Keep the girl's face, hair, body shape, and expression exactly the same as in the input photo.",
    "Ensure the outfit fits a child naturally, with no adult proportions or details.",
    "Do not include any text, brand logos, or watermarks."
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
 * اگر کاربر حالت Creative Mode را فعال کند، مدل اجازه دارد لباس، رنگ، پس‌زمینه و ترکیب را به‌صورت هماهنگ و زیبا تنظیم کند.
 */
/**
 * 🧠 حالت خلاقانه (Creative Mode)
 * در این حالت مدل اجازه دارد لباس، رنگ و پس‌زمینه را هماهنگ و زیبا طراحی کند،
 * اما چهره و هویت کودک باید ۱۰۰٪ قابل تشخیص باقی بماند.
 */
export function buildGirlCreativePrompt(): string { 
  return `
    Create a full-body photorealistic image of a young girl aged 2–10.
    The AI may freely adjust outfit design, color harmony, and background for natural balance.
    Keep the look playful, age-appropriate, and softly lit.
    The child must remain fully visible with natural proportions and posture.
    Preserve the girl's exact facial identity so she is clearly recognizable as the same person,
    but allow gentle emotional expressions such as smiling, curiosity, or happiness.
    Maintain consistent facial features, skin tone, and hair shape.
    Add a suitable background (indoor or outdoor) that complements the outfit naturally.
    Do not modify facial structure, age, or ethnicity.
    Do not include any text, watermarks, or brand logos.
  `.trim();
}

