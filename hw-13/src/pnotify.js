import { defaults, Stack } from '@pnotify/core';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.width = '180px';
defaults.sticker = false;
defaults.maxTextHeight = 0;

export const myStack = new Stack({
  dir1: 'left',
  dir2: 'down',
  firstpos1: 0,
  firstpos2: 0,
  spacing1: 100,
  spacing2: 10,
  push: 'bottom',
  context: document.querySelector('.wrapper'),
});
