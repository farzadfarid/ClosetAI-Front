// src/app/models/prompt-rules/women/skirts.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applySkirtsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی واژگان و اصلاح پوشش
  p = p
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque layered fabric')
    .replace(/\bmini\b/gi, 'above-the-knee length')
    .replace(/\bmicro\b/gi, 'short length with modest coverage')
    .replace(/\bslit\b/gi, 'subtle slit with limited height for natural movement')
    .replace(/\bsheer\b/gi, 'opaque finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع دامن
  if (/mini/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; hemline interpreted slightly above knees to maintain modest coverage';
    } else {
      p += '; proportioned hemline rendered natural with balanced thigh coverage';
    }
  }
  if (/midi/i.test(p)) {
    p += '; length extends to mid-calf maintaining fluid drape and proportionate flare';
  }
  if (/maxi/i.test(p)) {
    p += '; floor-length drape preserved with continuous soft pleating in all views';
  }
  if (/pleat/i.test(p)) {
    p += '; pleat spacing remains uniform and vertical from waist to hem';
  }
  if (/a[-\s]?line/i.test(p)) {
    p += '; gentle flare maintained symmetrically from waist to hem for realistic structure';
  }
  if (/pencil/i.test(p)) {
    p += '; fitted silhouette aligned to natural leg contour without tight compression';
  }
  if (/wrap/i.test(p)) {
    p += '; overlapping panels stay closed and flat during rendering; tie placement fixed at side waist';
  }
  if (/denim/i.test(p)) {
    p += '; button and pocket alignment consistent; stitching follows authentic denim layout';
  }
  if (/leather/i.test(p)) {
    p += '; subtle sheen kept controlled; surface reflection balanced with natural folds';
  }
  if (/tulle/i.test(p)) {
    p += '; layered mesh interpreted as semi-dense fabric maintaining modest opacity';
  }

  // 3) Creative vs Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the selected skirt; keep upper garments and lighting identical to input photo';
  } else {
    p += '; coordinate skirt tone and material with upper outfit for cohesive aesthetic';
  }

  // 4) Four-view handling
  if (ctx.outputMode === 'four-view') {
    p += '; waistband, pleats, seams, and folds remain consistent across front, side, and back views';
    p += '; skirt length and volume appear balanced from all perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
