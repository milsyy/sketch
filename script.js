const container = document.querySelector(".container-two");
const topButtons = document.querySelector(".top-buttons");
const allButtons = document.querySelectorAll("button");
const slider = document.querySelector("#slider");
const boardSliderText = document.querySelector("#board-size");

let boardSize = 256;

const boardOnLoad = (e) => {
  for (let i = 0; i < boardSize; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "board";
    newDiv.style.flexBasis = 100 / Math.sqrt(boardSize) + "%";
    newDiv.style.width = 550 / Math.sqrt(boardSize) + "px";
    newDiv.style.height = 550 / Math.sqrt(boardSize) + "px";
    container.appendChild(newDiv);
  }
};

const changeButtons = (e) => {
  if (e.target.classList.contains("top-buttons")) {
    return;
  }

  allButtons.forEach((button) => {
    button.classList.remove("active");
  });
  e.target.classList.add("active");
};

const sliderVal = (e) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  boardSize = e.target.value * e.target.value;

  for (let i = 0; i < boardSize; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "board";
    newDiv.style.flexBasis = 100 / Math.sqrt(boardSize) + "%";
    newDiv.style.width = 550 / Math.sqrt(boardSize) + "px";
    newDiv.style.height = 550 / Math.sqrt(boardSize) + "px";
    container.appendChild(newDiv);
  }
};

const sliderText = (e) => {
  boardSliderText.textContent = `${e.target.value} x 
  ${e.target.value}`;
};

window.addEventListener("load", boardOnLoad);
slider.addEventListener("input", sliderText);
slider.addEventListener("mouseup", sliderVal);
topButtons.addEventListener("click", changeButtons);
