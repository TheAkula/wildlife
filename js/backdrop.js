backdrop.addEventListener("click", () => {
  modal.style.opacity = 0;
  backdrop.style.opacity = 0;
  document.body.style.overflow = "auto";

  hideSidebar();
  setTimeout(() => {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }, 500);
});
