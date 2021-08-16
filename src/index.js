import './styles/index.css';
import './styles/effects.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all'

import typewrite from './components/typewriter';
import fadeText from './components/fadeText';
import './components/scroll';


const intro = document.querySelector('#welcome-heading');
const subHeading = document.querySelector('#welcome-sub-heading');

typewrite(intro).then(() => {
  fadeText(subHeading);
});
