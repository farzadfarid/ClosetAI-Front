// src/app/models/prompt-rules/women/bags.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyBagsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی اولیه و یکنواخت‌سازی توصیف
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'opaque material')
    .replace(/\bshiny\b/gi, 'soft reflective finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قواعد اختصاصی برای انواع کیف‌ها
  if (/tote/i.test(p)) {
    p += '; handles rendered symmetrically; bag body remains upright with realistic open-top depth';
  }
  if (/shoulder/i.test(p)) {
    p += '; strap length and curve follow shoulder line naturally; bag hangs balanced without distortion';
  }
  if (/crossbody/i.test(p)) {
    p += '; strap crosses body diagonally with natural tension; bag rests flat without twisting';
  }
  if (/clutch/i.test(p)) {
    p += '; compact form kept rectangular and rigid; metallic frame and closure rendered precise and centered';
  }
  if (/satchel/i.test(p)) {
    p += '; top handle arcs symmetrically; buckles and straps align proportionally on front flap';
  }
  if (/backpack/i.test(p)) {
    p += '; shoulder straps symmetrical; body curvature follows natural form with clean seams';
  }
  if (/bucket/i.test(p)) {
    p += '; drawstring tightness consistent; circular base shape preserved in all views';
  }
  if (/mini/i.test(p)) {
    p += '; mini proportions remain realistic; metallic chain rendered fine and uniform';
  }
  if (/evening/i.test(p)) {
    p += '; reflective finish subtle; chain strap fine and consistent under neutral lighting';
  }
  if (/quilted/i.test(p)) {
    p += '; diamond stitching evenly spaced; surface texture soft and padded without distortion';
  }

  // 3) Creative vs Non-Creative حالت
  if (!ctx.isCreativeMode) {
    p += '; replace only the bag while maintaining original body pose, hand placement, and lighting consistency';
  } else {
    p += '; coordinate bag color and texture with outfit tones to preserve visual harmony';
  }

  // 4) ثبات در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; bag proportions, handle alignment, and stitching pattern consistent in all views';
    p += '; reflections and shadows uniform across every perspective';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
