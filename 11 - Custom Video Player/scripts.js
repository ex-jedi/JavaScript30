// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functionality


function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  video.paused ? toggle.textContent = '⏸️' : toggle.textContent = '►';
}


function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
 }

function handleRangeValue() {
  video[this.name] = parseFloat(this.value);
}


function handleProgress() {
  const percentagePlayed = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentagePlayed}%`
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(button => button.addEventListener('mousemove', handleRangeValue))
video.addEventListener('timeupdate', handleProgress);
