// src/app/models/prompt-rules/women/dresses.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyDressesRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی واژگان حساس
  p = p
    .replace(/\boff[-\s]?shoulder\b/gi, 'wide neckline near the shoulders with maintained upper coverage')
    .replace(/\bstrapless\b/gi, 'upper neckline design with full shoulder coverage')
    .replace(/\bthin\s+straps?\b/gi, 'narrow shoulder straps with modest width')
    .replace(/\bsleeveless\b/gi, 'short-sleeve style preserving arm coverage')
    .replace(/\bdeep\s*v\b/gi, 'moderate neckline with natural coverage')
    .replace(/\bplunge\b/gi, 'modest neckline')
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque matte fabric')
    .replace(/\bmini\b/gi, 'above-knee short dress with natural coverage')
    .replace(/\bsequin(s)?\b/gi, 'micro-sequin pattern with balanced reflection')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی
  if (/maxi/i.test(p)) {
    p += '; skirt length remains floor-reaching and proportionally balanced';
  }
  if (/midi/i.test(p)) {
    p += '; hem positioned at mid-calf with consistent silhouette';
  }
  if (/evening/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; reinterpret neckline with conservative coverage preserving elegance';
    } else {
      p += '; allow subtle shimmer and fabric coordination in formal context';
    }
  }
  if (/bodycon/i.test(p)) {
    p += '; fabric fit interpreted naturally without exaggeration; maintain realistic contours';
  }
  if (/mini/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; reinterpret hemline at natural knee level while keeping youthful style';
    } else {
      p += '; keep proportion short yet modest with natural skirt flow';
    }
  }
  if (/off[-\s]?shoulder/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; neckline adjusted to maintain shoulder coverage and proportional sleeves';
    } else {
      p += '; neckline remains relaxed and symmetric around shoulders';
    }
  }
  if (/shirt/i.test(p)) {
    p += '; front button line stays centered; belt aligned naturally around waist';
  }
  if (/slip/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; reinterpret neckline and straps conservatively with natural upper coverage';
    } else {
      p += '; satin drape remains soft with subtle sheen and natural folds';
    }
  }
  if (/wrap/i.test(p)) {
    p += '; waist tie and overlap stay secure and consistent across all angles';
  }

  // 3) Creative vs Non-creative behavior
  if (!ctx.isCreativeMode) {
    p += '; replace only the selected dress; preserve existing body coverage and realistic proportions identical to the input photo';
  } else {
    p += '; allow overall outfit harmony in color and texture while preserving human-realistic form';
  }

  // 4) Four-view
  if (ctx.outputMode === 'four-view') {
    p += '; neckline, sleeve length, waist tie, and hem remain consistent across front, right, and back views';
    p += '; maintain symmetry and natural drape continuity in all angles';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
