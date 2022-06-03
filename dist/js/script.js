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

// Accordion-----------------------------
let acc = document.getElementsByClassName("accordion__btn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
