// src/app/models/prompt-rules/women/cardigans.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyCardigansRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) پاکسازی توصیفات
  p = p
    .replace(/\btransparent|sheer|see[-\s]?through\b/gi, 'opaque knit fabric')
    .replace(/\bshiny\b/gi, 'soft matte finish')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // 2) قوانین اختصاصی برای انواع کاردیگان
  if (/long/i.test(p)) {
    p += '; front edges hang naturally with vertical alignment and consistent knit density';
  }
  if (/cropped/i.test(p)) {
    p += '; cropped hem positioned naturally above waist maintaining realistic sleeve proportions';
  }
  if (/chunky/i.test(p)) {
    p += '; knit loops appear thick but balanced; overall drape remains structured and natural';
  }
  if (/belted/i.test(p)) {
    p += '; belt tie rendered flat and aligned at natural waist height with coherent fabric tension';
  }
  if (/button[-\s]?up/i.test(p)) {
    p += '; buttons evenly spaced; ribbed edges maintain realistic elasticity and symmetry';
  }
  if (/open\s*front/i.test(p)) {
    p += '; open front folds naturally with visible inner fabric consistency';
  }
  if (/printed/i.test(p)) {
    p += '; printed pattern integrated seamlessly into knit texture with accurate color blending';
  }
  if (/cable[-\s]?knit/i.test(p)) {
    p += '; cable pattern spacing remains uniform across front and sleeves for realism';
  }
  if (/wool/i.test(p)) {
    p += '; wool fibers rendered soft and even; surface texture remains proportional to garment scale';
  }
  if (/mohair/i.test(p)) {
    p += '; mohair texture interpreted with soft haze and controlled brightness, avoiding overexposure';
  }

  // 3) حالت خلاق و غیرخلاق
  if (!ctx.isCreativeMode) {
    p += '; replace only the cardigan; keep underlying outfit, body pose, and lighting identical to input image';
  } else {
    p += '; coordinate cardigan tone and knit density with outfit for natural seasonal styling';
  }

  // 4) ثبات در حالت چندنما
  if (ctx.outputMode === 'four-view') {
    p += '; sleeve length, button placement, and knit pattern remain consistent across front, side, and back views';
    p += '; edges and drape behave naturally with gravity and fabric weight in all perspectives';
  }

  return p.replace(/\s{2,}/g, ' ').trim();
}
