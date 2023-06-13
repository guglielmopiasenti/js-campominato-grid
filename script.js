console.log("JS OK!");

// 1 targeting button element in the DOM
const playButton = document.getElementById("play-btn");
const difficulty = document.getElementById("difficulty");

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

  // establishing function for bomb generation
  function generateBombs(numberOfBombs, maxNumber) {
    let bombs = [];

    while (bombs.length < numberOfBombs) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
      } while (bombs.includes(randomNumber));
      bombs.push(randomNumber);
    }
    return bombs;
  }

  // function to color all bombs
  const revealCells = () => {
    // we get the cells
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      cell.classList.add("clicked");
      const cellNumber = parseInt(cell.innerText);
      if (bombs.includes(cellNumber)) cell.classList.add("bomb");
    }
  };
  //* Initial operations

  // 2a Getting elements from the DOM
  const grid = document.getElementById("grid");

  // preparing initial data
  let rows, cols;
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

  // setting bomb number
  const totalBombs = 16;

  // preparing container for bombs
  const bombs = generateBombs(totalBombs, totalCells);
  console.log(bombs);

  // establishing max score
  const maxScore = totalCells - totalBombs;

  // Flag to track game status
  let gameOver = false;

  // 2b we render the cells
  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(i);

    const handleClick = () => {
      // Check if game is already over
      if (gameOver) return;

      // if condition to determine whether the click already happened or not.
      if (cell.classList.contains("clicked")) return;

      cell.classList.add("clicked");

      // bomb click control
      const bombClicked = bombs.includes(i);

      // bomb click control
      if (bombClicked) {
        cell.classList.add("bomb");

        // player loose
        console.log("player loose. Your total score is: " + score);
        // Disable clicking on cells after losing
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
          cell.removeEventListener("click", handleClick);
        });

        // Set game over flag to true
        gameOver = true;

        // Reveal all bombs
        revealCells();
      } else {
        // Increase the score at every click
        score = score + 1;
        console.log(score);
        // Increment the counter
        scoreContainer.innerHTML = "Score: " + score;

        // Check if the maximum score is reached
        if (score === maxScore) {
          console.log("YOU WIN! Your score is: " + maxScore);
          // Disable clicking on cells after winning
          const cells = document.querySelectorAll(".cell");
          cells.forEach((cell) => {
            cell.removeEventListener("click", handleClick);
          });

          // Set game over flag to true
          gameOver = true;
        }
      }
    };

    cell.addEventListener("click", handleClick);

    grid.appendChild(cell);
  }
});
