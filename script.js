console.log("JS OK!");

// 1 targeting button element in the DOM
const playButton = document.getElementById("play-btn");

// 1a adding event listener to play button
playButton.addEventListener("click", () => {

    // # Functions section
    
    // Function that gives back a number from 0 to 100
    const generateNumbers = () => {
      for (let i = 1; i <= 100; i++) {
        console.log(i);
      }
    }
    
    // 2c Adding a function to create a cell.
    const createCell = (cellNumber) => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.innerText = cellNumber;
    
        return cell;
    }
    
    
    //* Initial operations
    
    // 2a Getting elements from the DOM
    const grid = document.getElementById("grid");
    
    // preparing initial data
    const rows = 10;
    const cols = 10;
    const totalCells = cols * rows;
    
    // 2b we render the cells
    for (let i = 1; i <= totalCells; i++) {
    
        const cell = createCell(i);
        
    
        cell.addEventListener('click', () =>  {
            cell.classList.toggle('clicked');
        });
        grid.appendChild(cell);
    }
});
