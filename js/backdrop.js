backdrop.addEventListener("click", () => {
  console.log("click");
  modal.style.opacity = 0;
  modal.style.marginLeft = "8px";
  backdrop.style.opacity = 0;
  document.body.style.overflow = "auto";
  document.body.style.marginRight = "0";

  hideSidebar();
  setTimeout(() => {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }, 500);
});
