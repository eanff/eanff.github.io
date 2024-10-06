const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar");
const muteBtn = document.querySelector("#mute-btn");
const playbackSpeed = document.querySelector("#playback-speed");
const volumeSlider = document.querySelector("#volume-slider");
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const visualEffectsBtns = document.querySelectorAll("#visual-effects button");

// Remove default controls provided by the browser so that I can use my own custom controls. This will allow for consistent design and better user experience. 
video.removeAttribute("controls");

// Event listeners
playPauseBtn.addEventListener("click", togglePlayPause);
progressBar.addEventListener("input", setVideoProgress);
video.addEventListener("timeupdate", updateProgressBar);
muteBtn.addEventListener("click", toggleMute);
playbackSpeed.addEventListener("change", changePlaybackSpeed);
volumeSlider.addEventListener("input", updateVolume);
fullscreenBtn.addEventListener("click", toggleFullscreen);
visualEffectsBtns.forEach(btn => btn.addEventListener("click", applyVisualEffect));

// Play/Pause functionality
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    playPauseImg.alt = "Pause";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    playPauseImg.alt = "Play";
  }
}

// Update progress bar
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.value = value;
}

// Set video progress
function setVideoProgress() {
  const time = (progressBar.value * video.duration) / 100;
  video.currentTime = time;
}

// Mute/Unmute functionality
function toggleMute() {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔊";
}

// Change playback speed
function changePlaybackSpeed() {
  video.playbackRate = playbackSpeed.value;
}

// Volume Slider
function updateVolume() {
    video.volume = volumeSlider.value;
   
  }


// Toggle fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Chrome
      video.webkitRequestFullscreen();
    
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

// Apply visual effects
function applyVisualEffect(event) {
  const effect = event.target.id.replace('-btn', '');
  video.style.filter = video.style.filter === `${effect}(1)` ? 'none' : `${effect}(1)`;
  event.target.classList.toggle('active');
}

;
