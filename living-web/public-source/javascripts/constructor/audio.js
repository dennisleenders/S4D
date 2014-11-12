
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


var hasClickedVolume = false;

//Sound on and off
$(".sound-control").click(function(){
	if(hasClickedVolume == false){
		audioBackground.volume = 0;
		audioHeartbeat.volume = 0;
		$(".sound").attr('src', "public/media/img/sound_off.png");
		hasClickedVolume = true;


	} else if (hasClickedVolume == true){
		audioBackground.volume = 0.4;
		audioHeartbeat.volume = 0.2;
		$(".sound").attr('src', "public/media/img/sound_on.png");
		hasClickedVolume = false;
	}
});