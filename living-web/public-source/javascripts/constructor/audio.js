
// This will set all audio on the website

// heartbeat audio
var audioHeartbeat = new Audio('public/media/sounds/beat.m4a');
audioHeartbeat.volume = 0.2;

// background audio
var audioBackground = new Audio('public/media/sounds/background.mp3');
audioBackground.volume = 0.4;
audioBackground.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);