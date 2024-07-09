
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const btn = document.querySelector('.start-btn');
const h2hour = document.querySelector('.h2-hour');
const h2min = document.querySelector('.h2-min');
const h2sec = document.querySelector('.h2-sec');
const display = document.querySelector('.display')


let countdownInterval;

function startTimer() {
    clearInterval(countdownInterval);

    let hours = parseInt(hour.value) || 0;
    let minutes = parseInt(min.value) || 0;
    let seconds = parseInt(sec.value) || 0;

    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    function timer() {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            display.innerText = 'Time is up!';
            return;
        }

        totalSeconds--;

        let displayHours = Math.floor(totalSeconds / 3600);
        let displayMinutes = Math.floor((totalSeconds % 3600) / 60);
        let displaySeconds = totalSeconds % 60;

        h2hour.innerHTML=displayHours;
        h2min.innerHTML=displayMinutes;
        h2sec.innerHTML=displaySeconds;
    }

    countdownInterval = setInterval(timer, 1000);
    timer(); 
}

btn.onclick = startTimer;


