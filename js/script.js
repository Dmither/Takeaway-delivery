let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
let main = document.querySelector('.main');
burger.addEventListener("click", function(event){
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('menu_active');
  body.classList.toggle('freeze');
})
main.addEventListener("click", function(event){
  if (menu.classList.contains('menu_active')){
    if (!event.target.closest('.menu')){
      console.log(event);
      burger.classList.toggle('header__burger_active');
      menu.classList.toggle('menu_active');
      body.classList.toggle('freeze');
    }
  }
})