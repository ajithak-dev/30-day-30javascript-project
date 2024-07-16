let audio = document.querySelector("#audio");
const play = document.querySelector("#play-pause");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
let seekbar = document.querySelector("#seek");
const poster = document.querySelector("#poster");
const playPauseButton = document.getElementById("play-pause");

const songlist = [
  [
    "Suzume Song",
    "/assets/images/suzume.jpg",
    "/assets/audio/Suzume Theme Song.mpeg",
  ],
  [
    "Shinunoga E-Wa",
    "/assets/images/shinunoga e wa.jpg",
    "/assets/audio/Fujii Kaze - Shinunoga E-Wa (Lyrics).mp3",
  ],
  [
    "Summer Time Saddness",
    "/assets/images/summertimesadness.jfif",
    "/assets/audio/Lana Del Rey - Summertime Sadness (Lyrics).mp3",
  ],
  [
    "I Wanna Be Yours",
    "/assets/images/i wanna be yours.jpg",
    "/assets/audio/I Wanna Be Yours.mp3",
  ],
];

function loadAndPlay(index) {
  const [title, imageUrl, audioUrl] = songlist[index];

  // Set audio source and load
  audio.src = audioUrl;
  audio.load();
  const titles = document.querySelector("#title");

  poster.setAttribute("src", imageUrl);

  playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  titles.innerHTML = title;

  audio.play();
}

function playAudio() {
  if (audio.paused) {
    audio.play(); // If audio is paused, play it
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause(); // If audio is playing, pause it
    playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

let currentIndex = 0;
function forwardAudio() {
  currentIndex++;
  if (currentIndex >= songlist.length) {
    currentIndex = 0;
  }

  loadAndPlay(currentIndex);
}

function backwardAudio() {
  const playPauseButton = document.getElementById("play-pause");

  audio.pause();
  seekbar.value = 0;
  audio.currentTime = 0;
  playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
}

audio.addEventListener("timeupdate", function () {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekbar.value = progress;
});

seekbar.addEventListener("input", function () {
  const seektime = audio.duration * (seekbar.value / 100);
  audio.currentTime = seektime;
});

audio.addEventListener("loadeddate", function () {});

audio.addEventListener("ended", function () {
  currentIndex++;
  loadAndPlay(currentIndex);
  if (currentIndex > currentIndex.length) {
    currentIndex = 0;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  loadAndPlay(currentIndex);
});
