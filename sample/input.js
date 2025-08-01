function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = "Your Choice: " + userChoice;
  document.getElementById("computer-choice").textContent = "Computer's Choice: " + computerChoice;

  let winner = "";

  if (userChoice === computerChoice) {
    winner = "It's a Tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You Win!";
  } else {
    winner = "Computer Wins!";
  }

  document.getElementById("winner").textContent = "Winner: " + winner;
}
