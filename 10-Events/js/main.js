window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = this.document.querySelector(`audio[data-code="${e.code}"]`);
    const key = this.document.querySelector(`.key[data-code="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
