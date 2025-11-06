// src/app/models/prompt-rules/women/jewelry.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyJewelryRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی اولیه
  p = p
    .replace(/\btransparent|see[-\s]?through|sheer\b/gi, 'solid polished material')
    .replace(/\bshiny\b/gi, 'subtle reflective finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قواعد اختصاصی برای هر نوع جواهر
  if (/necklace/i.test(p)) {
    p += '; chain drapes naturally along neckline; pendant centered and proportional';
  }
  if (/bracelet/i.test(p) && !/cuff/i.test(p)) {
    p += '; bracelet curvature follows wrist shape; links and charms evenly spaced';
  }
  if (/earrings/i.test(p)) {
    p += '; earrings symmetrical on both sides; studs or drops hang naturally with balanced alignment';
  }
  if (/rings/i.test(p)) {
    p += '; rings arranged in a clean visible line; stone reflections kept subtle and realistic';
  }
  if (/anklet/i.test(p)) {
    p += '; chain curvature follows ankle contour; charm centered; consistent lighting and proportion';
  }
  if (/brooch/i.test(p)) {
    p += '; positioned flat against surface; pin and decorative form rendered in proper perspective';
  }
  if (/choker/i.test(p)) {
    p += '; band fits snugly around neck with even spacing; pendant centered accurately';
  }
  if (/pendant/i.test(p)) {
    p += '; chain sag rendered naturally; pendant positioned symmetrically in frame';
  }
  if (/cuff/i.test(p)) {
    p += '; metal curvature smooth and consistent; opening gap even and proportionate';
  }
  if (/hoop/i.test(p)) {
    p += '; hoops perfectly circular with consistent thickness and reflective highlights';
  }

  // 3) Creative vs Non-Creative حالت
  if (!ctx.isCreativeMode) {
    p += '; replace only the jewelry item while keeping skin tone, lighting, and body pose consistent';
  } else {
    p += '; harmonize jewelry tone with outfit and makeup for coherent elegant appearance';
  }

  // 4) ثبات در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; reflections, gem highlights, and metal color consistent across all views';
    p += '; jewelry positioning remains stable relative to body orientation';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
