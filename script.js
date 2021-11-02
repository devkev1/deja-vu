let num = 8;

function guess(num) {
    let input;
    let exitRequested;
  do {
    // get input from the user
    input = prompt("Please input a whole number between 1 - 12. Type exit to quit.");
    // check to see if they typed "exit"
    exitRequested = input === "exit";
    // try to convert the input to an int
    input = parseInt(input);
    // validate the input
    if (!exitRequested) {
    if (isNaN(input)) {
      alert("Please give me a whole number!");
    } 
      // only check the number if the user didn't type "exit"
      if (input < num) {
        alert("The number is too low!");
      } else if (input > num) {
        alert("The number is too high!");
      } else {
        alert("Congrats! You guessed the correct number!");
      }
    }
  } while (input != num && !exitRequested);
}

guess(num); 
