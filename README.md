# Delivery

The user clicks on a button which will generate a square game grid.
Each cell has a progressive number, from 1 to 100.
There will then be 10 boxes for each of the 10 rows.
When the user clicks on each cell, the clicked cell turns blue and I issue a message in the console with the number of the clicked cell.

# MILESTONE 1

Let's prepare the HTML and the CSS to get the graphic result we see in the attached image.

# MILESTONE 2

We remove the cells that we have inserted in the HTML in order to generate them through JS. At the click of the play button, 100 cells are generated in 10 rows of 10 cells each.

# MILESTONE 3

In each cell, the corresponding number must appear, in order from 1 to 100;

# MILESTONE 4

When you click on the cell, we print the number of the cell clicked in the console, then we color the cell light blue!

# BONUSES

Add a select next to the build button, which provides a choice of three different difficulty levels:

- with difficulty 1 => 100 boxes, with a number between 1 and 100, divided into 10 boxes by 10 rows;
- with difficulty 2 => 81 boxes, with a number between 1 and 81, divided into 9 boxes for 9 rows;
- with difficulty 3 => 49 boxes, with a number between 1 and 49, divided into 7 boxes for 7 rows;

# Procedure

1. I target the play button in the DOM
   1a. I create an event listener for the button click so to start the game.
2. Creating the grid:
   2a. Targeting the chosen element in the DOM.
   2b. create the grid with for loop and appendChild.
   2c. Adding a function to create the cell.
   2d. Number the grid with a function.
3. Numbers appear inside of the cells when clicked on:
   3a.
   3b.
4. when clicking on a cell, the color changes (CSS).
