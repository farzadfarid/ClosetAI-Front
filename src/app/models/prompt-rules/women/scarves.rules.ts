// src/app/models/prompt-rules/women/scarves.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyScarvesRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی اولیه
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'semi-opaque lightweight fabric')
    .replace(/\bshiny\b/gi, 'soft matte luster')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای هر نوع شال یا روسری
  if (/silk/i.test(p)) {
    p += '; fabric drapes naturally with gentle highlights; corners remain defined and smooth';
  }
  if (/wool/i.test(p)) {
    p += '; texture visibly soft with fine fiber detail; edges slightly uneven to show natural yarn finish';
  }
  if (/printed/i.test(p)) {
    p += '; pattern clarity consistent across folds; color alignment uniform and not distorted';
  }
  if (/knitted/i.test(p)) {
    p += '; knit pattern evenly distributed; loops and rows visible with natural thickness';
  }
  if (/cashmere/i.test(p)) {
    p += '; ultra-soft fibers visible at macro level; smooth drape and gentle surface sheen';
  }
  if (/infinity/i.test(p)) {
    p += '; loop connection seamless; folds arranged symmetrically; thickness realistic around neck';
  }
  if (/square/i.test(p)) {
    p += '; geometry perfectly square; edges flat with neat seams; corners remain crisp';
  }
  if (/pashmina/i.test(p)) {
    p += '; weave fine and tight; drape fluid with gentle folds; matte tone consistent';
  }
  if (/fringe/i.test(p)) {
    p += '; tassels evenly spaced and straight; woven directionality consistent; soft weight retained';
  }
  if (/lightweight/i.test(p)) {
    p += '; fabric floats softly; translucency balanced; edges remain flat and defined';
  }

  // 3) Creative vs Non-Creative حالت
  if (!ctx.isCreativeMode) {
    p += '; replace only the scarf while preserving body pose, neck visibility, and lighting balance';
  } else {
    p += '; coordinate scarf color and texture with outfit tones for a cohesive and elegant look';
  }

  // 4) ثبات در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; folds, weave direction, and fabric edges consistent in all perspectives';
    p += '; fabric behavior and shadow softness identical across each view';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
