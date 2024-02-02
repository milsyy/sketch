const container = document.querySelector(".container-two");
const topButtons = document.querySelector(".top-buttons");
const allButtons = document.querySelectorAll("button");
const slider = document.querySelector("#slider");

let boardSize;

const sliderVal = (e) => {
  console.log(e.target.value);
  boardSize = Math.floor(Math.sqrt(e.target.value));
  console.log(boardSize);

  for (let i = 0; i < boardSize * boardSize; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "board";
    newDiv.style.flexBasis = 100 / boardSize + "%";
    newDiv.style.width = 550 / boardSize + "px";
    newDiv.style.height = 550 / boardSize + "px";
    container.appendChild(newDiv);
  }
};

slider.addEventListener("mouseup", sliderVal);

const changeButtons = (e) => {
  allButtons.forEach((button) => {
    button.classList.remove("active");
  });
  e.target.classList.add("active");
};

topButtons.addEventListener("click", changeButtons);
