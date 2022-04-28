let gap = 60;
let elementWidth = 300;
let curPosition = 0;
let prevNum = 0;

function checkPositionLeft() {
  if (curPosition >= 0) {
    leftControl.style.display = "none";
  }
}
function checkPositionRight() {
  if (curPosition + wrapper.offsetWidth === slider.offsetWidth) {
    rightControl.style.display = "none";
  }
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
  rightControl.style.display = "block";
  leftControl.disabled = false;
  curPosition += elementWidth + gap;
  checkPositionLeft();
  wrapper.style.left = curPosition + "px";
};

rightControl.onclick = (e) => {
  leftControl.style.display = "block";
  rightControl.disabled = false;
  curPosition -= elementWidth + gap;
  checkPositionRight();
  wrapper.style.left = curPosition + "px";
};

window.onresize = resize;

resize();
checkPositionLeft();
checkPositionRight();
