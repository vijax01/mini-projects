let userScore = 0;
let computerScore = 0;
let draw = 0;
const userResult = document.querySelector('#user-score');
const computerResult = document.querySelector('#computer-score');
const drawCount = document.querySelector('#draw');
const choices = document.querySelectorAll('.option');
const msg = document.querySelector('#msg');
let music = new Audio('./assets/pop.mp3');
let win = new Audio('./assets/win.mp3');
let loose = new Audio('./assets/gameover.mp3');

const genCompChoice = () => {
    // rock paper scissors
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random()*3)] 
}

const compare = (userChoice,computerChoice) => {
    // computer wins
    if ((userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'rock')) {
            return 'computer'
    } else if ((userChoice === 'rock' && computerChoice === 'rock') ||
    (userChoice === 'paper' && computerChoice === 'paper') ||
    (userChoice === 'scissors' && computerChoice === 'scissors')) {
            return 'none'
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
            return 'user'
    }
}

const playGame = (userChoice) => {
    // we have to generate computer choice
    let computerChoice = genCompChoice();
    let winner = compare(userChoice,computerChoice)
    let str = `<b>Winner : ${winner[0].toUpperCase() + winner.slice(1)}</b>`;
    msg.innerHTML = str;
    if(winner == 'user') {
        userScore++;
        userResult.innerHTML = userScore;
        msg.style.background = 'green'; 
        win.play();
    }
    else if(winner == 'computer') {
        computerScore++;
        computerResult.innerHTML = computerScore;
        msg.style.background = 'red'; 
        loose.play();
    } else if(winner == 'none') {
        draw++;
        drawCount.innerHTML = draw;
        msg.style.background = '#010172';
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        music.play();
        let userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})