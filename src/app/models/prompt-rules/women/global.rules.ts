// src/app/models/prompt-rules/global.rules.ts

export function applyGlobalPromptRules(prompt: string): string {
  let p = prompt.trim();

  // حذف عبارات ناخواسته یا تکراری
  p = p
    .replace(/\bphoto of\b|\bimage of\b/gi, '')
    .replace(/\bAI[-\s]?generated\b/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // اصول عمومی برای همه آیتم‌ها
  p += '; consistent neutral lighting and realistic material reflections';
  p += '; no logos, no text, no background distractions';
  p += '; product clearly centered and isolated';
  p += '; correct human proportions if model appears';
  p += '; maintain natural shadows and clean studio look';
  p += '; keep same perspective and size ratio across results';

  return p.trim();
}
