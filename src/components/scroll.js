const node = document.querySelector('#back-to-top');
window.addEventListener('scroll', main);

function main() {
  const position = window.scrollY;
  if (position > 5) {
    node.classList.add('back-to-top-visible');
  } else {
    node.classList.remove('back-to-top-visible');
  }
}
