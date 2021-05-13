let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWorld = "(user)".fontsize(3).sub();
    const smallCompWorld = "(comp)".fontsize(3).sub(); 
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWorld} beats ${converToWord(computerChoice)}${smallCompWorld}. You win!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout( () => document.getElementById(userChoice).classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWorld = "(user)".fontsize(3).sub();
    const smallCompWorld = "(comp)".fontsize(3).sub(); 
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWorld} loses to ${converToWord(computerChoice)}${smallCompWorld}. You lost..`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( () => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWorld = "(user)".fontsize(3).sub();
    const smallCompWorld = "(comp)".fontsize(3).sub(); 
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWorld} same as ${converToWord(computerChoice)}${smallCompWorld}. It's a draw`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout( () =>document.getElementById(userChoice).classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
rock_div.addEventListener('click', () => game("r"));

paper_div.addEventListener('click', () => game("p"));

scissors_div.addEventListener('click', () => game("s"));
}

main();