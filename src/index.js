import './style.css';
import './styles/intro.css';

import typewrite from './components/typewriter'
import fadeText from './components/fadeText'

const intro=document.querySelector('#intro-heading');
const title=document.querySelector('#intro-text');

typewrite(intro,()=>{fadeText(title)});