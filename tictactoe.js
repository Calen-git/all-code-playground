const cells = document.querySelectorAll(".cell"); // Get all the cells
const statusDisplay = document.getElementById("game-status"); // Game status message
const resetButton = document.getElementById("reset-game"); // Reset button

let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Array to track moves
let currentPlayer = "X"; // Player starts with 'X'
let gameActive = true; // Whether the game is ongoing

// Event listener for each cell
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handlePlayerMove(index), { once: true });
});

// Handle player move
function handlePlayerMove(index) {
  if (gameBoard[index] === "" && gameActive) {
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWinner(currentPlayer)) {
      statusDisplay.textContent = `${currentPlayer} Wins!`;
      gameActive = false;
    } else if (gameBoard.every((cell) => cell !== "")) {
      statusDisplay.textContent = "It's a Draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
      if (currentPlayer === "O" && gameActive) {
        aiMove();
      }
    }
  }
}

// AI move - simple random choice from available spaces
function aiMove() {
  let availableMoves = gameBoard
    .map((cell, index) => (cell === "" ? index : null))
    .filter((index) => index !== null);

  const randomMove =
    availableMoves[Math.floor(Math.random() * availableMoves.length)];
  gameBoard[randomMove] = "O";
  cells[randomMove].textContent = "O";
  if (checkWinner("O")) {
    statusDisplay.textContent = "AI Wins!";
    gameActive = false;
  } else if (gameBoard.every((cell) => cell !== "")) {
    statusDisplay.textContent = "It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = "X"; // Switch back to player
  }
}

// Check for a winner
function checkWinner(player) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical wins
    [0, 4, 8],
    [2, 4, 6], // Diagonal wins
  ];

  return winPatterns.some((pattern) =>
    pattern.every((index) => gameBoard[index] === player)
  );
}

// Reset the game
resetButton.addEventListener("click", resetGame);

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("winning-cell");
  });

  gameActive = true;
  currentPlayer = "X";

  statusDisplay.textContent = "Player X's turn";
}
