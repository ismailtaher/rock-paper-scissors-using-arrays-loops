// Rock, Paper, Scissors using Arrays

let playGame = confirm("Shall we play rock, paper or scissors?");

if (playGame) {
  while (playGame) {
    const playerChoice = prompt("please enter rock, paper or scissors");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rps = ["rock", "paper", "scissors"];
        const computer = rps[computerChoice];

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
            : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne Wins!`;
        alert(result);
        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter rock, paper or scissors");
        continue;
      }
    } else {
      alert("I guess you changed your mind. May be next time.");
      break;
    }
  }
} else {
  alert("Ok, may be next time.");
}
