const video = document.getElementById("video-player");
const playPauseButton = document.querySelector(".pause-play");
const scrubber = document.getElementById("scrubber");
const forwardButton = document.querySelector(".forward");
const backwardButton = document.querySelector(".backward");
const fileInput = document.getElementById("video");

function playVideo() {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

function forwardVideo() {
  video.currentTime += 10;
}

function backwardVideo() {
  video.currentTime -= 10;
}

function updateScrubber() {
  if (!isNaN(video.duration)) {
    const progress = (video.currentTime / video.duration) * 100;
    scrubber.value = progress;
  }
}

video.addEventListener("timeupdate", updateScrubber);

scrubber.addEventListener("input", function () {
  const seekTime = video.duration * (scrubber.value / 100);
  if (!isNaN(seekTime)) {
    video.currentTime = seekTime;
  }
});

video.addEventListener("loadedmetadata", function () {
  scrubber.max = 100;
  updateScrubber();
});

document.getElementById("video").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    video.src = fileURL;
    video.load(); // Ensure the video loads the new source
  }
});

playPauseButton.addEventListener("click", playVideo);
forwardButton.addEventListener("click", forwardVideo);
backwardButton.addEventListener("click", backwardVideo);
