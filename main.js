function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop function if no audio
  audio.currentTime = 0; //rewind to start
  audio.play();
  pad.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it
  this.classList.remove('playing');
}

const pads =  document.querySelectorAll('.pad');
pads.forEach(key => key.addEventListener('click', playSound));
pads.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
