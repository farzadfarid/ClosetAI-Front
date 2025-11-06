// src/app/models/prompt-rules/women/jumpsuits.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyJumpsuitsRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی واژگان حساس
  p = p
    .replace(/\boff[-\s]?shoulder\b/gi, 'wide neckline near the shoulders with stable coverage')
    .replace(/\bhalter\b/gi, 'narrow strap neckline maintaining shoulder coverage')
    .replace(/\bsleeveless\b/gi, 'short-sleeve interpretation with natural arm coverage')
    .replace(/\bdeep\s*v\b/gi, 'moderate neckline with proper coverage')
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque fabric with matte texture')
    .replace(/\bplunge\b/gi, 'modest neckline')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی
  if (/casual/i.test(p)) {
    p += '; fabric tie and button alignment remain consistent and proportional';
  }
  if (/formal/i.test(p)) {
    p += '; belt and pleats remain balanced with clean seams and proper waist placement';
  }
  if (/denim/i.test(p)) {
    p += '; visible seams and stitching rendered with realistic denim structure';
  }
  if (/wide[-\s]?leg/i.test(p)) {
    p += '; leg width and drape remain balanced and stable across all views';
  }
  if (/romper/i.test(p)) {
    p += '; shorts length adjusted naturally for modest thigh coverage';
  }
  if (/sleeveless/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; reinterpret upper design with capped sleeves to maintain shoulder coverage';
    } else {
      p += '; keep neckline and shoulder proportions natural and consistent';
    }
  }
  if (/printed/i.test(p)) {
    p += '; pattern alignment stays coherent with realistic scale and orientation';
  }
  if (/utility/i.test(p)) {
    p += '; maintain structured appearance and functional pocket placement';
  }
  if (/off[-\s]?shoulder/i.test(p)) {
    if (!ctx.isCreativeMode) {
      p += '; neckline adjusted slightly upward to preserve shoulder coverage';
    } else {
      p += '; neckline sits relaxed yet stable across shoulders';
    }
  }
  if (/belted/i.test(p)) {
    p += '; belt positioned correctly around waist with consistent buckle alignment';
  }

  // 3) Creative vs Non-creative mode
  if (!ctx.isCreativeMode) {
    p += '; replace only the jumpsuit; keep lighting, pose, and coverage identical to the input photo';
  } else {
    p += '; allow soft coordination of colors and textures across full outfit while keeping body proportions realistic';
  }

  // 4) Four-view
  if (ctx.outputMode === 'four-view') {
    p += '; maintain consistent belt, seam, and pocket placement across front, right, and back views';
    p += '; neckline, sleeve, and pant shape remain symmetrical and stable from all angles';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
