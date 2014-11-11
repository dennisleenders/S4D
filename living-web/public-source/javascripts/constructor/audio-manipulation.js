     
// we get the users microphone
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
navigator.getUserMedia( {audio:true}, gotStream, function(){
 
});

// success callback when requesting audio input stream
function gotStream(stream) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();

    // Create an AudioNode from the stream.
    var mediaStreamSource = audioContext.createMediaStreamSource( stream );

    // an analyser node can check data of a stream
    var analyser = audioContext.createAnalyser();
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    mediaStreamSource.connect(analyser);

    // this function will send the frequency data to the rest of the code
    var live = function(){
      analyser.getByteFrequencyData(frequencyData);
      speed = frequencyData[0]/1000;
      requestAnimationFrame(live);
    }
    live();
}