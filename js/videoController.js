const video = document.getElementById("video");
const playButton = document.getElementById("playButton");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
    video.setAttribute("controls", "");
  } else {
    video.pause();
    playButton.style.display = "flex";
    video.removeAttribute("controls");
  }
}

video.onplay = () => {
  playButton.style.display = "none";
  video.setAttribute("controls", "");
};

video.onpause = () => {
  playButton.style.display = "flex";
  video.removeAttribute("controls");
};
