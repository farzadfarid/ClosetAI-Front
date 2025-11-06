// src/app/models/prompt-rules/women/hoodies.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyHoodiesRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی و استانداردسازی توصیفات
  p = p
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque cotton fabric')
    .replace(/\bshiny\b/gi, 'soft matte finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع هودی و سویشرت
  if (/pullover/i.test(p)) {
    p += '; hood and pocket shapes remain symmetrical and realistically formed';
  }
  if (/zip[-\s]?up/i.test(p)) {
    p += '; zipper alignment stays straight and centered; pocket openings rendered cleanly';
  }
  if (/oversized/i.test(p)) {
    p += '; volume distributed evenly for natural drape without exaggeration';
  }
  if (/cropped/i.test(p)) {
    p += '; cropped hem positioned above waistline with consistent edge ribbing';
  }
  if (/graphic/i.test(p)) {
    p += '; printed design integrated seamlessly into fabric texture without distortion';
  }
  if (/sweatshirt/i.test(p)) {
    p += '; ribbed cuffs and hem maintain even elasticity and realistic knit definition';
  }
  if (/fleece/i.test(p)) {
    p += '; fleece fibers appear soft and dense without excessive thickness or noise';
  }
  if (/tie[-\s]?dye/i.test(p)) {
    p += '; tie-dye pattern rendered with smooth gradient transitions and no hard edges';
  }
  if (/athletic/i.test(p)) {
    p += '; side panels and seams align anatomically; stretch fabric rendered taut but natural';
  }
  if (/knit/i.test(p)) {
    p += '; knit pattern remains consistent with realistic yarn depth and balanced stitch density';
  }

  // 3) حالت خلاق و غیرخلاق
  if (!ctx.isCreativeMode) {
    p += '; replace only the hoodie or sweatshirt; preserve pose, undershirt, and lighting from input image';
  } else {
    p += '; harmonize hoodie color and texture with outfit context for natural composition';
  }

  // 4) پایداری در خروجی چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; hood size, pocket placement, and sleeve proportions remain consistent across all views';
    p += '; fabric folds and drape maintain realism and symmetry from every perspective';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
