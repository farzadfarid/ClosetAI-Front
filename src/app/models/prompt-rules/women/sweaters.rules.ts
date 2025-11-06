// src/app/models/prompt-rules/women/sweaters.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applySweatersRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی واژگان پرریسک
  p = p
    .replace(/\brevealing|transparent|see[-\s]?through|sheer\b/gi, 'opaque knit texture')
    .replace(/\bchunky\b/gi, 'thick balanced knit')
    .replace(/\bover[-\s]?sized\b/gi, 'relaxed loose fit')
    .replace(/\bslim[-\s]?fit\b/gi, 'natural fit')
    .replace(/\bdeep\s*v\b/gi, 'moderate V-neck')
    .replace(/\braw hem\b/gi, 'finished hem')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین خاص مدل‌ها
  if (/cable/i.test(p)) {
    p += '; cable pattern remains even and consistent across front, sleeves, and back';
  }
  if (/v[-\s]?neck/i.test(p)) {
    p += '; neckline depth kept moderate with stable shoulder alignment';
  }
  if (/turtle/i.test(p)) {
    p += '; neck fold stays structured and uniform in all angles';
  }
  if (/cardigan/i.test(p)) {
    if (/open/i.test(p)) {
      p += '; open edges stay parallel with natural front drape';
    } else {
      p += '; front button alignment remains centered and consistent';
    }
  }
  if (/stripe/i.test(p)) {
    p += '; stripe alignment and color sequence remain stable across all views';
  }
  if (/cropp/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; hem interpreted at natural waistline without exposing skin';
    } else {
      p += '; short silhouette balanced naturally with outfit layers';
    }
  }
  if (/wool blend/i.test(p)) {
    p += '; heather texture rendered subtly and evenly';
  }

  // 3) Creative / Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the selected sweater; preserve body coverage and proportions identical to the input photo';
  } else {
    p += '; allow subtle coordination of colors and layering with other garments while maintaining photorealistic structure';
  }

  // 4) Four-view
  if (ctx.outputMode === 'four-view') {
    p += '; neckline, sleeve length, and hem position remain consistent across front, right-side, and back views';
    p += '; knit pattern continuity preserved in all directions';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
