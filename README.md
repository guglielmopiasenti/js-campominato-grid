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
   1a. I get the score element from the DOM.
   1b. I include in the event listener the score increase at every click.
   1c. I use an if condition to block the cell click after it has been clicked once.
2. Bombs section:
   2a. I prepare a container for the bombs.
   2b. I set the number of bombs.
   2c. I establish the maximum score.
   2d. I establish a function to generate bombs.
