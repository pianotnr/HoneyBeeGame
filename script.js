// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
    // Welcome message
    window.alert("🐝 Welcome to the Beehive Guessing Game! Can you guess how many honeybees are in a healthy colony?");
    window.alert("I'll give you a hint: it's a lot 🤣");
  
  
    
    const min = 47500;
    const max = 50000;
    const targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let guess = null;
    let attempts = 0;
  
  
  while (guess !== targetNumber){
    guess = parseInt(window.prompt ("Enter your guess (47500-50000):"));
    attempts++;
  if (guess > targetNumber) {
    window.alert("You buzzed too high, give it another try.");
  } else if (guess < targetNumber) {
    window.alert("You buzzed too low, give it another go.");
  } else {
    window.alert(`🎉 Correct! You found honey! ${attempts} tries.`);
    const playAgain = window.confirm("Would you like to play again?");
    if (playAgain) {
      playHighLowGame(); // restart the game
    } else {
      window.alert("Thanks for playing! 🐝");
      
      break
    }
  }
  }
  
    // Inside your loop:
    // 1️⃣ Convert the input to a number using parseInt()
    // 2️⃣ Check if the guess is too high, too low, or correct
    // 3️⃣ Use window.alert() to tell the player the result
    // 4️⃣ Count the number of attempts
  
    // TODO: When the player guesses correctly:
    // - Alert them that they won and show how many attempts it took
    // - Ask if they want to play again using window.confirm()
    // - If yes, call playHighLowGame() again
    // - If no, show a “Thanks for playing” message
  }
  
  // 🚀 Call the function to start the game
  playHighLowGame();
  