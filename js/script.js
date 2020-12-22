const navbar = document.querySelector('.nav');
const navbarLinks = document.querySelector('.nav-list');

window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
        navbarLinks.classList.add('nav-list-active');
    } else {
        navbar.classList.remove('nav-active');
        navbarLinks.classList.remove('nav-list-active');
    };
};