const navigationItems = document.querySelectorAll(".scroll-link");
const slider = document.getElementById("slider");
const wrapper = document.querySelector(".slider__wrapper");
const leftControl = document.querySelector(".slider__control_left");
const rightControl = document.querySelector(".slider__control_right");
const sidebar = document.querySelector(".sidebar");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".donate");
const donateButton = document.getElementById("donate-button");
const burger = document.querySelector(".burger");
const closeButton = document.querySelector(".sidebar__close-button");

const hideSidebar = () => {
  document.body.style.overflow = "auto";
  sidebar.style.transform = "translate(-100%)";
  backdrop.style.opacity = 0;
  setTimeout(() => {
    backdrop.style.display = "none";
    closeButton.style.opacity = 0;
    sidebar.style.display = "none";
  }, 500);
};

const showSidebar = () => {
  sidebar.style.display = "block";
  backdrop.style.display = "block";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    backdrop.style.opacity = 1;
    sidebar.style.transform = "translate(0)";
  });
  setTimeout(() => {
    closeButton.style.opacity = 1;
  }, 500);
};
