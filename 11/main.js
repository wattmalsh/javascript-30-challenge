// video
const video = document.querySelector('video');

// video progress bar
const videoProgressContainer = document.querySelector('.video-progress-container');
const videoProgress = document.querySelector('.video-progress');
const videoProgressWhitespace = document.querySelector('.video-progress-whitespace');

// buttons
const playPause = document.querySelector('button[id="play-pause"]');
const mute = document.querySelector('button[id="mute"]');
const fullScreen = document.querySelector('button[id="full-screen"]');
const skipButtons = document.querySelectorAll('[data-skip]');

// sliders
const seekBar = document.querySelector('input[id="seek-bar"]');
const volumeBar = document.querySelector('input[id="volume-bar"]');

function togglePlay() {
  video[video.paused ? 'play' : 'pause']();
}

function handleMuteClick() {
  this.innerHTML = video.muted ? 'Mute' : 'Unmute';
  video.muted = !video.muted;
}

function handleFullScreenClick() {
  video.requestFullscreen();
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleSeekBarChange() {
  video.currentTime = video.duration * (seekBar.value / 100);
}

function handleVolumeBarChange() {
  video.volume = this.value;
}

function handleVideoPlay() {
  playPause.innerHTML = 'Pause';
}

function handleVideoPause() {
  playPause.innerHTML = 'Play';
}

function handleVideoTimeUpdate() {
  const value = (video.currentTime / video.duration) * 100;
  seekBar.value = value;
  videoProgress.style.width = `${value}%`;
  videoProgressWhitespace.style.width = `${100 - value}%`;
}

function handleVideoProgressChange(e) {
  let offsetX;
  if (Array.from(e.target.classList).indexOf('video-progress') !== -1) {
    offsetX = e.offsetX;
  } else {
    offsetX = videoProgress.clientWidth + e.offsetX;
  }
  const width = (offsetX / videoProgressContainer.clientWidth) * 100;
  videoProgress.style.width = `${width}%`;
  videoProgressWhitespace.style.width = `${100 - width}%`;
  video.currentTime = video.duration * (width / 100);
}

// Video Listeners
video.addEventListener('playing', handleVideoPlay);
video.addEventListener('pause', handleVideoPause);
video.addEventListener('ended', handleVideoPause);
video.addEventListener('timeupdate', handleVideoTimeUpdate);
video.addEventListener('click', togglePlay);

// Play/Pause, Mute, Full Screen, <10, >25 Buttons
playPause.addEventListener('click', togglePlay);
mute.addEventListener('click', handleMuteClick);
fullScreen.addEventListener('click', handleFullScreenClick);
skipButtons.forEach(button => button.addEventListener('click', handleSkip));

// Volume Bar Slider
volumeBar.addEventListener('change', handleVolumeBarChange);

// Seek Bar Slider
seekBar.addEventListener('change', handleSeekBarChange);
seekBar.addEventListener('mousedown', () => { video.pause(); });
seekBar.addEventListener('mouseup', () => { video.play(); });

// Progress Div
let progressFlag = false;
videoProgressContainer.addEventListener('mousedown', () => { video.pause(); progressFlag = true; });
videoProgressContainer.addEventListener('mouseup', () => { video.play(); progressFlag = false; });
videoProgressContainer.addEventListener('mousemove', e => progressFlag && handleVideoProgressChange(e));
videoProgressContainer.addEventListener('click', handleVideoProgressChange);
