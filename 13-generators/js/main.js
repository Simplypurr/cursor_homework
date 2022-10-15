const idGenerator = createIdGenerator();
const btnUp = document.getElementById('up');
const btnDown = document.getElementById('down');
const headingText = document.querySelector('h1');

function* createIdGenerator() {
    for (let i = 1; i < Infinity; i++) yield i;
}

function* newFontGenerator(currentFontSize) {
    while (currentFontSize) {
        let fontSize = yield currentFontSize;
        if (fontSize === 'up') {
            currentFontSize += 2;
        } else {
            currentFontSize -= 2;
        }
    }
}
const fontSizeRange = newFontGenerator(12);

btnUp.addEventListener('click', () => {
    headingText.style.fontSize = `${fontSizeRange.next('up').value}px`;
});
btnDown.addEventListener('click', () => {
    headingText.style.fontSize = `${fontSizeRange.next('down').value}px`;
});