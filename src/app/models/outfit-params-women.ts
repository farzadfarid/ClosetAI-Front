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
  isCreativeMode?: boolean;
  itemPrompts?: string[];
  outputMode?: 'single' | 'four-view';
}): string {
  const o = sel.outfit || {};
  const parts: string[] = [];
  const lowerPrompts = (sel.itemPrompts ?? []).map(p => p.toLowerCase());

  // ----- category checks -----
 const isJeans = lowerPrompts.some(p => /\bjeans?\b/.test(p));
const isPants = lowerPrompts.some(p => /\b(pants|trousers)\b/.test(p));
const isSkirt = lowerPrompts.some(p => /\bskirt\b/.test(p));
const isDressOrOnePiece = lowerPrompts.some(p => /\b(dress|gown|jumpsuit|romper)\b/.test(p));
const isTop = lowerPrompts.some(p => /\b(blouse|shirt|t-?shirt|top|crop|sweater|cardigan|hoodie|blazer|jacket)\b/.test(p));
const isFootwear = lowerPrompts.some(p => /\b(heel|boot|sandal|sneaker|flat|wedge|shoe|loafer)\b/.test(p));
const isAccessory = lowerPrompts.some(p => /\b(bag|purse|jewelry|scarf|hat)\b/.test(p));


const isBlouse = lowerPrompts.some(p => /\b(blouse|shirt)\b/.test(p));
const isTShirt = lowerPrompts.some(p => /\b(t-?shirt|tee|top)\b/.test(p));

// فقط outerwear واقعی
const isOuterLayer = lowerPrompts.some(p => /\b(jacket|coat|blazer|cardigan)\b/.test(p));

// knit pullover جدا از outerwear
const isKnitPullover = lowerPrompts.some(p => /\b(sweater|pullover)\b/.test(p));

// hoodie را هم جدا کن تا به outerwear تحمیل نشود
const isHoodie = lowerPrompts.some(p => /\b(hoodie|hooded)\b/.test(p));

const isUpper = isBlouse || isTShirt || isDressOrOnePiece || isTop || isOuterLayer || isKnitPullover || isHoodie;

const hasUpperExposureRisk = lowerPrompts.some(p =>
  /\b(off[-\s]?shoulder|halter|sleeveless|strapless|deep\s*v|plunge|crop)\b/.test(p)
);



  // ----- framing -----
  let framing = "";
if (sel.outputMode === "four-view") {
  framing =
    "Generate three separate full-body images of the same woman wearing the outfit: front view, right-side view, and back view. Keep identical face, hair, and lighting. Use the same neutral background. Ensure consistent proportions and outfit details across all views.";
} else if (isDressOrOnePiece || isSkirt || isJeans || isPants) {
  framing =
    "Show a full-body image of the woman from the front, standing naturally, against a neutral background.";
} else if (isFootwear) {
  framing =
    "Show a full-body image with camera slightly angled downward so the shoes are clearly visible, with a neutral background.";
} else {
  framing =
    "Show a portrait of the woman from the front, upper body visible, against a neutral background.";
}


parts.push(
  framing,
  "The woman’s face, hairstyle, and skin tone must remain exactly the same as in the input photo.",
  "Do not change facial expression or head shape.",
  "Apply the described outfit with correct proportions, fabric texture, and realistic lighting.",
  "Avoid transparent, revealing, or overly tight clothing.",
  "Pose should stay natural and elegant."
);


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

  if (!sel.isCreativeMode && isUpper) {
    return base
      .replace(/\boff[-\s]?shoulder\b/gi, "wide neckline style near the shoulders")
      .replace(/\bhalter[-\s]?neck\b/gi, "slim shoulder coverage with stable neckline")
      .replace(/\bsleeveless\b/gi, "short-sleeve style with regular arm coverage")
      .replace(/\bcrop\s+top\b/gi, "short top")
      .replace(/\braw hem\b/gi, "clean finished hem")
      .replace(/\b(sequin|sequins?)\b/gi, "micro-sequin finish with low reflectivity")
      .replace(/\b(below|above)\s+(the\s+)?(shoulders?|waist)\b/gi, "at a comfortable level")
      .trim();
  }

  if (sel.isCreativeMode && isUpper) {
    return base
      .replace(/\braw hem\b/gi, "clean hem")
      .replace(/\b(sequin|sequins?)\b/gi, "evenly distributed sequins with balanced reflection")
      .trim();
  }

  return base;
};



// ======= CREATIVE vs NON-CREATIVE =======
if (sel.isCreativeMode) {
  parts.push(
    "Recompose the full outfit so that all visible clothing items appear naturally coordinated in style, color, and season.",
    "If the selected clothing item conflicts with other garments in season, formality, or layering, adapt other garments and visible details to achieve a coherent realistic appearance.",
    "You may modify clothing coverage such as sleeves, stockings, or outer layers if required for seasonal or stylistic balance, while keeping proportions human-realistic.",
    "For prints, sequins, or high-reflectivity finishes, keep intensity moderate and integrated with the overall palette.",
    "Preserve the person's face, hairstyle, and overall body identity from the input photo without changing their pose or expression.",
    "Maintain photorealism: all clothing must look natural together with consistent lighting, fabric behavior, and physical realism."
  );
} else {
  // NON-CREATIVE (replace-only)
  if (sel.outputMode === "four-view") {
    parts.push(
      "Generate consistent front, right, and back views of the person wearing the selected clothing item.",
      "Keep the same person, face, hairstyle, lighting, and pose. Do not restyle or recolor other garments."
    );
  } else {
    parts.push(
      "Replace or overlay only the selected clothing item.",
      "Keep lighting, pose, and body proportions identical to the input photo. Do not restyle or recolor other garments."
    );
  }

    // outerwear behaves as an over-layer in replace-only
  // if (isJacket) {
  //   parts.push(
  //     "Render the selected outerwear as an over-layer placed over the existing upper garment without modifying other clothes or coverage."
  //   );
  // }

  // فقط برای outerwear واقعی (jacket/coat/blazer/cardigan)
if (isOuterLayer) {
  parts.push(
    "Render the selected outerwear as a top layer placed over the current upper garment, without modifying or replacing other clothes or coverage."
  );
}


  // ⛑️ قاعدهٔ مرزِ پوشش فقط وقتی بالاتنه و پرریسک است
  if (isUpper && hasUpperExposureRisk) {
    parts.push(
      "Interpret the described neckline, sleeve, and hem conservatively so that coverage matches the currently visible body areas in the input photo.",
      "If the description implies reduced coverage, render an equivalent design with similar style lines while preserving existing coverage boundaries.",
      "Ensure the garment seats naturally over current upper garments or skin without exposing new areas."
    );
  }

  // 🔸 General protection rule for replace-only mod
   parts.push(
    "Interpret any mentions of crop, sleeveless, off-shoulder, or halter as style references only; preserve existing coverage boundaries from the input photo.",
    "If needed for a natural fit, render the selected item as an over-layer aligned to the current contours without exposing new skin.",
    "For prints or sequins, keep intensity moderate and integrated with the present outfit."
  );

}


  // ----- background -----
  if (sel.isCreativeMode && sel.selectedBackgroundPrompt) {
    parts.push(`Background theme: ${sel.selectedBackgroundPrompt}.`);
  } else if (sel.selectedBackground) {
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
      .slice(0, 2800);
  }
}
