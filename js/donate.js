donateButton.onclick = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  backdrop.style.display = "block";
  modal.style.marginLeft = "0";
  setTimeout(() => {
    modal.style.opacity = 1;
    backdrop.style.opacity = 1;
  });
};
