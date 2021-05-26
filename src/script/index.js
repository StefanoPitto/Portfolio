const contactIcon = document.querySelector(".contact-icon");
const githubContainer = document.getElementById("github-container");
const github = document.getElementById("github");
const emailContainer = document.getElementById("email-container");
const email = document.getElementById("email");
const linkedinContainer = document.getElementById("linkedin-container");
const linkedin = document.getElementById("linkedin");
const menu = document.getElementById("menu-bars");
const cross = document.getElementById("cross-menu");
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("menu");
const menuItems = document.querySelectorAll(".mobile-menu-item");
let menuIsOpened = false;
githubContainer.addEventListener("mouseover", (e) => {
  github.classList.remove("inner-info");
  github.classList.add("contact-visibility");
});

githubContainer.addEventListener("mouseout", (e) => {
  github.classList.remove("contact-visibility");
  github.classList.add("inner-info");
});

linkedinContainer.addEventListener("mouseover", (e) => {
  linkedin.classList.remove("inner-info");
  linkedin.classList.add("contact-visibility");
});

linkedinContainer.addEventListener("mouseout", (e) => {
  linkedin.classList.remove("contact-visibility");
  linkedin.classList.add("inner-info");
});

emailContainer.addEventListener("mouseover", (e) => {
  email.classList.remove("inner-info");
  email.classList.add("contact-visibility");
});

emailContainer.addEventListener("mouseout", (e) => {
  email.classList.remove("contact-visibility");
  email.classList.add("inner-info");
});

const openMenu = () => {
  mobileMenu.classList.add("hide");
  mobileMenu.classList.remove("show");
  navMenu.classList.remove("hide");
  navMenu.classList.add("show");
  menuIsOpened = true;
};

const closeMenu = () => {
  navMenu.classList.remove("show");
  navMenu.classList.add("hide");
  mobileMenu.classList.add("show");
  mobileMenu.classList.remove("hide");
  menuIsOpened = false;
};

menu.addEventListener("click", openMenu);

cross.addEventListener("click", closeMenu);

window.addEventListener("scroll", (e) => {
  if (menuIsOpened) {
    window.scrollTo(0, 0);
  }
});

menuItems.forEach((element) => {
  element.addEventListener("click", closeMenu);
});
