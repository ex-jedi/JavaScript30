// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = document.querySelector('.fullscreen__button');

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

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullScreen() {
  if (player.requestFullscreen) 
    player.requestFullscreen();
  else if (player.webkitRequestFullscreen) 
    player.webkitRequestFullscreen();
  else if (player.msRequestFullScreen) 
    player.msRequestFullScreen();
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(button => button.addEventListener('mousemove', handleRangeValue))
video.addEventListener('timeupdate', handleProgress);
fullscreenButton.addEventListener('click', fullScreen);

let mousedown = false;
progressBar.addEventListener('click' , scrub)

// progressBar.addEventListener('mousemove' , (e) => {
//   if (mousedown) scrub(e);
// })
// As above but hijacking &&
progress.addEventListener('mousemove' , (e) => mousedown && scrub(e) )
progress.addEventListener('mousedown' , () => mousedown = true)
progress.addEventListener('mouseup' , () => mousedown = false)

