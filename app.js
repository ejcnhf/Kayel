const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');


menu.addEventListener('click', () => {
   menu.classList.toggle('active');
   mobile_menu.classList.toggle('active');
});