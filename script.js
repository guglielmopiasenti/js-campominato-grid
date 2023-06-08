console.log("JS OK!");

// 1 targeting button element in the DOM
const playButton = document.getElementById("play-btn");

// 1a adding event listener to play button
playButton.addEventListener("click", () => {
  // Get the selected difficulty level
  const selectedDifficulty = parseInt(difficulty.value);

  // # Functions section

  // Function that gives back a number from 0 to 100
  const generateNumbers = () => {
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    }
  };

  // 2c Adding a function to create a cell.
  const createCell = (cellNumber) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = cellNumber;

    return cell;
  };

  //* Initial operations

  // 2a Getting elements from the DOM
  const grid = document.getElementById("grid");

  // preparing initial data
  if (selectedDifficulty === 1) {
    rows = 10;
    cols = 10;
  } else if (selectedDifficulty === 2) {
    rows = 9;
    cols = 9;
  } else if (selectedDifficulty === 3) {
    rows = 7;
    cols = 7;
  }
  const totalCells = cols * rows;

  // Clear the existing grid
  grid.innerHTML = "";

  // Getting the score element from the DOM
  let scoreContainer = document.getElementById("score");
  let score = 0;

  // 2b we render the cells
  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(i);

    cell.addEventListener("click", () => {
      cell.classList.add("clicked");

      // increase the score at every click
      score = score + 1;
      console.log(score);
      scoreContainer.innerHTML = "Score: " + score;

      // if condition to determine whether the click already happened or not.
      if (cell.classList.contains("clicked")) return;
    });
    grid.appendChild(cell);
  }
});
