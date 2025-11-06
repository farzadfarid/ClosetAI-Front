// src/app/models/prompt-rules/women/jeans.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyJeansRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی واژگان حساس
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'opaque denim material')
    .replace(/\bripped|torn|hole|cut[-\s]?out\b/gi, 'lightly distressed detailing without revealing skin')
    .replace(/\bskin[-\s]?tight\b/gi, 'slim fitted silhouette with natural proportion')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع جین
  if (/skinny/i.test(p)) {
    p += '; fit follows natural leg shape without exaggeration or tension';
  }
  if (/high[-\s]?waist/i.test(p)) {
    p += '; waistband sits comfortably above hips maintaining realistic proportion';
  }
  if (/mom/i.test(p)) {
    p += '; relaxed thigh fit and gentle taper kept symmetrical in all angles';
  }
  if (/straight/i.test(p)) {
    p += '; side seams remain parallel from hip to hem ensuring proportional alignment';
  }
  if (/flare/i.test(p)) {
    p += '; flare begins smoothly below knee with balanced width';
  }
  if (/boyfriend/i.test(p)) {
    p += '; loose fit rendered naturally without excess volume or shape distortion';
  }
  if (/wide[-\s]?leg/i.test(p)) {
    p += '; leg width remains uniform and vertically aligned across all views';
  }
  if (/distress/i.test(p)) {
    p += '; distressed regions interpreted as surface texture only, not open holes';
  }
  if (/cropp/i.test(p)) {
    p += '; cropped hem positioned at ankle with even length across sides';
  }
  if (/vintage/i.test(p)) {
    p += '; color wash and fading stay balanced and consistent with realistic denim grain';
  }

  // 3) Creative vs Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the selected jeans; keep pose, leg shape, and other garments identical to the input photo';
  } else {
    p += '; harmonize denim tone and texture with rest of outfit for natural coordination';
  }

  // 4) Four-view consistency
  if (ctx.outputMode === 'four-view') {
    p += '; seams, pockets, waistband, and hem remain symmetrical and consistent across front, side, and back views';
    p += '; fading and fabric weave continuity preserved in all perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
