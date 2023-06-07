console.log("JS OK!");



// # Functions section

// Function that gives back a number, excluding the blacklisted ones.
const getNonBlRandomNumber = (min, max, blacklist) => {
    let randomNumber;

    // Keeps getting numbers until random number is present in the blacklist
    do {
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    } while (blacklist.includes(randomNumber));

    return randomNumber;
}

const number = getNonBlRandomNumber("number");


//* Initial operations

// Getting elements from the DOM
const grid = document.getElementById("grid");

// preparing initial data
const rows = 10;
const cols = 10;
const totalCells = cols * rows;
