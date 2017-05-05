// ----------------- get elements -------------------------//
// need to control the following

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.player__fullscreen');
// ----------------- build functions ----------------------//
function togglePlay(){
	//--- using terniary operators-
	const togglePlay =  video.paused ? 'play' : 'pause';
	video[togglePlay]();
	// ---same thing as using if/else---
	// if(video.paused) {
	// 	video.play();
	// }else{
	// 	video.pause();
	// }
}
function updateButton(){
	const icon = this.paused ? '►' : '❚ ❚'; //.this refers to .video to which it is bound
	toggle.textContent = icon;
	// console.log('Update the Button');
}
function skip(){
	// console.log(this.dataset.skip); // shows what the data-xyz data is as a string
	//use parseFloat to convert string to a float number
	video.currentTime += parseFloat(this.dataset.skip); 
}

function handleRangeUpdate(){
	video[this.name] = this.value; 
	// console.log(this.value);
	// console.log(this.name);
}

function handleProgress(){
	// divide currentTime by Duration x 100 (flex-basis is a % in css property controlling the color yellow)
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = percent; // inserts percent variable into css declaration on element
}
function scrub(e){
	// console.log(e); //returns event object- look for offsetX to find where you clicked on bar, divide by total width of the element, then multiply by video duration.
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	//update video
	video.currentTime = scrubTime;
}
function toggleFullScreen(e){
	console.log(e);
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}

// ----------------- hook up event listeners ---------------//
//clicking on video itself triggers play/pause
video.addEventListener('click', togglePlay);
//listen for anything that would make video pause, like a plugin, pop-up, spacebar etc. 
video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton); 
video.addEventListener('timeupdate', handleProgress); //video emits a timecode update event, when this is heard, run handleProgress()

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false; // is person pushing down on mouse?

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', mousedown = true);
progress.addEventListener('mouseup', mousedown = false);

fullScreen.addEventListener('click', toggleFullScreen);
