import style from '../styles/index.scss';
import { fadeCssAnimation } from './fade_animations.js';
import { sideNavScript } from './sidenavigation.js';
import { initSplash } from './splashScreen.js';
import { initNavBarMovement } from './navbar_movement.js';
import { initPageTransition } from './body_fade_transition';
import { shakeInit } from './shakespearapi';
import '../fonts/FKRasterGrotesk-Rounded.otf';


fadeCssAnimation();
sideNavScript();
initSplash();
initNavBarMovement();
initPageTransition();
shakeInit();
