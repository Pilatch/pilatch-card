
// PilatchCard: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './pilatch-card.core.js';
import { COMPONENTS } from './pilatch-card.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
