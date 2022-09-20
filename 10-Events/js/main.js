document.addEventListener('keydown', playSound);

function playSound(e) {
    let targetElement = e;
    if (e instanceof KeyboardEvent) {
        targetElement = e.code;
    }
    const audio = document.querySelector(`audio[data-code="${targetElement}"]`);
    const key = document.getElementById(`${targetElement}`);
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
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', () => playSound(key.id));
});
