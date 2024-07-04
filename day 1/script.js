const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

function showtime() {
    const d = new Date();

    var hourjs = d.getHours();
    hourjs = hourjs % 12;
    hourjs = hourjs ? hourjs : 12; 
    const minutejs = d.getMinutes();
    const secondsjs = d.getSeconds();

    // Add leading zeros for single digit minutes and seconds
    const formattedMinutes = minutejs < 10 ? '0' + minutejs : minutejs;
    const formattedSeconds = secondsjs < 10 ? '0' + secondsjs : secondsjs;

    hours.innerHTML = hourjs + ":";
    minutes.innerHTML = formattedMinutes + ":";
    seconds.innerHTML = formattedSeconds;
}

setInterval(showtime, 1000);
