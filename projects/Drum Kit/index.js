let numberOfDrumButtons = document.querySelectorAll('.set > button').length ;

// detecting button click
for(let i = 0 ; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        console.log(this.innerHTML);

        let buttonInnerHtml = this.innerHTML;
        playCorrectSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
};

// detecting keyboard press
document.addEventListener('keydown', function(event) {
    playCorrectSound(event.key);
    buttonAnimation(event.key);
});

//sound making function
function playCorrectSound(keyCode) {
    switch(keyCode) {
        case "a":
            var tom1 = new Audio ("./sounds/tom-1.mp3");
            tom1.currentTime = 0;
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio ("./sounds/tom-2.mp3");
            tom2.currentTime = 0;
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio ("./sounds/tom-3.mp3");
            tom3.currentTime = 0;
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio ("./sounds/tom-4.mp3");
            tom4.currentTime = 0;
            tom4.play();
            break;
        case "j":
            var snare = new Audio ("./sounds/snare.mp3");
            snare.currentTime = 0;
            snare.play();
            break;
        case "k":
            var kick = new Audio ("./sounds/kick-bass.mp3");
            kick.currentTime = 0;
            kick.play();
            break;
        case "l":
            var crash = new Audio ("./sounds/crash.mp3");
            crash.currentTime = 0;
            crash.play();
            break;
        default :
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    const buttons = document.querySelectorAll(".drum");
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },150);
    
}

