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

// Slick slider
$(document).ready(function () {
  $(".slider__wrapper").slick({
    slidesToShow: 2,
    variableWidth: true,
  });

  // Example mobile slider
  let offset = 0;
  const sliderShop = document.querySelector(".example__track");

  document
    .querySelector(".example__btn_next")
    .addEventListener("click", function () {
      offset += 350;
      if (offset > 350) {
        offset = 0;
      }
      sliderShop.style.left = -offset + "px";
    });

  document
    .querySelector(".example__btn_prev")
    .addEventListener("click", function () {
      offset -= 350;
      if (offset < 0) {
        offset = 350;
      }
      sliderShop.style.left = -offset + "px";
    });
});
