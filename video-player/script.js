const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//To play and pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//Update play/pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class ="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class ="fa fa-pause fa-2x"></i>';
    }
}

//Update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //Get the minutes
    let mins = Math.floor(video.currentTime / 60);
    //Format it with the zeros
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    //Get the seconds
    let secs = Math.floor(video.currentTime % 60);
    //Format it with the zeros
    if(secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

//Set video time to progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
    //putting the plus sign in front of a variable converts it to a number if its a string
}

//Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


//Event listeners 
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
//as the video goes, timeupdate is constantly being called

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
//it's a ranged event so when you change(slide it) its going to be called so it goes to that point in the video