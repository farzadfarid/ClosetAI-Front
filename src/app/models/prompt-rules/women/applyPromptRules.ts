import { RuleCtx } from './sweaters.rules';
import { applySweatersRules } from './sweaters.rules';
import { applyDressesRules } from './dresses.rules';
import { applyJumpsuitsRules } from './jumpsuits.rules';
import { applyPantsRules } from './pants.rules';
import { applyJeansRules } from './jeans.rules';
import { applySkirtsRules } from './skirts.rules';
import { applyShortsRules } from './shorts.rules';
import { applyJacketsRules } from './jackets.rules';
import { applyBlazersRules } from './blazers.rules';
import { applyHoodiesRules } from './hoodies.rules';
import { applyCardigansRules } from './cardigans.rules';
import { applyHeelsRules } from './heels.rules';
import { applySneakersRules } from './sneakers.rules';
import { applyBootsRules } from './boots.rules';
import { applySandalsRules } from './sandals.rules';
import { applyBagsRules } from './bags.rules';
import { applyJewelryRules } from './jewelry.rules';
import { applyScarvesRules } from './scarves.rules';
import { applyHatsRules } from './hats.rules';

export function applyPromptRules(category: string, prompt: string, ctx: RuleCtx): string {
  category = category.toLowerCase();

  if (category.includes('sweater')) return applySweatersRules(prompt, ctx);
  if (category.includes('dress')) return applyDressesRules(prompt, ctx);
  if (category.includes('jumpsuit')) return applyJumpsuitsRules(prompt, ctx);
  if (category.includes('pants')) return applyPantsRules(prompt, ctx);
  if (category.includes('jean')) return applyJeansRules(prompt, ctx);
  if (category.includes('skirt')) return applySkirtsRules(prompt, ctx);
  if (category.includes('short')) return applyShortsRules(prompt, ctx);
  if (category.includes('jacket')) return applyJacketsRules(prompt, ctx);
  if (category.includes('blazer')) return applyBlazersRules(prompt, ctx);
  if (category.includes('hoodie')) return applyHoodiesRules(prompt, ctx);
  if (category.includes('cardigan')) return applyCardigansRules(prompt, ctx);
  if (category.includes('heel')) return applyHeelsRules(prompt, ctx);
  if (category.includes('sneaker')) return applySneakersRules(prompt, ctx);
  if (category.includes('boot')) return applyBootsRules(prompt, ctx);
  if (category.includes('sandal')) return applySandalsRules(prompt, ctx);
  if (category.includes('bag')) return applyBagsRules(prompt, ctx);
  if (category.includes('jewelry')) return applyJewelryRules(prompt, ctx);
  if (category.includes('scarf')) return applyScarvesRules(prompt, ctx);
  if (category.includes('hat')) return applyHatsRules(prompt, ctx);

  // fallback
  return `${prompt}; clean studio background; consistent perspective and lighting across views`;
}
