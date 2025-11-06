// src/app/models/prompt-rules/women/jackets.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyJacketsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی توصیفات نامناسب یا مبهم
  p = p
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque fabric')
    .replace(/\bshiny\b/gi, 'subtle sheen')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع کت و پالتو
  if (/leather/i.test(p)) {
    p += '; surface gloss remains controlled; stitching and seams follow authentic jacket layout';
  }
  if (/denim/i.test(p)) {
    p += '; button alignment and seam placement remain consistent with classic denim structure';
  }
  if (/bomber/i.test(p)) {
    p += '; ribbed collar and cuffs retain uniform thickness and even symmetry across views';
  }
  if (/puffer/i.test(p)) {
    p += '; padding lines stay horizontal and evenly spaced for balanced volume';
  }
  if (/trench/i.test(p)) {
    p += '; belt, lapels, and buttons stay aligned with realistic drape and consistent overlap';
  }
  if (/wool/i.test(p)) {
    p += '; wool texture kept fine and uniform; structure maintains tailored proportion';
  }
  if (/raincoat/i.test(p)) {
    p += '; waterproof surface interpreted with light reflections only, avoiding plastic-like appearance';
  }
  if (/peacoat/i.test(p)) {
    p += '; lapels stay flat and symmetrical; double-breasted overlap rendered accurately';
  }
  if (/faux\s*fur/i.test(p)) {
    p += '; fur fibers rendered soft and uniform without exaggerated volume';
  }
  if (/quilted/i.test(p)) {
    p += '; quilt pattern spacing remains uniform; stitching interpreted with subtle depth for realism';
  }

  // 3) Creative vs Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the jacket or coat; preserve other garments, pose, and lighting from input image';
  } else {
    p += '; coordinate jacket tone and material harmoniously with outfit layers for realistic styling';
  }

  // 4) Four-view consistency
  if (ctx.outputMode === 'four-view') {
    p += '; seams, lapels, buttons, and pocket positions stay consistent across front, side, and back views';
    p += '; collar and shoulder proportions remain symmetrical in all perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
