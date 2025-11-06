// src/app/models/prompt-rules/women/boots.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyBootsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی اولیه
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'opaque material')
    .replace(/\bshiny\b/gi, 'soft sheen')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قواعد اختصاصی برای انواع بوت‌ها
  if (/ankle/i.test(p)) {
    p += '; ankle height maintained naturally around lower leg with clean shaft contour';
  }
  if (/chelsea/i.test(p)) {
    p += '; elastic side panels rendered symmetrically with consistent texture stretch';
  }
  if (/combat/i.test(p)) {
    p += '; lace tension and eyelet spacing realistic; outsole tread balanced and proportionate';
  }
  if (/flat/i.test(p)) {
    p += '; flat heel rendered stable; shaft vertical alignment consistent across all views';
  }
  if (/heeled/i.test(p)) {
    p += '; heel angle proportional and slender; maintains physical realism without distortion';
  }
  if (/knee[-\s]?high/i.test(p)) {
    p += '; shaft height and curvature align with natural leg contour maintaining straight vertical seam';
  }
  if (/over[-\s]?the[-\s]?knee/i.test(p)) {
    p += '; upper shaft fitted smoothly over leg with consistent width and soft bend at knee';
  }
  if (/rain/i.test(p)) {
    p += '; rubber reflections kept controlled; waterproof material appears consistent under neutral light';
  }
  if (/suede/i.test(p)) {
    p += '; suede texture soft and matte; nap direction uniform with natural shading';
  }
  if (/western/i.test(p)) {
    p += '; stitching pattern symmetrical and subtle; toe and heel proportions stay realistic and grounded';
  }

  // 3) Creative و Non-creative
  if (!ctx.isCreativeMode) {
    p += '; replace only the boots while preserving leg pose, lighting, and background consistency';
  } else {
    p += '; coordinate boot tone and texture with outfit for balanced and realistic styling';
  }

  // 4) پایداری در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; shaft height, heel shape, and toe contour remain consistent in front, side, and back views';
    p += '; material texture and reflections uniform across all perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
