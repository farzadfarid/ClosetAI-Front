// src/app/models/prompt-rules/women/tshirts.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyTShirtsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) واژگان پرریسک
  p = p
    .replace(/\boff[-\s]?shoulder\b/gi, 'wide neckline near the shoulders with full shoulder coverage')
    .replace(/\bhalter\b/gi, 'regular neckline with standard shoulder coverage')
    .replace(/\bstrapless\b/gi, 'secure neckline with shoulder support')
    .replace(/\bsleeveless\b/gi, 'short-sleeve style with natural arm coverage')
    .replace(/\bdeep\s*v\b/gi, 'modest V-neckline')
    .replace(/\bplunge\b/gi, 'moderate neckline')
    .replace(/\braw hem\b/gi, 'clean finished hem')
    .replace(/\bgraphic\b/gi, 'centered chest motif with balanced intensity')
    .replace(/\btight|clingy|revealing\b/gi, 'soft fitted')
    .replace(/\bcrop(ped)?\b/gi, ctx.isCreativeMode ? 'short top' : 'short top with natural coverage')
    .replace(/\bbaggy|oversized\b/gi, 'relaxed loose fit')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین خاص
  if (/graphic/i.test(p)) {
    p += '; graphic remains centered and consistent across all views';
  }
  if (/knotted/i.test(p)) {
    p += '; front knot fixed in position without altering hem length';
  }
  if (/ribbed/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; interpret as short-sleeve ribbed top with natural coverage';
    } else {
      p += '; maintain fine rib pattern with uniform spacing';
    }
  }
  if (/off[-\s]?shoulder/i.test(itemPrompt)) {
    if (!ctx.isCreativeMode) {
      p += '; reinterpret neckline conservatively with shoulder coverage';
    } else {
      p += '; neckline stable and realistic along shoulders';
    }
  }
  if (/crop/i.test(itemPrompt) && !ctx.isCreativeMode) {
    p += '; hem positioned at natural waistline without exposing skin';
  }
  if (/oversized/i.test(itemPrompt)) {
    p += '; relaxed silhouette without exaggeration';
  }
  if (/stripe/i.test(p)) {
    p += '; stripe alignment remains even and horizontal across all views';
  }

  // 3) Creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the selected top; maintain body coverage and proportions identical to the input photo';
  } else {
    p += '; allow color and texture coordination with lower garments while preserving realistic proportions';
  }

  // 4) Four-view
  if (ctx.outputMode === 'four-view') {
    p += '; neckline, sleeve shape, hem length, and pattern alignment remain consistent in front, right-side, and back views';
    p += '; maintain symmetry and natural shoulder lines across views';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
