// src/app/models/prompt-rules/women/blazers.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyBlazersRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی و بهینه‌سازی توضیحات
  p = p
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque suiting fabric')
    .replace(/\bshiny\b/gi, 'subtle satin finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی بر اساس نوع بلیزر
  if (/classic/i.test(p)) {
    p += '; lapels and button spacing follow traditional blazer proportions';
  }
  if (/oversized/i.test(p)) {
    p += '; shoulder width extended slightly while preserving balanced silhouette';
  }
  if (/double[-\s]?breasted/i.test(p)) {
    p += '; both button rows remain parallel and evenly aligned across front panels';
  }
  if (/fitted/i.test(p)) {
    p += '; waist taper maintained naturally without distortion of torso proportions';
  }
  if (/plaid/i.test(p)) {
    p += '; plaid pattern alignment remains consistent across seams and lapels';
  }
  if (/linen/i.test(p)) {
    p += '; linen weave texture rendered naturally with soft surface irregularities';
  }
  if (/velvet/i.test(p)) {
    p += '; velvet pile rendered with controlled highlights; lapel satin retains smooth contrast';
  }
  if (/cropped/i.test(p)) {
    p += '; cropped length aligned at waist maintaining coherent sleeve and torso ratio';
  }
  if (/sleeveless/i.test(p)) {
    p += '; armholes shaped precisely with neat tailored finish and clean edge binding';
  }
  if (/tuxedo/i.test(p)) {
    p += '; satin lapel sheen remains subtle and consistent under all lighting conditions';
  }

  // 3) Creative vs Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the blazer; maintain pose, undershirt, and lighting identical to original image';
  } else {
    p += '; coordinate blazer color and fabric with outfit tone for cohesive fashion styling';
  }

  // 4) Four-view consistency
  if (ctx.outputMode === 'four-view') {
    p += '; lapel shape, pocket placement, and button alignment remain consistent across all views';
    p += '; shoulder seams and sleeve proportions stay balanced in front, side, and back perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
