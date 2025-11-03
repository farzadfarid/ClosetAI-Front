// src/app/utils/build-outfit-prompt.ts

import { OutfitSelection } from '../models/outfit-params';

const SCOPE_LOCK = `
This prompt is for a virtual outfit try-on. 
The subject is an adult human and must remain the same person, body, and face. 
Focus only on applying the selected outfit to the given image realistically. 
Keep lighting, pose, and background unchanged.
`;

export function buildOutfitPrompt(sel: OutfitSelection): string {
  const parts: string[] = [];
  parts.push(SCOPE_LOCK.trim());

  parts.push(`Gender: ${sel.gender}.`);
  parts.push(`Category: ${sel.category}.`);
  parts.push(`Selected outfit: ${sel.outfitName}.`);

  const p = sel.params;
  if (p.fit) parts.push(`Fit: ${p.fit}.`);
  if (p.fabric) parts.push(`Fabric: ${p.fabric}.`);
  if (p.color) parts.push(`Color: ${p.color}.`);
  if (p.sleeve) parts.push(`Sleeve: ${p.sleeve}.`);
  if (p.length) parts.push(`Length: ${p.length}.`);
  if (p.neckline) parts.push(`Neckline: ${p.neckline}.`);
  if (p.pattern) parts.push(`Pattern: ${p.pattern}.`);

  return parts.join(' ');
}
