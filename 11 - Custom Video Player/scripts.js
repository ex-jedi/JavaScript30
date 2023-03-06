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
  console.log(video.paused);
}


function skip() {

  video.currentTime += parseFloat(this.dataset.skip);
  console.log(video.currentTime);
  console.log(this.dataset.skip);
}

// Hook up event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
