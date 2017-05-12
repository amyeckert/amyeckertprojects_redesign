/* Get Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const timeCurrent = player.querySelector('.start-time');
const timeRemaining = player.querySelector('.remaining-time');

const totalTime = video.duration;

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

// source: https://coderwall.com/p/wkdefg/converting-milliseconds-to-hh-mm-ss-mmm
function durationToTime(duration) {
    // duration = totalTime;
    // var milliseconds = parseInt((duration%1000)/100), 
        var seconds = parseInt((duration/1000)%60),
        minutes = parseInt((duration/(1000*60))%60),
        hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds;
    // console.log('-' + hours + ":" + minutes + ":" + seconds + "." + milliseconds);
}


function updateRemainingTime() {
    console.log(totalTime);
    var elapsedTime = video.currentTime;
    var remainingTime = (totalTime - elapsedTime);
    timeCurrent.innerHTML = durationToTime(elapsedTime);
    timeRemaining.innerHTML = durationToTime(remainingTime);
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('play', updateRemainingTime);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
// video.addEventListener('timeupdate', msToTime);
video.addEventListener('timeupdate', updateRemainingTime);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
