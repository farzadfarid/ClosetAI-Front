// src/app/models/prompt-rules/women/crops.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyCropsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) واژگان پرریسک
  p = p
    .replace(/\boff[-\s]?shoulder\b/gi, 'wide neckline near the shoulders with maintained shoulder coverage')
    .replace(/\bhalter\b/gi, 'slim shoulder coverage with secure neckline')
    .replace(/\bsleeveless\b/gi, 'short-sleeve design with natural arm coverage')
    .replace(/\bstrapless\b/gi, 'upper-coverage neckline with shoulder stability')
    .replace(/\bdeep\s*v\b/gi, 'modest high V-neckline')
    .replace(/\bplunge\b/gi, 'moderate neckline')
    .replace(/\braw hem\b/gi, 'clean finished hem')
    .replace(/\brevealing|transparent|sheer\b/gi, 'semi-matte opaque texture')
    .replace(/\bsequin(s)?\b/gi, 'micro-sequin finish with low reflectivity')
    .replace(/\bshort fitted crop top\b/gi, 'short top with balanced coverage')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین خاص هر نوع
  if (/wrap/i.test(p)) {
    p += '; crossover alignment stays stable and closed without changing waist coverage';
  }
  if (/lace/i.test(p)) {
    p += '; lace rendered opaque with modest lining underlay';
  }
  if (/ribbed/i.test(p)) {
    p += '; rib spacing remains uniform with stable stretch behavior';
  }
  if (/halter/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; reinterpret neckline with conservative coverage around shoulders';
    } else {
      p += '; maintain natural strap position and proportional neckline in all angles';
    }
  }
  if (/sleeveless/i.test(p) && !ctx.isCreativeMode) {
    p += '; reinterpret as short-sleeve top preserving shoulder coverage';
  }
  if (/graphic/i.test(p)) {
    p += '; front print remains centered and flat without distortion across views';
  }
  if (/denim/i.test(p)) {
    p += '; maintain subtle denim stitch accents with consistent seam lines';
  }
  if (/off[-\s]?shoulder/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; neckline interpreted conservatively to preserve shoulder coverage';
    } else {
      p += '; relaxed neckline remains naturally aligned on shoulders';
    }
  }
  if (/sequin/i.test(p)) {
    p += '; reflective balance kept moderate and even under all lighting';
  }

  // 3) Creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the selected top; maintain torso coverage identical to the input photo';
  } else {
    p += '; allow coordinated styling and color adjustment while preserving realistic body proportions';
  }

  // 4) Four-view
  if (ctx.outputMode === 'four-view') {
    p += '; neckline, sleeve, hemline, and decorative details remain consistent across front, right, and back views';
    p += '; maintain symmetrical shoulder lines and uniform waist position in all views';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
