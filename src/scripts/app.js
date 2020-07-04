import _ from 'lodash';
import style from '../styles/index.scss';
import { fadeCssAnimation } from './fade_animations.js';
import { sideNavScript } from './sidenavigation.js';
import { initSplash } from './splashScreen.js';
import '../fonts/FavoritPro-Regular.otf';



fadeCssAnimation();
sideNavScript();
initSplash();
