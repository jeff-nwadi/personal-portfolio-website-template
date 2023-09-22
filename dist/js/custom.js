//mobile menu
const handburger = document.querySelector('#handburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelector('#hlink');
const menuIcon = document.querySelector('.menu-Icon');

handburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-xmark')
})


