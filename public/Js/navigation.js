const navIconEle = document.querySelector('.nav__icon');
const navCloseEle = document.querySelector('.nav__close');
const navlist = document.querySelector('.nav__list');
const navoverlay = document.querySelector('.nav__bgOverlay');

const navOpen = () => {
    navlist.classList.add('show');
    navoverlay.classList.add('active');
    document.body.style = 'visibility: visible; height: 100vh; widht: 100vw; overflow: hidden;';
}

const navClose = () => {
    navlist.classList.remove('show');
    navoverlay.classList.remove('active');
    document.body.style = 'visibility: visible ; height: initial ; width: 100% ; overflow-x: hidden;';
    // We need to make overflow-x hidden because , if we don't then the navigation section can be viewed easily by scroll horizontally.
}

navIconEle.addEventListener('click', navOpen);
navCloseEle.addEventListener('click', navClose);
navoverlay.addEventListener('click', navClose);

const header = document.getElementsByClassName('onSCROLL')[0];
const ele = document.querySelectorAll('.nav__link');
document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 50) {
        header.removeAttribute("disabled");
        ele.style.color = "#f5fcf4";
    } else {
        header.setAttribute("disabled","true");
    }
});