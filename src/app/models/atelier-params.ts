export function buildAtelierPrompt(sel: {
  categoryLabel?: string;
  selectedPrompt?: string;
}): string {

  const raw = (sel.selectedPrompt ?? '').trim();
  const lower = raw.toLowerCase();

  if (raw.startsWith("recreate this playful photobooth style strip")) {
    return sel.selectedPrompt!.trim();
  }


  const parts: string[] = [];

  // مقدمه
  parts.push(
    'Edit this uploaded portrait photo into a refined, cinematic, and artistic atelier-style image.',
    'The input photo may contain one or multiple people.',
    'Keep all faces and persons in their same positions as in the uploaded image.'
  );

  // توضیح سبک انتخابی
  if (sel.selectedPrompt) {
    parts.push(`Style to apply: ${sanitize(sel.selectedPrompt)}.`);
  } else if (sel.categoryLabel) {
    parts.push(`Follow the general mood of ${sel.categoryLabel} photography style.`);
  }

  // قوانین ثابت برای حفظ چهره
  parts.push(
    'Preserve every individual face exactly as in the uploaded image; do not redraw, beautify, or regenerate any faces.',
    'Keep all facial identities, proportions, and expressions identical for all people.',
    'Do not modify facial landmarks (eyes, nose, mouth, jawline, ears, eyebrows).',
    'Do not perform face restoration, face swapping, or blending between people.',
    'You may change wardrobe, background, lighting style, and color grading as needed for the selected style, but keep all faces natural and unchanged.',
    'Use only the subjects present in the uploaded photo (no new people and no removals).',
    'Do not re-age, re-gender, or stylize faces into cartoon or obviously AI-looking results.'
  );

  return clean(parts.join(' '));

  function clean(s: string): string {
    return s.replace(/\s{2,}/g, ' ').trim().slice(0, 3000);
  }

  function sanitize(t: string): string {
    return t
      .replace(/\b(create|generate|make)\b/gi, 'transform')
      .replace(/\b(buttocks|underwear|swimwear|nudity|lingerie)\b/gi, '')
      .replace(/\b(pixel[-\s]?perfect|ai-generated|fake)\b/gi, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
}
