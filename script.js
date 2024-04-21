let currentPlayer = "X";
let movesCount = 0;
const gameBoard = document.getElementById("gameBoard");

// إنشاء الخلايا وإضافتها إلى اللوحة
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", function () {
    makeMove(cell);
  });
  gameBoard.appendChild(cell);
}

function checkWinner() {
  const cells = document.querySelectorAll(".cell");
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return cells[a].textContent;
    }
  }
  return null;
}

function checkForTie() {
  return movesCount === 9;
}

function makeMove(cell) {
  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    movesCount++;
    const winner = checkWinner();
    if (winner) {
      alert("الفائز هو: " + winner);
      document.getElementById("resetButton").classList.remove("hidden");
    } else if (checkForTie()) {
      alert("لقد تعادلت اللعبة!");
      document.getElementById("resetButton").classList.remove("hidden");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function resetGame() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  movesCount = 0;
  currentPlayer = "X";
  document.getElementById("resetButton").classList.add("hidden");
}
