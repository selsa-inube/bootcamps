const rows = 8;
const cols = 8;

let currentGeneration = createEmptyGrid();
let nextGeneration = createEmptyGrid();

function initializeGrid() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      currentGeneration[row][col] = Math.random() > 0.5;
    }
  }
}

function createEmptyGrid() {
  return Array.from({ length: rows }, () => Array(cols).fill(false));
}

function drawGrid() {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = currentGeneration[row][col];
      checkbox.addEventListener("change", () => toggleCell(row, col));
      gridContainer.appendChild(checkbox);
    }
  }
}

function calculateNextGeneration() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const neighbors = countNeighbors(row, col);
      nextGeneration[row][col] = applyRules(
        currentGeneration[row][col],
        neighbors
      );
    }
  }

  currentGeneration = nextGeneration.map((row) => row.slice());
}

function countNeighbors(row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborRow = row + i;
      const neighborCol = col + j;
      if (
        neighborRow >= 0 &&
        neighborRow < rows &&
        neighborCol >= 0 &&
        neighborCol < cols
      ) {
        if (
          !(i === 0 && j === 0) &&
          currentGeneration[neighborRow][neighborCol]
        ) {
          count++;
        }
      }
    }
  }
  return count;
}

function applyRules(isAlive, neighbors) {
  if (isAlive) {
    return neighbors === 2 || neighbors === 3;
  } else {
    return neighbors === 3;
  }
}

function toggleCell(row, col) {
  currentGeneration[row][col] = !currentGeneration[row][col];
}

function startGame() {
  initializeGrid();
  drawGrid();

  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", () => {
    calculateNextGeneration();
    drawGrid();
  });
}

startGame();
