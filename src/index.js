import './styles/index.css';
import './styles/effects.css';

import typewrite from './components/typewriter';
import fadeText from './components/fadeText';

const intro = document.querySelector('#welcome-heading');
const subHeading = document.querySelector('#welcome-sub-heading');

typewrite(intro).then(() => {
  fadeText(subHeading);
});
