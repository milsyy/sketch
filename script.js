const container = document.querySelector(".container-two");

const boardSize = 25;

for (let i = 0; i < boardSize; i++) {
  newDiv = document.createElement("div");
  newDiv.className = "board";
  newDiv.style.flexBasis = 100 / Math.sqrt(boardSize) + "%";
  newDiv.style.width = 200 / Math.sqrt(boardSize) + "px";
  container.appendChild(newDiv);
}
