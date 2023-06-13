# GAME DESCRIPTION

The computer must generate 16 random numbers in the same range as the chosen difficulty: bombs. Warning: a maximum of one bomb can be placed in the same cell, so no two bombs can have the same number
Then the user clicks on a cell: if the number is present in the list of generated numbers we have stepped on a bomb. The cell turns red and the game ends. Otherwise, the clicked cell turns blue and the user can continue clicking on the other cells.
The game ends when the player clicks on a bomb or when he reaches the maximum possible number of numbers allowed (ie when he has revealed all cells that are not bombs).
At the end of the game, the software must communicate the score, i.e. the number of times the user has clicked on a cell that was not a bomb

## MILESTONE 1

We prepare "Something" to keep score of the user.
When the user clicks on a cell, we increment the score.
If we succeed, we also make sure that we can no longer click on the same cell

## MILESTONE 2

Let's generate 16 random numbers (all different) between 1 and the maximum number of boxes available.
Let's generate them and print them in the console to be sure they are correct

## MILESTONE 3

When the user clicks on a cell, we check if he has stepped on a bomb, by checking if the cell number is present in the bomb array.
If yes, the cell turns red (we collect the score and write in the console that the patient ends) otherwise it turns blue and we have to increase the score.

## MILESTONE 4

When the user clicks on a cell, and this is not a bomb, we have to check if the increased score has reached the maximum score, because in that case the game ends. We then collect the message and write an appropriate message.

## MILESTONE 5

When the game ends we have to figure out if it ended because a bomb was clicked or if the user reached the maximum score (ie he won). We must then in any case print the score achieved on the page and the appropriate message in case of victory or defeat.

## BONUSES

Add a select next to the build button, providing a choice of three different difficulty levels (same as yesterday's instructions if not already done)

### SUPERBONUS

Color all bomb cells when the game ends

# PROCEDURE

1. Preparing the score:
   1a. Get the score element from the DOM.
   1b. Include in the event listener the score increase at every click.
   1c. Use an if condition to block the cell click after it has been clicked once.

2. Bombs section:
   2a. Prepare a container for the bombs.
   2b. Set the number of bombs.
   2c. Establish the maximum score.
   2d. Establish a function to generate bombs.

3. Cell click handling:
   3a. Check if the player clicked a bomb.
   3b. Set an if condition to control the click on the bomb.
   3c. If the player clicked a bomb: - Add the "bomb" class to the cell. - Log the player's total score. - Disable clicking on cells after losing. - Set the game over flag to true. - Call the `revealCells` function to color all bomb cells.
   3d. If the player didn't click a bomb: - Increase the score at every click. - Log the current score. - Increment the counter displayed in the score container. - Check if the maximum score is reached. - If the maximum score is reached: - Log the winning message and the player's score. - Disable clicking on cells after winning. - Set the game over flag to true.

4. Create and render cells:
   4a. Create a cell element using the `createCell` function.
   4b. Add a click event listener to the cell, calling the `handleClick` function.
   4c. Append the cell to the grid element.

5. Game initialization:
   5a. Get the selected difficulty level from the DOM.
   5b. Clear the existing grid by emptying the grid element.
   5c. Initialize variables for rows and columns based on the selected difficulty.
   5d. Calculate the total number of cells.
   5e. Generate the bombs using the `generateBombs` function.
   5f. Initialize the score and set it to zero.
   5g. Initialize the game over flag and set it to false.

6. Reveal cells function:
   6a. Get all the cells using the `document.querySelectorAll` method.
   6b. Iterate through each cell and add the "clicked" class.
   6c. Check if the cell's number is included in the bombs array.
   6d. If the cell is a bomb, add the "bomb" class to the cell.
