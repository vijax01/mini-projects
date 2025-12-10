let tick = new Audio("./assets/tick.mp3");
const btn = document.querySelector("#btn");
const clockContainer = document.querySelector('#clockContainer');
document.addEventListener("click",() => {
    console.log("tick");
    tick.volume = .1;
    tick.play();
    tick.addEventListener("ended", function(){
    tick.play();
});
})
const hourNeedle = document.querySelector("#hours");
const minNeedle = document.querySelector("#minutes");
const secNeedle = document.querySelector("#seconds");

setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hourNeedle.style.transform = `rotate(${hrotation}deg)`;
    minNeedle.style.transform = `rotate(${mrotation}deg)`;
    secNeedle.style.transform = `rotate(${srotation}deg)`;
},1000);

let counter = 1;
btn.addEventListener('click',() => {
    if(counter <= 11) {
        clockContainer.style.backgroundImage = `url('./assets/themes/clock${counter}.png')`;
        counter++;
    } else {
        counter = 0;
    }
})