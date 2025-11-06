// src/app/models/prompt-rules/women/blouses.rules.ts

export interface RuleCtx {
  isCreativeMode: boolean;
  outputMode: 'single' | 'four-view';
}

export function applyBlousesRules(itemPrompt: string, ctx: RuleCtx): string {
  let p = itemPrompt.trim();

  // 1) خنثی‌سازی واژگانِ پرریسک برای بلوز/شرت
  p = p
    // شفافیت‌ها → نیمه‌مات/اپک
    .replace(/\b(sheer|transparent|see[-\s]?through|gauzy)\b/gi, 'semi-matte')
    .replace(/\b(chiffon)\s+(fabric|texture)?\b/gi, 'chiffon with semi-matte finish')
    .replace(/\b(lace)\b/gi, 'lace with opaque backing')
    // برش‌های باز یا عمیق → یقه متعارف
    .replace(/\b(deep\s*v|plunge|low[-\s]?cut)\b/gi, 'modest high V-neck')
    .replace(/\boff[-\s]?shoulder\b/gi, 'wide neckline near the shoulders')
    // لبه‌های خام → تمیز
    .replace(/\braw hem\b/gi, 'clean finished hem')
    // شدت براقیت ساتن
    .replace(/\b(satin)\b/gi, 'satin with gentle low-gloss sheen')
    // کلمات مبهم
    .replace(/\bdramatic( drape| volume)?\b/gi, 'balanced drape');

  // 2) قواعد خاص نمونه‌های معروف این گروه (بدون تضاد با متن عمومی)
  // Satin Wrap: همپوشانی و محل گره پایدار
  if (/wrap\b/i.test(p)) {
    p += '; secure crossover front with stable overlap; fixed side tie bow remaining in the same position';
  }
  // Bow Tie: جای پاپیون ثابت و تقارن طبیعی
  if (/\bbow\b/i.test(p)) {
    p += '; bow sits naturally at the center/side and remains symmetric across views';
  }
  // Stripes: هم‌ترازی راه‌راه‌ها
  if (/\bstripe(d|s)?\b/i.test(p)) {
    p += '; stripe alignment remains straight and evenly spaced';
  }
  // Denim shirt: دوخت‌ها و جیب‌ها مشخص
  if (/\bdenim\b/i.test(p)) {
    p += '; visible topstitch seams and consistent pocket placement';
  }
  // Ruffle: حجم کنترل‌شده
  if (/\bruffle(s)?\b/i.test(p)) {
    p += '; ruffle volume remains soft and controlled';
  }

  // 3) تفکیک خلاق/غیرخلاق
  if (!ctx.isCreativeMode) {
    // حالت replace-only: کاهش پوشش ممنوع، تغییرات فقط برای فیت طبیعی
    p += '; interpret neckline and sleeve coverage conservatively; local adjustments only for natural fit';
  } else {
    // حالت خلاق: هماهنگ‌سازی معقول (شدت کنترل‌شده)
    p += '; allow subtle coordination with other garments in color and fabric while keeping realism';
  }

  // 4) الزامات سه‌نما برای این گروه
  if (ctx.outputMode === 'four-view') {
    p += '; keep collar height, button spacing, cuff shape, and hem length identical in front, right-side, and back views';
    p += '; maintain symmetric shoulder lines and consistent sleeve length across views';
  }

  // 5) پاکسازی نهایی فاصله‌ها
  return p.replace(/\s{2,}/g, ' ').trim();
}
