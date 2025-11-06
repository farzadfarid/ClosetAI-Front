// src/app/models/prompt-rules/women/sandals.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applySandalsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی اولیه و استانداردسازی
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'opaque material')
    .replace(/\bshiny\b/gi, 'subtle sheen')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع صندل‌ها
  if (/flat/i.test(p)) {
    p += '; sole thickness remains minimal and parallel with consistent shadow edge';
  }
  if (/heeled/i.test(p)) {
    p += '; heel height realistic and balanced; straps maintain natural curvature around foot';
  }
  if (/strappy/i.test(p)) {
    p += '; multiple straps evenly spaced with correct tension and symmetry';
  }
  if (/platform/i.test(p)) {
    p += '; cork platform texture realistic and layered evenly; height proportioned to upper strap design';
  }
  if (/gladiator/i.test(p)) {
    p += '; lace and strap alignment follows natural leg contour; no overlapping or twisted details';
  }
  if (/slide/i.test(p)) {
    p += '; single strap rendered smooth and centered; top arch follows foot contour naturally';
  }
  if (/wedge/i.test(p)) {
    p += '; wedge height and angle consistent; cork or espadrille texture follows perspective naturally';
  }
  if (/thong/i.test(p)) {
    p += '; thong strap joins at toe symmetrically; leather texture consistent across all straps';
  }
  if (/espadrille/i.test(p)) {
    p += '; jute sole braid pattern even and continuous around full perimeter';
  }
  if (/dress/i.test(p)) {
    p += '; elegant strap lines remain slender; metallic or glossy reflections controlled and subtle';
  }

  // 3) Creative vs Non-Creative
  if (!ctx.isCreativeMode) {
    p += '; replace only the sandals while keeping pose, feet angle, and lighting identical';
  } else {
    p += '; harmonize sandal color and material with outfit tone for cohesive visual appeal';
  }

  // 4) حفظ ثبات در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; heel height, strap placement, and sole shape consistent in front, side, and back views';
    p += '; materials and reflections remain uniform across all perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
