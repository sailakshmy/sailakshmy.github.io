// Get our Elements
//1. Get the player
const player = document.querySelector('.player');
//2.Get the video 
const video = player.querySelector('.viewer');
//3.get the progress 
const progress = player.querySelector('.progress');
//4.Get the progress filled
const progressBar = player.querySelector('.progress__filled');
//5.Get the toggle
const toggle = player.querySelector('.toggle');
//6.get the Skip button
const skipButtons = player.querySelectorAll('[data-skip]');
//7.Get the sliders
const ranges = player.querySelectorAll('.player__slider');
//8.Get the fullscreen buttons
const fullscreen = player.querySelectorAll(".material-icons");
const minimize = player.querySelector("#minimize");
const maximize = player.querySelector("#maximize");

///Build our functions
function togglePlay() {
   /* if (video.paused) {// paused is a property of video.
        video.play();
    }
    else {
        video.pause();
    }
    */
    // To simplify the above code, we can use it this way
    const action = video.paused ? 'play' : 'pause';
    video[action]();
}
function keyPress(e) {
    console.log(e.keyCode);
    if (e.keyCode == '32') {
      //  console.log('On clicking Space bar');
        togglePlay();
    }
       

}
function updateButton() {
    //console.log("Updating the button");
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent= icon;
}
function skip() {
    //console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);// parsing is done as this.dataset.skip is a String

}
function handleSliders() {//By me:)
    //console.log('HandlingSliders ' + this.name + " -" + this.value);
    //console.log(video[this.name]);
    video[this.name] = this.value;
    //console.log(video[this.name]);
    
}
function handleProgressBar() {
    //console.log("I am here");
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    const scrub = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrub;
    console.log(e);
}
function handleScreenSize() {
    if (player.style.maxWidth == `750px`) {
        player.style.maxWidth = 'none';
        player.offsetWidth = `100%`;
        player.style.height = `100%`;
    }
    else if (player.offsetWidth == `100%`){
        player.style.maxWidth = '750px';
    }
}
function updateScreenSizeIcon() {
    console.log("I am here");
    if (player.style.maxWidth == '750px') {
        console.log(player.style.maxWidth)
       maximize.style.display = 'block';
       minimize.style.display = 'none';
    }
    else if (player.style.maxWidth == 'none'){
        minimize.style.display = 'block';
        maximize.style.display = 'none';

    }
        
}

//Hook up the event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
window.addEventListener('keypress', keyPress); //done by me:)
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//For Skip functions
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

//For Volume and playBackRate sliders
ranges.forEach(range => range.addEventListener('change', handleSliders));

//For the progressbar
video.addEventListener('timeupdate', handleProgressBar);

//For manually changing the progressbar
progress.addEventListener('click', scrub);
//progress.addEventListener('mousemove', scrub);// Doing this will always move the progressbar
/* To move the progress bar only when the user clicks it (basically click and drag)*/
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub);
//progressBar.addEventListener('mousedown', scrub);// We cannot click and drag in this

//For maximising the screen
fullscreen.forEach(fs => fs.addEventListener('click', handleScreenSize));
fullscreen.forEach(fs=> fs.addEventListener('click', updateScreenSizeIcon));
