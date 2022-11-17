export default function addCSSDesigns() {
    addScrollPadding();
}


function addScrollPadding() {
    const navBar = document.querySelector('#nav');
    const documentElement = document.documentElement

    const navBarHeight = (navBar.clientHeight);
    documentElement.style.scrollPaddingTop = navBarHeight + 'px';
}