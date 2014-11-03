     

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
navigator.getUserMedia( {audio:true}, gotStream, function(){
 
});

// success callback when requesting audio input stream
function gotStream(stream) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();

    // Create an AudioNode from the stream.
    var mediaStreamSource = audioContext.createMediaStreamSource( stream );

    var analyser = audioContext.createAnalyser();
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    mediaStreamSource.connect(analyser);
    //analyser.connect(audioContext.destination);


    var live = function(){
      analyser.getByteFrequencyData(frequencyData);
      speed = frequencyData[0]/1000;
      requestAnimationFrame(live);
    }
    live();
}