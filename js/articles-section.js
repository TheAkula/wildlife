let gap = 60;
let elementWidth = 300;
let curPosition = 0;
let prevNum = 0;

function checkPositionLeft(newPosition = curPosition) {
  if (newPosition > 0) {
    return false;
  }
  let newOpacity = 1;
  if (newPosition === 0) {
    newOpacity = window.innerWidth <= 420 ? 0.2 : 0;
  }
  leftControl.style.opacity = newOpacity;
  return true;
}
function checkPositionRight(newPosition = curPosition) {
  if (newPosition + wrapper.offsetWidth < slider.offsetWidth) {
    return false;
  }
  let newOpacity = 1;
  if (newPosition + wrapper.offsetWidth === slider.offsetWidth) {
    newOpacity = window.innerWidth <= 420 ? 0.2 : 0;
  }
  rightControl.style.opacity = newOpacity;
  return true;
}

function resize() {
  let newNum = 3;
  if (window.innerWidth < 1320) {
    newNum = 2;
  }
  if (window.innerWidth <= 950) {
    newNum = 1;
    gap = 20;
  } else {
    gap = 60;
  }
  if (prevNum !== newNum) {
    curPosition = 0;
    wrapper.style.left = curPosition + "px";
    checkPositionLeft();
    checkPositionRight();
  }
  prevNum = newNum;
  const sliderNewWidth = elementWidth * newNum + gap * (newNum - 1);
  slider.style.width = sliderNewWidth + "px";
}

leftControl.onclick = (e) => {
  rightControl.style.opacity = "1";
  leftControl.disabled = false;
  let newPosition = curPosition + elementWidth + gap;
  if (checkPositionLeft(newPosition)) {
    curPosition += elementWidth + gap;
    wrapper.style.left = curPosition + "px";
  }
};

rightControl.onclick = (e) => {
  leftControl.style.opacity = "1";
  rightControl.disabled = false;
  let newPosition = curPosition - elementWidth - gap;
  if (checkPositionRight(newPosition)) {
    curPosition -= elementWidth + gap;
    wrapper.style.left = curPosition + "px";
  }
};

window.onresize = resize;

resize();
checkPositionLeft();
checkPositionRight();
