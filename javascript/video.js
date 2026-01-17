// Video player functionality for Doreen Sasson website

// DOM Elements
const video = document.getElementById('audioVideo');
const loadingIndicator = document.getElementById('loadingIndicator');

// Toggle mute function
function toggleMute() {
  const muteIcon = document.getElementById('muteIcon');
  const unmuteIcon = document.getElementById('unmuteIcon');
  
  if (video.muted) {
    video.muted = false;
    muteIcon.style.display = 'none';
    unmuteIcon.style.display = 'block';
  } else {
    video.muted = true;
    muteIcon.style.display = 'block';
    unmuteIcon.style.display = 'none';
  }
}

// Hide loading indicator when video can play
video.addEventListener('canplay', () => {
  loadingIndicator.style.display = 'none';
});

// Show which video is being loaded (for debugging)
video.addEventListener('loadstart', () => {
  console.log('Loading video...');
  loadingIndicator.style.display = 'flex';
});

video.addEventListener('loadedmetadata', () => {
  console.log(`Video loaded: ${video.videoWidth}x${video.videoHeight}`);
});

// Try autoplay when page loads
window.addEventListener('load', function() {
  video.play()
    .then(() => {
      console.log('Autoplay successful');
    })
    .catch(() => {
      console.log('Autoplay blocked');
    });
});
