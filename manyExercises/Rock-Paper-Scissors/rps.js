let rnum;
let pcChoice;
function getComputerChoice() {
  rnum = Math.floor(Math.random() * 3) + 1; // Generates a random number from 1 to 3 and assigns it to the variable 'rnum'.
  if (rnum === 1) {
    pcChoice = "Rock";
  } else if (rnum === 2) {
    pcChoice = "Paper";
  } else if (rnum === 3) {
    pcChoice = "Scissors";
  } else {
    console.log("ERROR: Something went wrong while computing my choice");
  }

  return pcChoice;
  /* Assigns a choice to every possible number and returns that choice. Also throws an error if some other
   value shows up. */
}

function Capitalize(str) {
  letter = str[0]; // isolates the first character of the string, meaning the character on the position 0.
  let str1 = str.substring(1); // cuts out the string from the position 1 up until the end.
  str = `${letter.toUpperCase()}${str1}`; // assigns the first character (pos 0) uppercased + the rest of the string.
  return str;
}

let scorePc = 0;
let scorePlayer = 0;

const rock = document.querySelector(".rock-div");
rock.addEventListener("click", () => {
  playerChoice = "rock";
  game();
});
const paper = document.querySelector(".paper-div");
paper.addEventListener("click", () => {
  playerChoice = "paper";
  game();
});
const scissors = document.querySelector(".scissors-div");
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  game();
});
//associating the option divs/images with the options themselves.

const icon = document.querySelector(".winner-icon");

const playerscore = document.querySelector(".scoresquare.player");
playerscore.textContent = scorePlayer;

const pcscore = document.querySelector(".scoresquare.pc");
pcscore.textContent = scorePc;

function playRound() {
  pcChoice = pcChoice.toLocaleLowerCase();
  if (pcChoice === playerChoice) {
    console.log(`That's a draw!! We both chose ${Capitalize(pcChoice)}`); //Draw case.
  } else if (
    (pcChoice === "rock" && playerChoice === "paper") ||
    (pcChoice === "paper" && playerChoice === "scissors") ||
    (pcChoice === "scissors" && playerChoice === "rock")
  ) {
    console.log(
      `Contratulations, you've won!! ${Capitalize(
        playerChoice
      )} beats ${Capitalize(pcChoice)}.` // Player victory case.
    );
    scorePlayer++; //player score rises.
  } else if (
    (pcChoice === "paper" && playerChoice === "rock") ||
    (pcChoice === "scissors" && playerChoice === "paper") ||
    (pcChoice === "rock" && playerChoice === "scissors")
  ) {
    console.log(
      `Oops... You've lost. ${Capitalize(pcChoice)} beats ${Capitalize(
        playerChoice // Pc victory case.
      )}.`
    );
    scorePc++; //Pc score rises.
  } else {
    console.log("Something went terribly wrong.");
  }
}

function game() {
  getComputerChoice();
  playRound();
  getwinner();
  pcscore.textContent = scorePc;
  playerscore.textContent = scorePlayer;

}

function getwinner() {
  if (scorePc < scorePlayer) {
    icon.innerHTML = '<i class="fa-solid fa-person"></i>';
  } else if (scorePlayer < scorePc) {
    icon.innerHTML = '<i class="fa-solid fa-desktop"></i>';
  } else {
    icon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}

if (scorePc === 5) {
  console.log("This time it's your loss");
  replay();
}
if (scorePlayer === 5) {
  console.log("You've won the game.");
  replay();
}

function replay() {
  //replay or end game.
  let playAgain = prompt("Do you wish to play again? Y/N - ");
  if (playAgain.toLowerCase() === "yes" || playAgain.toLowerCase() === "y") {
    scorePlayer = 0;
    scorePc = 0;
  } else {
  }
}
