document.addEventListener('keydown', playSound);

function playSound(e) {
    let event = e;
    if (e instanceof KeyboardEvent) {
        event = e.code;
    }
    const audio = document.querySelector(`audio[data-code="${event}"]`);
    const key = document.querySelector(`.key[data-code="${event}"]`);
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
