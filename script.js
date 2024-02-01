const container = document.querySelector(".container-two");
const topButtons = document.querySelector(".top-buttons");
const allButtons = document.querySelectorAll("button");

const boardSize = 25;

for (let i = 0; i < boardSize; i++) {
  newDiv = document.createElement("div");
  newDiv.className = "board";
  newDiv.style.flexBasis = 100 / Math.sqrt(boardSize) + "%";
  newDiv.style.width = 200 / Math.sqrt(boardSize) + "px";
  container.appendChild(newDiv);
}

const changeButtons = (e) => {
  allButtons.forEach((button) => {
    button.classList.remove("active");
  });
  e.target.classList.add("active");
};

topButtons.addEventListener("click", changeButtons);
