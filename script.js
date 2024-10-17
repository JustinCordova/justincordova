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
  playSong('audio/My Castle Town - Undertale.mp3');
  setVolume(0.2); // Set volume to 20%
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
}