var compare = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert("The result is a tie!");
    }
    else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            alert("paper wins");
        }
        else {
            alert("rock wins");
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            alert("scissors wins");
        }
        else {
            alert("paper wins");
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            alert("rock wins");
        }
        else {
            alert("scissors wins");
        }
    }
}

var beginGame = function() {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    
    if (userChoice === "rock" || userChoice === "scissors" || userChoice === "paper") {
        var computerChoice = Math.floor(Math.random() * 3) + 1;
        if (computerChoice === 1) {
          computerChoice = "rock";
        } else if(computerChoice === 2) {
          computerChoice = "paper";
        } else {
          computerChoice = "scissors";
        }
        alert("You choose: " + userChoice);
        alert("Opponent choose: " + computerChoice);
        compare(userChoice, computerChoice);
    }
    else {
       alert("Enter only rock, scissors, or paper");
       beginGame();
    }
}

// beginGame();