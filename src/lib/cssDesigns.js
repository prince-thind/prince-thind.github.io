export default function addCSSDesigns() {
    addScrollPadding();
    addMobileMenu();
}


function addScrollPadding() {
    const navBar = document.querySelector('#nav');
    const documentElement = document.documentElement

    const navBarHeight = (navBar.clientHeight);
    documentElement.style.scrollPaddingTop = navBarHeight + 'px';
}

function addMobileMenu(){
    // const menuButton=document.querySelector('#menu-button');
    const navBar=document.querySelector('#nav');
    navBar.addEventListener('click',toggleMenu);

    function toggleMenu(e){
        navBar.classList.toggle('active')
    }
}