const container = document.querySelector(".container-two");
const topButtons = document.querySelector(".top-buttons");
const allButtons = document.querySelectorAll("button");
const slider = document.querySelector("#slider");
const boardSliderText = document.querySelector("#board-size");
const colourPicker = document.querySelector(".colour-picker");
const clear = document.querySelector("#clear");
const colourMode = document.querySelector("#colour-mode");
const rainbowMode = document.querySelector("#rainbow-mode");
const eraserMode = document.querySelector("#eraser-mode");
const body = document.querySelector("body");

let boardSize = 256;
let isDrawing = false;
let dragging = false;
let colourButton = false;
let rainbowButton = false;
let eraserButton = false;

// Setting up initial board

const boardOnLoad = (e) => {
  for (let i = 0; i < boardSize; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "board";
    newDiv.style.flexBasis = Math.sqrt(boardSize);
    newDiv.style.width = 550 / Math.sqrt(boardSize) + "px";
    newDiv.style.height = 550 / Math.sqrt(boardSize) + "px";
    container.appendChild(newDiv);
  }
};

// Button colour change on select

const changeButtons = (e) => {
  if (e.target.classList.contains("top-buttons")) {
    return;
  }
  allButtons.forEach((button) => {
    button.classList.remove("active");
  });
  e.target.classList.add("active");
};

// Setting board size based on user input on slider

const sliderVal = (e) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  boardSize = e.target.value * e.target.value;

  for (let i = 0; i < boardSize; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "board";
    newDiv.style.flexBasis = Math.sqrt(boardSize);
    newDiv.style.width = 550 / Math.sqrt(boardSize) + "px";
    newDiv.style.height = 550 / Math.sqrt(boardSize) + "px";
    container.appendChild(newDiv);
  }
};

// Updating slider text based on user input

const sliderText = (e) => {
  boardSliderText.textContent = `${e.target.value} x 
  ${e.target.value}`;
};

// Mouse clicked on board

const startedDraw = (e) => {
  if (e.detail === 1) {
    isDrawing = true;
  }
};

// Drawing

const drawingBlack = (e) => {
  if (isDrawing === true && colourMode.classList == "active") {
    e.target.style.backgroundColor = `${colourPicker.value}`;
  }
};

// Stop drawing

const stopDrawing = (e) => {
  isDrawing = false;
};

// Clear board

const clearBoard = () => {
  let childrenArray = Array.from(container.children);
  childrenArray.forEach((div) => {
    div.style.backgroundColor = "#ffffff";
  });
};

// Stop dragging

const startedDragging = (e) => {
  e.preventDefault();
};

// Eraser

const erase = (e) => {
  if (isDrawing === true && eraserMode.classList.contains("active")) {
    e.target.style.backgroundColor = "white";
  }
};

const rainbow = (e) => {
  let color = "#";
  let letters = "0123456789ABCDEF";
  if (isDrawing === true && rainbowMode.classList.contains("active")) {
    for (i = 0; i < 6; i++) {
      color = color.concat(letters[Math.floor(Math.random() * 16)]);
    }
    e.target.style.backgroundColor = color;
  }
};

const bodyBug = () => {
  isDrawing = false;
};

window.addEventListener("load", boardOnLoad);
slider.addEventListener("input", sliderText);
slider.addEventListener("mouseup", sliderVal);
topButtons.addEventListener("click", changeButtons);
container.addEventListener("mousedown", startedDraw);
container.addEventListener("mouseup", stopDrawing);
clear.addEventListener("click", clearBoard);
container.addEventListener("dragstart", startedDragging);
container.addEventListener("mousemove", erase);
container.addEventListener("mousemove", drawingBlack);
container.addEventListener("mousemove", rainbow);
body.addEventListener("mouseup", bodyBug);
