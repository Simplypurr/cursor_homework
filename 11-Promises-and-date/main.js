async function getRandomChinese(length) {
    const startTime = performance.now();
    console.log('Timer started');

    const promise = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve(getSymbol());
        }, 50);
    })

    const getSymbol = () => {
        const charCode = Number(Date.now().toString().slice(-5));
        const symbol = String.fromCharCode(charCode);
        return symbol;
    }

    let result = '';
    let i = 0;
    while (length > i) {
        result += await promise()
        i++
    }

    const endTime = performance.now();
    console.log('Timer ended:', endTime - startTime);

    return result;
}

const input = document.getElementById('length');
const button = document.getElementById('submit');
// const inside = document.createElement('p')

button.addEventListener('click', () => {
    const inside = document.createElement('p')
    inside.textContent = getRandomChinese(Number(input.value));
    input.insertAdjacentElement('afterbegin', inside)
    
    console.log(input.value);
});
    

console.log(getRandomChinese(10))

