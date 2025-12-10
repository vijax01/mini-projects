console.log("Welcome to the Tic Tac Toe Game!");
const reset = document.querySelector('#reset');
const line = document.querySelector('#line');
let music = new Audio("./assets/music.mp3");
let audioTurn = new Audio("./assets/pop.mp3");
let gameover = new Audio("./assets/gameover.mp3");
const img = document.querySelector('.imgbox img');
let turn = 'X';
let isGameover = false;

// function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15,90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ];
    wins.forEach(win => {
        if(
            boxTexts[win[0]].innerText === boxTexts[win[1]].innerText &&
            boxTexts[win[2]].innerText === boxTexts[win[1]].innerText &&
            boxTexts[win[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText = boxTexts[win[0]].innerText + " Won";
            isGameover = true;
            img.style.width = '180px';
            line.style.width = '20vw';
            line.style.transform = `translate(${win[3]}vw, ${win[4]}vw) rotate(${win[5]}deg)`;
            // faltu kaam 
            console.log(boxTexts[win[0]].parentElement)
            console.log(boxTexts[win[1]].parentElement)
            console.log(boxTexts[win[2]].parentElement)
            boxTexts[win[0]].parentElement.style.backgroundColor = "rgb(248, 212, 248)";
            boxTexts[win[1]].parentElement.style.backgroundColor = "rgb(248, 212, 248)";
            boxTexts[win[2]].parentElement.style.backgroundColor = "rgb(248, 212, 248)";
            gameover.play();
            return;
        }
    });

};

// game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector(".boxText");
    box.addEventListener('click',() => {
        if(boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

document.addEventListener('click', () => {
    music.play();
    music.addEventListener('ended', () => {
        music.currentTime = 0;
        music.play();
    });
});

// add reset functionality
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(boxText => {
        boxText.innerText = "";
        boxText.parentElement.style.backgroundColor = "";
        turn = "X";
        document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        img.style.width = '0px';
        line.style.width = '0vw';
        isGameover = false;
    });
});