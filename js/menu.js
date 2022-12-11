const menuOverlay = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.mobile-menu__button--open');
const closeMenuBtn = document.querySelector('.mobile-menu__button--close');

openMenuBtn.addEventListener('click', e => {
    menuOverlay.classList.remove('display-none');
});

closeMenuBtn.addEventListener('click', e => {
    menuOverlay.classList.add('display-none');
});