// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const navBtns = document.querySelector(".nav__btns");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
      navBtns.classList.add("active");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
      navBtns.classList.remove("active");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
      navBtns.classList.remove("active");
    }
  });
}
burgerMenu();

//Video
const btn = document.querySelector(".play__btn");
const clip = document.querySelector(".clip");
const close = document.querySelector(".close");
const video = document.querySelector("video");
btn.onclick = function () {
  btn.classList.add("active");
  clip.classList.add("active");
  video.play();
  video.currentTime = 0;
};
close.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};
clip.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};

