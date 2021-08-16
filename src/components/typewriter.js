import Typewriter from 'typewriter-effect/dist/core';

function typewrite(node) {
  const text = node.innerText;
  node.innerText = '';
  const typewriter = new Typewriter(node);

  return new Promise((resolve) => {
    typewriter
      .typeString(text)
      .start()
      .callFunction(removeCursor)
      .callFunction(resolve);
  });

  function removeCursor() {
    const pointers = [...document.querySelectorAll('.Typewriter__cursor')];
    pointers.forEach((pointer) => (pointer.style.display = 'none'));
  }
}

export default typewrite;
