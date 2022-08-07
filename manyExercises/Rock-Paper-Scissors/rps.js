let rnum;
let pcChoice;
function getComputerChoice() {
  rnum = Math.floor(Math.random() * 3) + 1; // Generates a random number from 1 to 3 and assigns it to the variable 'rnum'.

  if (rnum === 1) {
    pcChoice = "Rock";
    righticon.appendChild(faiconpc);
    faiconpc.classList.add(`fa-solid`);
    faiconpc.classList.add(`fa-hill-rockslide`);
  } else if (rnum === 2) {
    pcChoice = "Paper";
    righticon.appendChild(faiconpc);
    faiconpc.classList.add(`fa-solid`);
    faiconpc.classList.add(`fa-paper-plane`);
  } else if (rnum === 3) {
    pcChoice = "Scissors";
    righticon.appendChild(faiconpc);
    faiconpc.classList.add(`fa-solid`);
    faiconpc.classList.add(`fa-scissors`);
  } else {
    console.log("ERROR: Something went wrong while computing my choice");
  }
  return pcChoice; /* Assigns a choice to every possible number and returns that choice. Also throws an error if some other
   value shows up. */
}

function Capitalize(str) {
  letter = str[0]; // isolates the first character of the string, meaning the character on the position 0.
  let str1 = str.substring(1); // cuts out the string from the position 1 up until the end.
  str = `${letter.toUpperCase()}${str1}`; // assigns the first character (pos 0) uppercased + the rest of the string.
  return str;
}

function clearClass(element) {
    const arrayclass = element.classList;
    console.log(arrayclass);
    const arraynew = new Array(arrayclass.length);
    for (i = 0; i < arrayclass.length; i++) {
      arraynew[i] = arrayclass[i];
    }
    for (i = 0; i < arraynew.length; i++) {
      element.classList.remove(arraynew[i]);
    }
}

let scorePc = 0;
let scorePlayer = 0;

function playrock() {
  clearClass(faiconpc);
  clearClass(faiconpl);
  playerChoice = "rock";
  game();
  lefticon.appendChild(faiconpl);
  faiconpl.classList.add(`fa-solid`);
  faiconpl.classList.add(`fa-hill-rockslide`);
}
function playpaper() {
  clearClass(faiconpc);
  clearClass(faiconpl);
  playerChoice = "paper";
  faiconpl.classList.add(`fa-solid`);
  faiconpl.classList.add(`fa-paper-plane`);
  game();
}
function playscissors() {
  clearClass(faiconpc);
  clearClass(faiconpl);
  playerChoice = "scissors";
  faiconpl.classList.add(`fa-solid`);
  faiconpl.classList.add(`fa-scissors`);
  game();
}

const rock = document.querySelector(".rock-div");
rock.addEventListener("click", playrock);
const paper = document.querySelector(".paper-div");
paper.addEventListener("click", playpaper);
const scissors = document.querySelector(".scissors-div");
scissors.addEventListener("click", playscissors);
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
    faiconpl.classList.add("draw");
    faiconpc.classList.add("draw");
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
    faiconpl.classList.add("green-icon");
    faiconpc.classList.add("red-icon");
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
    faiconpl.classList.add("red-icon");
    faiconpc.classList.add("green-icon");
    scorePc++; //Pc score rises.
  } else {
    console.log("Something went terribly wrong.");
  }
}

function game() {
  getComputerChoice();
  playRound();
  getwinner();
  endgame();
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

function endgame() {
  if (Number(scorePc) === 5) {
    announce.appendChild(wins);
    wins.textContent = "You Lose.";
    announce.appendChild(tryAgain);
    rock.removeEventListener("click", playrock);
    paper.removeEventListener("click", playpaper);
    scissors.removeEventListener("click", playscissors);
  }

  if (Number(scorePlayer) === 5) {
    announce.appendChild(wins);
    wins.textContent = "You Win.";
    announce.appendChild(tryAgain);
    rock.removeEventListener("click", playrock);
    paper.removeEventListener("click", playpaper);
    scissors.removeEventListener("click", playscissors);
  }
}

const tryAgain = document.createElement("button");
const wins = document.createElement("p");
tryAgain.textContent = "Try Again?";
tryAgain.classList.add("tryagain");
const announce = document.querySelector(".announce");
tryAgain.addEventListener("click", replay);
const lefticon = document.querySelector(".playericon");
const righticon = document.querySelector(".pcicon");
const faiconpc = document.createElement("i");
const faiconpl = document.createElement("i");
righticon.appendChild(faiconpc);
lefticon.appendChild(faiconpl);

function replay() {
  //replay or end game.
  scorePlayer = 0;
  scorePc = 0;
  playerscore.textContent = scorePlayer;
  pcscore.textContent = scorePc;
  rock.addEventListener("click", playrock);
  paper.addEventListener("click", playpaper);
  scissors.addEventListener("click", playscissors);
  announce.removeChild(wins);
  announce.removeChild(tryAgain);
}
