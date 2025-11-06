// src/app/models/prompt-rules/women/shorts.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyShortsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی و اصلاح پوشش
  p = p
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque woven fabric')
    .replace(/\bshort[-\s]?shorts?\b/gi, 'mid-thigh shorts')
    .replace(/\bmicro[-\s]?shorts?\b/gi, 'modest mid-thigh shorts')
    .replace(/\bcut[-\s]?off\b/gi, 'rolled hem design with stable coverage')
    .replace(/\bripped|frayed|distress(ed)?\b/gi, 'lightly worn texture without exposure')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع شورت
  if (/denim/i.test(p)) {
    p += '; denim weave and topstitch lines remain consistent and proportional';
  }
  if (/high[-\s]?waist/i.test(p)) {
    p += '; waistband positioned naturally above hips maintaining realistic fit';
  }
  if (/tailor/i.test(p)) {
    p += '; pleats and seams stay crisp with clean symmetrical lines';
  }
  if (/bermuda/i.test(p)) {
    p += '; knee-length preserved with balanced coverage and smooth hem alignment';
  }
  if (/paperbag/i.test(p)) {
    p += '; gathered waistband rendered softly with central fabric belt knot';
  }
  if (/pleat/i.test(p)) {
    p += '; front pleats remain subtle and vertically aligned';
  }
  if (/linen/i.test(p)) {
    p += '; natural wrinkles interpreted delicately without distortion';
  }
  if (/cargo/i.test(p)) {
    p += '; pocket flaps symmetric with proportional reinforcement seams';
  }
  if (/leather/i.test(p)) {
    p += '; matte leather finish rendered evenly with realistic fold shadows';
  }
  if (/sport/i.test(p)) {
    p += '; waistband and curved hems stay balanced with natural stretch behavior';
  }

  // 3) Creative vs Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the shorts; maintain leg coverage and lighting identical to input photo';
  } else {
    p += '; harmonize shorts color and material with the rest of the outfit for a natural look';
  }

  // 4) Four-view handling
  if (ctx.outputMode === 'four-view') {
    p += '; waistband, pockets, and hem alignment remain consistent across front, side, and back views';
    p += '; fit and coverage uniform from all perspectives with realistic movement folds';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
