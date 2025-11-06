// src/app/models/prompt-rules/women/hats.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyHatsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی اولیه
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'opaque material')
    .replace(/\bshiny\b/gi, 'matte finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع کلاه
  if (/wide brim/i.test(p)) {
    p += '; brim edge symmetrical; straw weave uniform; band detail centered around crown';
  }
  if (/bucket/i.test(p)) {
    p += '; brim curves evenly downward; stitching aligned; soft fabric drape natural';
  }
  if (/fedora/i.test(p)) {
    p += '; crown pinch precise; ribbon band straight; felt texture consistent across surface';
  }
  if (/beret/i.test(p)) {
    p += '; form slightly flattened at top; wool texture smooth and uniform; edge curve even';
  }
  if (/baseball/i.test(p)) {
    p += '; brim curvature balanced; panels and seams symmetrical; logo-free and clean design';
  }
  if (/beanie/i.test(p)) {
    p += '; knit loops visible and uniform; top rounded smoothly; folded edge consistent in thickness';
  }
  if (/panama/i.test(p)) {
    p += '; straw weave fine and tight; ribbon contrast sharp; brim shape stable without warping';
  }
  if (/visor/i.test(p)) {
    p += '; brim curvature consistent; strap alignment even; fabric tension natural';
  }
  if (/cloche/i.test(p)) {
    p += '; brim narrow and uniform; felt drape smooth; ribbon trim aligned with lower edge';
  }
  if (/straw/i.test(p)) {
    p += '; woven strands evenly spaced; ribbon centered; brim flat and smooth without wrinkles';
  }

  // 3) Creative vs Non-Creative حالت
  if (!ctx.isCreativeMode) {
    p += '; replace only the hat while keeping hairstyle, head angle, and lighting unchanged';
  } else {
    p += '; coordinate hat color and style with outfit tones for aesthetic consistency';
  }

  // 4) ثبات در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; brim thickness, weave direction, and crown height consistent across all views';
    p += '; shadows under brim uniform across perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
