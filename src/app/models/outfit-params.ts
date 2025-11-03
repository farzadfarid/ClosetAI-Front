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
    referenceUrl?: string;   // base64 یا URL تصویر مرجع لباس
    referenceFile?: File;    // فایل واقعی لباس انتخاب‌شده
    textPrompt?: string;     // توضیح آزاد از کاربر
    colorPalette?: string[]; // رنگ‌های مورد علاقه
  }


  export interface OutfitParams {
    topType?: string;        // نوع لباس بالاتنه (shirt, jacket, hoodie, ...)
    bottomType?: string;    
    shoeType?: string;     // نوع کفش (sneakers, boots, formal, ...)
    style?: string;          // کلیت استایل (Casual, Formal, ...)
    colors?: string[];       // رنگ‌های انتخاب‌شده
    fit?: 'Slim' | 'Regular' | 'Loose';
    fabric?: 'Cotton' | 'Denim' | 'Leather' | 'Linen' | 'Polyester' | 'Wool';
    accessories?: string[];  // عینک، ساعت، کمربند و غیره
    reference?: OutfitReference; // الگوی اصلی یا preset انتخاب‌شده
    selectedItems?: string[]; 
    colorName?: string;      // نام رنگ اصلی (برای جایگزینی در پرامپت)
    color?: string;          // رنگ اصلی (برای جایگزینی در پرامپت)
  }


export function buildOutfitPrompt(sel: {
  outfitStyle?: string;
  outfit?: OutfitParams;
  colorPalettes?: Record<string, string[]>;
  selectedBackground?: string;
  selectedBackgroundPrompt?: string;
  isCreativeMode?: boolean;
  outputMode?: 'single' | 'four-view';
  itemPrompts?: string[];
}): string {
  const parts: string[] = [];

  // ----- analysis -----
  const lowerPrompts = (sel.itemPrompts ?? []).map(p => p.toLowerCase());
  const lowerBodyItems = ["shorts", "pants", "trousers", "jeans", "skirt"];
  const mentionsShorts = lowerPrompts.some(p => p.includes("shorts"));
  const needsLowerGarmentView = lowerPrompts.some(p => lowerBodyItems.some(k => p.includes(k)));

  // ----- framing -----
let framing = "";

if (sel.outputMode === "four-view") {
  framing =
    "Provide a three-view composition: a main front-facing photo (slightly larger and centered), plus smaller right-side and back views showing outfit fit and details. Keep lighting, face, and body proportions consistent across all views. Use the same neutral background for all angles.";
} else if (mentionsShorts) {
  framing =
    "Front-facing waist-up or waist-to-knee photo with a neutral background.";
} else if (needsLowerGarmentView) {
  framing =
    "Front-facing full-body photo with a neutral background.";
} else {
  framing =
    "Front-facing portrait photo with a neutral background.";
}



  parts.push(
    framing,
    "The person’s face, skin tone, and hairstyle must remain unchanged and consistent with the input photo.",
    "Avoid altering the face or head.",
    "Subject wears the outfit described below.",
    "Maintain realistic fabric texture, lighting, and body proportions.",
    "Use everyday, modest clothing and a neutral, non-suggestive pose.",
    "Avoid revealing or transparent fabrics."
  );

  // ----- category detection -----
  let hasSuit = lowerPrompts.some(p => ["suit","tuxedo","blazer","formal wear"].some(k => p.includes(k)));
  const hasHoodie = lowerPrompts.some(p => ["hoodie","sweatshirt"].some(k => p.includes(k)));
  const hasShorts = lowerPrompts.some(p => [
    "shorts","denim shorts","cargo shorts","chino shorts","linen shorts","athletic shorts","sweat shorts","tailored shorts","plaid shorts"
  ].some(k => p.includes(k)));


  // ----- footwear detection -----
const isFootwear = lowerPrompts.some(p =>
  ["shoe","sneaker","boot","loafer","sandal","brogue","oxford"].some(k => p.includes(k))
);

// اگر آیتم کفشه، نذار منطق کت یا لباس فعال بشه
if (isFootwear) {
  hasSuit = false;
}



  // --- shirt layering fix ---
const shirtKeywords = ["shirt", "oxford", "dress shirt", "linen", "checked", "flannel"];
const hasShirt = lowerPrompts.some(p => shirtKeywords.some(k => p.includes(k)));

// اگر کاربر کت پوشیده و آیتم جدید shirt است
if (hasSuit && hasShirt) {
  parts.push(
    "If the person is wearing a jacket or blazer, apply the described shirt naturally underneath it, without removing or hiding the jacket.",
    "Only replace the visible shirt fabric or pattern; keep the jacket, lighting, and proportions identical."
  );
}



  // strengthen suit detection from outfit params
  const outfitTop = (sel.outfit?.topType || "").toLowerCase();
  const outfitStyle = (sel.outfit?.style || "").toLowerCase();
  if (!hasSuit && (outfitStyle.includes("formal") || /suit|blazer/.test(outfitTop))) {
    hasSuit = true;
  }

  // ----- special: suit + shorts (safe early-return) -----
  if (hasSuit && hasShorts) {
    parts.push(
      "Start from the existing formal suit outfit and reinterpret it as a lighter, summer-appropriate version.",
      "Transform the lower clothing into a relaxed, knee-length casual design while keeping the blazer and shirt as in the input photo.",
      // subtle harmony for upper body (safe):
      sel.isCreativeMode
        ? "For visual harmony, you may slightly relax the blazer structure, roll sleeves subtly, or soften the shirt collar (one button open is acceptable); do not change the garment type or coverage."
        : "Keep the upper garments exactly as in the input photo.",
      "Preserve realistic proportions, fabric lighting, and a modest composition.",
      "Use a waist-up or waist-to-knee framing with a neutral background.",
      "Ensure the result looks fully dressed and coherent.",
      "Photorealistic quality. Avoid artifacts or over-smoothing.",
      "Keep face geometry, lighting, and identity consistent with the input photo.",
      "Do not include any text, labels, or written explanations in the output. Output should be image-only."
    );

  if (!sel.outputMode) sel.outputMode = "single";


    return clean(parts.join(" "));
  }

  // ----- general behavior -----
  if (hasShorts) {
    // lower garment
    parts.push("Restyle the lower clothing into a relaxed, knee-length casual design suitable for warm weather.");

    // upper garment harmony (SAFE)
if (sel.isCreativeMode) {
  parts.push(
    "To ensure the outfit appears visually balanced for a summer look, you may lightly restyle the upper garment — for example, open the top button of a shirt, roll sleeves once, or slightly relax the jacket structure if present. Keep its original type and modest coverage unchanged."
  );
} else {
  parts.push(
    "Keep the existing upper garment exactly as in the input photo. Do not remove or restyle any part of it."
  );
}



    parts.push(
      "Use a waist-up or waist-to-knee framing for natural proportion.",
      "Keep the person’s face, lighting, and identity unchanged.",
      "Maintain the original background and overall realism."
    );
  } else if (hasSuit) {
    sel.outfitStyle = "Formal";
    parts.push(
      "Render the person wearing the described formal outfit with coordinated upper and lower garments.",
      "Maintain realistic fabric texture, lighting, and body proportions."
    );
  } else if (hasHoodie) {
    parts.push(
      "Render the person wearing the described hoodie naturally.",
      sel.isCreativeMode ? "Let other garments harmonize casually if needed." : "Keep other visible garments unchanged.",
      "Maintain realistic body proportions and lighting."
    );
  } 
  
// move this block ↑↑↑ to just before: if (hasShorts) {
else if (isFootwear) {
  if (sel.isCreativeMode) {
    parts.push(
      "Render the described footwear realistically on the subject.",
      "For visual harmony, you may slightly adapt the visible outfit — for example, adjust trouser length or fabric tone to match the footwear type.",
      "Do not remove any garments; keep the overall outfit modest and coherent.",
      "Preserve posture, lighting, and proportions identical to the input photo."
    );
  } else {
    parts.push(
      "Render only the described footwear realistically on the subject.",
      "Do not alter or restyle any part of the upper or lower clothing.",
      "Keep posture, proportions, and lighting identical to the input photo."
    );
  }
}



  
  else {
  if (sel.isCreativeMode) {
    parts.push(
      "Apply the described clothing item realistically and ensure it harmonizes with the existing outfit.",
      "Minor stylistic blending is acceptable, but do not remove garments unless clearly required by the description."
    );
  } else {
    parts.push(
      "Apply the described clothing item naturally over the existing outfit without removing, replacing, or hiding any current garments.",
      "Ensure the added item looks realistic in fabric, texture, and lighting, while preserving the existing outfit as-is.",
      "Keep all other visible elements, lighting, and background consistent with the input photo."
    );
  }
}


  // ----- background -----
  if (sel.isCreativeMode) {
    if (sel.selectedBackgroundPrompt) parts.push(`Background theme: ${sel.selectedBackgroundPrompt}.`);
    else if (sel.selectedBackground) parts.push(`Use background: ${sel.selectedBackground}.`);
  } else if (sel.selectedBackground || sel.selectedBackgroundPrompt) {
    parts.push("Keep the original background exactly as in the input photo.");
  }

  // ----- item descriptions -----
  if (sel.itemPrompts?.length) {
    const colorName =
      sel.outfit?.colorName?.toLowerCase() || sel.outfit?.color?.toLowerCase() || "neutral tone";

    const sanitize = (s: string): string =>
      s
        .replace(/\{color\}/gi, colorName)
        .replace(/\b(logo|brand|badge|emblem|slogan|text)\b/gi, "motif")
        .replace(/\b(print)\b/gi, "pattern")
        .replace(/\b(neon)\b/gi, "colorful")
        .replace(/\b(graphic)\b/gi, "artistic")
        .replace(/\b(pixel[-\s]?identical|pixel[-\s]?perfect|under any circumstances)\b/gi, "")
        .replace(/\b(buttocks|groin|underwear|swimwear|lingerie)\b/gi, "")
        .replace(/\b(non[-\s]?sexual|fully\s*clothed|modest\s*coverage)\b/gi, "")
        .replace(/\b(lower garment area)\b/gi, "")
        .replace(/\s*(,|;)\s*(,|;)\s*/g, "; ")
        .replace(/\s{2,}/g, " ")
        .trim();

    const specs = sel.itemPrompts
      .map(sanitize)
      .filter(Boolean)
      .map(s =>
        s
          .replace(/\bshorts\b/gi, "knee-length casual bottoms")
          .replace(/\b(denim|linen|cotton|wool|leather|canvas|twill)\s+\1\b/gi, "$1")
      );

    if (specs.length) {
      parts.push(
        `Outfit description: ${specs.join("; ")}.`,
        "Avoid letters, words, or brand marks on fabrics."
      );
    }
  }

  // ----- style -----
  const STYLE_MAP: Record<string, string> = {
    Casual: "Casual everyday look, simple and comfortable.",
    Formal: "Formal outfit, neat and tailored.",
    Streetwear: "Relaxed urban streetwear style.",
    "Smart Casual": "Refined yet relaxed look.",
    Athleisure: "Sporty style with casual comfort.",
    Classic: "Timeless classic design.",
    Minimalist: "Clean, minimal appearance.",
    Vintage: "Retro-inspired aesthetic.",
    Summer: "Light outfit for warm weather.",
    Winter: "Layered outfit for cold weather."
  };
  const styleLine = STYLE_MAP[sel.outfitStyle ?? "Casual"];
  if (styleLine) parts.push(styleLine);

  // ----- quality + image-only -----
  parts.push(
    "Photorealistic quality. Avoid artifacts or over-smoothing.",
    "Keep face geometry, lighting, and identity consistent with the input photo.",
    "Do not include any text, labels, or written explanations in the output. Output should be image-only."
  );

  return clean(parts.join(" "));

  function clean(s: string): string {
    return s
      .replace(/\s*;\s*\./g, ".")
      .replace(/;\s*;/g, ";")
      .replace(/\s{2,}/g, " ")
      .trim()
      .slice(0, 3500);
  }
}






