import './styles/index.css';
import './styles/effects.css';

import typewrite from './components/typewriter';
import fadeText from './components/fadeText';

const intro = document.querySelector('#intro-heading');
const subHeading = document.querySelector('#sub-heading');

typewrite(intro).then(() => {
  fadeText(subHeading);
});
