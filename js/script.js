let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu')
burger.addEventListener("click", function(event){
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('menu_active');
})