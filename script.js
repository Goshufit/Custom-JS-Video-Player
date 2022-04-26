const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
//const skipButtons = player.querySelector('.[data-skip]');
const ranges = player.querySelectorAll('.player__slider')

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    if (this.paused === true) {
        `►`
    } else {
        `❚ ❚`
    }
    toggle.textContent = icon;
    const icon = this;
    console.log(icon)
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', togglePlay);
toggle.addEventListener('click', togglePlay);