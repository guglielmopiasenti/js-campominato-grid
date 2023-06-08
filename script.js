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

  // setting bomb number
  const totalBombs = 16;

  // preparing container for bombs
  const bombs = generateBombs(totalBombs, totalCells);
  console.log(bombs);

  // establishing max score
  const maxScore = totalCells - totalBombs;

  // 2b we render the cells
  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(i);

    cell.addEventListener("click", () => {
      cell.classList.add("clicked");

      // increase the score at every click
      score = score + 1;
      console.log(score);

      // if condition to determine whether the click already happened or not.
      if (cell.classList.contains("clicked")) return;

      // bomb click control
      const bombClicked = bombs.includes(i);

      // bomb click control
      if (bombClicked) {
        cell.classList.add("bomb");

        // player loose
        console.log("player loose");
      } else {
        // increment the counter
        scoreContainer.innerHTML = "Score: " + score;
      }
    });
    grid.appendChild(cell);
  }
});
