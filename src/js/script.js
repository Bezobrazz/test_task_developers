// Mobile menu-------------------------
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__menu"),
    menuItem = document.querySelectorAll(".header__menu-link"),
    burger = document.querySelector(".header__burger-btn");

  burger.addEventListener("click", () => {
    burger.classList.toggle("header__burger-btn_active");
    menu.classList.toggle("header__menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("header__burger-btn_active");
      menu.classList.toggle("header__menu_active");
    });
  });
});
