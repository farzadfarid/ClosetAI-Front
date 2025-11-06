// src/app/models/prompt-rules/women/pants.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyPantsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی واژگان حساس
  p = p
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque fabric with matte finish')
    .replace(/\bskin[-\s]?tight|body[-\s]?fit\b/gi, 'natural slim fit')
    .replace(/\bplunge\b/gi, 'regular rise')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع شلوار
  if (/wide[-\s]?leg/i.test(p)) {
    p += '; leg width remains uniform and proportional across all views';
  }
  if (/high[-\s]?waist/i.test(p)) {
    p += '; waistband positioned naturally above hips with balanced rise height';
  }
  if (/culotte/i.test(p)) {
    p += '; cropped wide silhouette rendered naturally without exaggeration';
  }
  if (/straight/i.test(p)) {
    p += '; seams and side lines remain parallel and stable along full leg length';
  }
  if (/flare/i.test(p)) {
    p += '; gradual leg flare begins below knee maintaining realistic proportion';
  }
  if (/pleat/i.test(p)) {
    p += '; front pleats defined subtly with natural drape continuity';
  }
  if (/chino/i.test(p)) {
    p += '; pocket openings and cuffs aligned evenly across both sides';
  }
  if (/paperbag/i.test(p)) {
    p += '; waist gathers remain soft and belt knot centered naturally';
  }
  if (/cropp/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; cropped hem interpreted at ankle height with modest coverage';
    } else {
      p += '; cropped length balanced for proportionate silhouette';
    }
  }
  if (/tailor/i.test(p)) {
    p += '; crease lines stay straight and consistent through all perspectives';
  }

  // 3) Creative vs Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the selected pants; maintain leg coverage, lighting, and proportions identical to the input photo';
  } else {
    p += '; allow color coordination with upper garments for coherent outfit realism';
  }

  // 4) Four-view consistency
  if (ctx.outputMode === 'four-view') {
    p += '; waistband, seam lines, and pocket positions remain identical across front, side, and back views';
    p += '; fabric drape and fit continuity preserved from all angles';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
