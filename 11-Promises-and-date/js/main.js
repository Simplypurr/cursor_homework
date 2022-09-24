async function getRandomChinese(length) {
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

    return result;
}


// DOM manipulation
const input = document.getElementById('length');
const button = document.getElementById('submit');
const modal = document.querySelector('.modal')
const div1 = document.createElement('div')
const div2 = document.createElement('div')

async function modalCreate(value) {
    if (!input.value) return;

    const startTime = performance.now();
    div1.textContent = await getRandomChinese(Number(value));
    const endTime = performance.now();
    div2.textContent = `Execution time: ${(endTime - startTime).toFixed(2)}ms`;
    modal.classList.add('active');
    modal.append(div1, div2);
}

button.addEventListener('click', async () => modalCreate(input.value));
    


