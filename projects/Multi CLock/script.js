document.addEventListener("DOMContentLoaded", () => {
    let tick = new Audio("./assets/tick.mp3");
    tick.volume = 0.2;

    document.getElementById("startScreen").addEventListener("click", () => {
        document.getElementById("startScreen").style.display = "none"; // Hide the overlay

        setInterval(() => {
            let date = new Date();
            let hours = date.getHours() % 12;
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            document.getElementById("sec").style.transform = `rotate(${seconds * 6}deg)`;
            document.getElementById("min").style.transform = `rotate(${minutes * 6}deg)`;
            document.getElementById("hrs").style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`;

            // Digital Clock Update
            let hh = document.getElementById("hour");
            let mm = document.getElementById("minutes");
            let ss = document.getElementById("seconds");
            let ampm = document.getElementById("ampm");

            let h = new Date().getHours();
            ampm.innerHTML = h >= 12 ? "PM" : "AM";
            h = h % 12 || 12;

            let m = new Date().getMinutes();
            let s = new Date().getSeconds();

            hh.innerHTML = h.toString().padStart(2, "0");
            mm.innerHTML = m.toString().padStart(2, "0");
            ss.innerHTML = s.toString().padStart(2, "0");

            tick.currentTime = 0;
            tick.play();
        }, 1000);
    });
});
