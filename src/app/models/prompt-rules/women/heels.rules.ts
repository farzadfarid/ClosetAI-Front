// src/app/models/prompt-rules/women/heels.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyHeelsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی و استانداردسازی اولیه
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'opaque material')
    .replace(/\bshiny\b/gi, 'subtle sheen')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع کفش پاشنه‌دار
  if (/stiletto/i.test(p)) {
    p += '; heel height and curvature stay realistic and balanced across all angles';
  }
  if (/block/i.test(p)) {
    p += '; block heel rendered stable with accurate thickness and parallel edges';
  }
  if (/wedge/i.test(p)) {
    p += '; wedge contour follows natural slope with even espadrille texture detail';
  }
  if (/ankle[-\s]?strap/i.test(p)) {
    p += '; straps and buckles aligned symmetrically around ankle without distortion';
  }
  if (/platform/i.test(p)) {
    p += '; platform thickness proportioned realistically with front-to-back balance';
  }
  if (/peep[-\s]?toe/i.test(p)) {
    p += '; front toe opening shaped naturally with consistent curvature and depth';
  }
  if (/slingback/i.test(p)) {
    p += '; sling strap tension rendered natural and connected cleanly to heel edge';
  }
  if (/pump/i.test(p)) {
    p += '; toe box and heel height maintain proportional elegance without deformation';
  }
  if (/kitten/i.test(p)) {
    p += '; heel angle low and slim with realistic geometry, straps follow foot contour naturally';
  }
  if (/embellished/i.test(p)) {
    p += '; crystal reflections appear controlled and consistent under soft light without glare';
  }

  // 3) Creative و Non-creative
  if (!ctx.isCreativeMode) {
    p += '; replace only the heels while keeping pose, leg position, and lighting unchanged';
  } else {
    p += '; match heel color and texture harmoniously with outfit palette for elegant presentation';
  }

  // 4) پایداری در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; heel height, toe shape, and strap positions remain consistent across all views';
    p += '; reflections and material highlights behave naturally in front, side, and back perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
