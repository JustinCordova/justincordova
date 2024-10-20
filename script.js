const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');

// Play the selected song
function playSong(songPath) {
  audioPlayer.src = songPath;
  audioPlayer.play();
  playPauseButton.classList.add("playing");
}

// Automatically play the first song when the page loads and set default volume
window.onload = function() {
  audioPlayer.volume = 0; // Start muted to allow autoplay
  playSong('audio/My Castle Town - Undertale.mp3');
  
  // After autoplay starts, unmute and set to the desired volume
  setTimeout(() => {
    setVolume(0.05); // Set volume to 20% after unmuting
  }, 1000); // 1 second delay to ensure autoplay starts
};


// Set volume function
function setVolume(volume) {
  audioPlayer.volume = volume;
}

// Toggle play/pause function
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.classList.add("playing");
  } else {
    audioPlayer.pause();
    playPauseButton.classList.remove("playing");
  }
  document.addEventListener("mousemove", (event) => {
    const cursorDot = document.getElementById("custom-cursor");
    cursorDot.style.left = event.pageX + "px";
    cursorDot.style.top = event.pageY + "px";
});

}