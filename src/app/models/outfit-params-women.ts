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
}

export function buildWomenOutfitPrompt(sel: {
  outfitStyle?: string;
  outfit?: WomenOutfitParams;
  colorPalettes?: Record<string, string[]>;
  selectedBackground?: string;
  selectedBackgroundPrompt?: string;
  isCreativeMode?: boolean;
   outputMode?: 'single' | 'four-view';
}) {
  const o = sel.outfit || {};
  const parts: string[] = [];

  const style = (sel.outfitStyle ?? 'Casual').trim();
  const hasClothing =
    !!o.topType || !!o.bottomType || !!o.dressType || !!o.shoeType ||
    (o.selectedItems && o.selectedItems.length > 0);


const THREE_VIEW_COLLAGE = [
  "Create one square collage with three panels. The person from the input photo must be wearing the requested outfit.",
  "LOCK THE ENTIRE APPEARANCE OF THE PERSON — including face, expression, eyes, mouth, hairstyle, skin tone, and lighting — as the permanent, pixel-perfect reference for all three panels. Do NOT alter the face or head in any way across panels.",
  "THE HEAD AND FACE MUST REMAIN FULLY FRONT-FACING THE CAMERA IN THE FRONT AND RIGHT-BODY VIEWS. Absolutely no rotation or redrawing of the head or face is allowed in these two views. For the back view, the back of the head is visible.",
  "ONLY THE SHOULDERS, TORSO, AND OUTFIT MUST ROTATE IN 3D SPACE. Visualize the person distinctly turning their upper body, but their gaze and face are locked forward at the camera where specified.",
  "EACH PANEL MUST REPRESENT A UNIQUE AND DISTINCT BODY ORIENTATION. THERE MUST BE NO DUPLICATE ANGLES. The three views are: 1. Full Front (larger panel), 2. Body Turned 90 Degrees Right (head front), 3. Full Back.",
  "The outfit, its intricate folds, textures, and colors must be 100% IDENTICAL and CONSISTENT across all panels. No restyling or recoloring.",
  "Specific panel requirements:",
  "1. Top-left Panel: FULL FRONT VIEW (the body is oriented directly towards the camera, and the head also faces front). This panel must be SIGNIFICANTLY LARGER than the other two, taking up approximately two-thirds of the collage width and height, positioned on the left side.",
  "2. Top-right Panel: BODY TURNED 90 DEGREES TO THE RIGHT (the person's shoulders and torso are rotated completely to their right, forming a clear and distinct side profile of the upper body, but the head and face remain ABSOLUTELY FIXED and facing the camera directly). This panel should be smaller, positioned to the top-right of the large front view.",
  "3. Bottom-right Panel: FULL BACK VIEW (the person's back is fully facing the camera, prominently showing the back of the outfit. The head should be a natural rear-of-head perspective, consistent with the rest of the body's rotation, showing the back of the person's head). This panel should be smaller, positioned to the bottom-right of the large front view, directly below the right-body view.",
  "Ensure perfect alignment of the person within panels, a consistent neutral background, and 2–4px gutters between panels."
].join(' ');


  // --- Mode logic ---
  if (sel.isCreativeMode) {
    parts.push(
      'Ensure the full outfit remains visually balanced, elegant, and natural.',
      'Allow subtle adjustments in colors or minor restyling to keep harmony and realism.',
      'Preserve proportions and natural appearance.'
    );
  } else {
    parts.push('Replace only the selected clothing items.');
  }

  // --- Common realism quality ---
  parts.push(
    'Maintain natural appearance with correct proportions.',
    'Ensure realistic fabric texture, lighting, and shadow consistency.'
  );


  // ✅ اصلاح تصمیم بر اساس mode
  if (sel.outputMode === 'four-view') {
    parts.push(THREE_VIEW_COLLAGE);
  } else {
    parts.push(
      "Output a single photo: front view, looking at the camera. " +
      "Preserve the subject’s face, hair, and identity exactly. Neutral background, shoulder-up framing."
    );
  }

  // --- رنگ‌ها ---
  const getColorText = (key: string): string => {
    const c = sel.colorPalettes?.[key];
    if (!c || !c.length) return '';
    if (c.length === 1) return ` in a tone similar to ${c[0]}`;
    return ` using a mix of ${c.join(', ')}`;
  };

  // رنگ‌ها برای دسته‌های زنانه
  const topColor =
    getColorText('blouse') ||
    getColorText('tshirt') ||
    getColorText('crop') ||
    getColorText('sweater') ||
    getColorText('jacket') ||
    getColorText('hoodie') ||
    getColorText('blazer') ||
    getColorText('cardigan');

  const bottomColor =
    getColorText('pants') ||
    getColorText('jeans') ||
    getColorText('skirt') ||
    getColorText('shorts');

  const dressColor =
    getColorText('dress') ||
    getColorText('jumpsuit');

  const shoeColor =
    getColorText('heels') ||
    getColorText('sneakers') ||
    getColorText('boots') ||
    getColorText('sandals');

  const details: string[] = [];
  if (o.topType) details.push(`Top: ${o.topType}${topColor}`);
  if (o.bottomType) details.push(`Bottom: ${o.bottomType}${bottomColor}`);
  if (o.dressType) details.push(`Dress: ${o.dressType}${dressColor}`);
  if (o.shoeType) details.push(`Shoes: ${o.shoeType}${shoeColor}`);
  if (o.fit) details.push(`Fit: ${o.fit}`);
  if (o.fabric) details.push(`Fabric: ${o.fabric}`);
  if (o.accessories?.length) details.push(`Accessories: ${o.accessories.join(', ')}`);
  if (o.selectedItems?.length) details.push(`Selected items: ${o.selectedItems.join(', ')}`);
  if (details.length) parts.push(`Outfit details: ${details.join('. ')}.`);

  // --- Background ---
  if (!hasClothing && sel.selectedBackground) {
    parts.push(
      `Background: ${sel.selectedBackground}.`,
      'Keep the subject naturally integrated with consistent perspective and lighting.'
    );
  } else if (sel.selectedBackground) {
    parts.push(
      `Use background: ${sel.selectedBackground}.`,
      'Ensure lighting and perspective remain consistent.'
    );
  }

  // --- Style description ---
  const STYLE_PROMPTS: Record<string, string> = {
    Casual: 'Casual everyday outfit, feminine and comfortable.',
    Formal: 'Elegant formal outfit, neat and tailored.',
    Streetwear: 'Trendy streetwear look with relaxed vibe.',
    'Smart Casual': 'Semi-formal yet stylish smart casual.',
    Athleisure: 'Sporty outfit with feminine athletic tone.',
    Classic: 'Timeless classic look with balanced colors.',
    Minimalist: 'Minimalist and clean design.',
    Vintage: 'Vintage-inspired look with soft details.',
    Summer: 'Light summer outfit suitable for warm weather.',
    Winter: 'Layered winter outfit with warm materials.'
  };
  if (STYLE_PROMPTS[style]) parts.push(STYLE_PROMPTS[style]);

  // --- Final quality ---
  parts.push(
    'Ensure realistic photographic quality and correct perspective.',
    'Avoid artifacts, halos, or over-smooth textures.'
  );

  // --- Cleanup & limit ---
  let prompt = parts.join(' ').replace(/\s+/g, ' ').trim();
  prompt = prompt
    .replace(/[\u2010-\u2015]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^\x00-\x7F]/g, ' ')
    .replace(/\r?\n|\r/g, ' ')
    .slice(0, 1200);

  return prompt;
}
