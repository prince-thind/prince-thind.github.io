import Typewriter from 'typewriter-effect/dist/core';

function typewrite(node,callback) {
  const text=node.innerText;
  node.innerText='';
  const typewriter = new Typewriter(node);
    

  typewriter
    .typeString(text)
    .start()
    .callFunction(removeCursor)
    .callFunction(callback)


  function removeCursor() {
    const pointers = [...document.querySelectorAll('.Typewriter__cursor')];
    pointers.forEach((pointer) => (pointer.style.display = 'none'));
  }
}

export default typewrite;
