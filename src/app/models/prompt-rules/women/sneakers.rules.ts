// src/app/models/prompt-rules/women/sneakers.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applySneakersRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی اولیه
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'opaque material')
    .replace(/\bshiny\b/gi, 'soft matte finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قواعد اختصاصی برای انواع کتانی‌ها
  if (/classic/i.test(p)) {
    p += '; toe cap and sole edges maintain straight alignment and even tone';
  }
  if (/chunky/i.test(p)) {
    p += '; thick sole layers rendered proportionally with balanced tread detail';
  }
  if (/slip[-\s]?on/i.test(p)) {
    p += '; side elastic rendered symmetrically; top opening follows foot contour naturally';
  }
  if (/platform/i.test(p)) {
    p += '; elevated sole thickness consistent across all views with clean edge transitions';
  }
  if (/high[-\s]?top/i.test(p)) {
    p += '; ankle collar height consistent and evenly shaped around upper section';
  }
  if (/low[-\s]?top/i.test(p)) {
    p += '; low-cut collar follows natural curvature of ankle with realistic thickness';
  }
  if (/running/i.test(p)) {
    p += '; mesh and outsole pattern rendered precise; overall silhouette aerodynamic and balanced';
  }
  if (/canvas/i.test(p)) {
    p += '; canvas texture fine-grained and even; stitching visible but not exaggerated';
  }
  if (/leather/i.test(p)) {
    p += '; leather surface shows subtle creases and natural matte sheen under light';
  }
  if (/designer/i.test(p)) {
    p += '; decorative logos or accents integrated seamlessly with base design without distortion';
  }

  // 3) Creative vs Non-Creative
  if (!ctx.isCreativeMode) {
    p += '; render only the sneakers; keep person’s pose, legs, and environment identical to the input photo';
  } else {
    p += '; match sneaker color and texture harmoniously with outfit style for coherent presentation';
  }

  // 4) ثبات در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; maintain consistent sole height, lace placement, and overall geometry across all views';
    p += '; lighting and texture remain uniform and realistic in every perspective';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
