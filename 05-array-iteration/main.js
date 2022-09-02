// create func get Random Array
function getRandomArray(length, min, max) {
    return [...Array(length)].map(() => getRandomNumber(min, max));
}
console.log(getRandomArray(10, 0, 100));

// create func get Mode of numbers (ignores decimal)
function getMode(...numbers) {
    const mode = Array.from(numbers)
                .filter(i => Number.isInteger(i))
                .reduce((count, current) => (count[current] = count[current] + 1 || 1, count), {});
    return Object.keys(mode).reduce((prev, curr) => (mode[prev] > mode[curr] ? prev :
                                                     mode[prev] < mode[curr] ? curr : `Your entered numbers do not have a mode`));
}
console.log(getMode(1, 2.2, 2, 2, 2, 3.3, 3, 3, 4, 5));

// create func get average number (ignore decimal)
function getAverage(...numbers) {
    const average = Array.from(numbers)
                    .filter(i => Number.isInteger(i))
                    .reduce((total,current) => (total + current)) / (numbers.length);
    return +average.toFixed(2);
    
}
console.log(getAverage(3,2,3,4,5,6));

// create func get median number (ignore decimal)
function getMedian(...numbers) {
    const middleOfArr = Math.floor([...numbers].length / 2);
    const median = Array.from(numbers)
                    .filter(i => Number.isInteger(i))
                    .sort((a,b) => a - b)
                    .reduce((prev, curr, ind, arr) => (arr.length % 2) ? arr[middleOfArr] : (arr[middleOfArr - 1] + arr[middleOfArr]) / 2);
    return median;   
}
console.log(getMedian(1,3,5,2,4));

// create func filter even numbers
function filterEvenNumbers(...numbers) {
    return Array.from(numbers).filter(i => (i % 2));
}
console.log(filterEvenNumbers(1,2,3,4,40,55));

// create func count positive numbers
function countPositiveNumbers(...numbers) {
    return Array.from(numbers).filter(i => (i > 0)).length;
}
console.log(countPositiveNumbers(1,2,-3,4,-40,-55));

// create func filter dividing by five
function getDivideByFive(...numbers) {
    return Array.from(numbers).filter(i => !(i % 5));
}
console.log(getDivideByFive(1,2,19,123,20,40,55));

// create func replace bad words with asterisks
function replaceBadWords(string) {
    const badWords = ['shit', 'fuck'];
    const regEx = new RegExp(badWords.join('|'), 'ig')
    const updString = string.split(' ').map((item) => item.replace(regEx, '****')).join(' ');
    return updString;
}
console.log(replaceBadWords('bullshit ,shit, fuck, fucking'));

// create func which dividing word by three letters
function divideWordByThree(word) {
    return word.toLowerCase().match(/.{1,3}/g);
}
console.log(divideWordByThree('performance'));

// get string permutation
function getCombinationWord(str) {
    if (str.length > 10) {return 'Function is limited to operate with string which length not exceed 10 symbols'};
    if (str.length === 0) {return ''};
    if (str.length === 1) {return str};
    
    const result = [];

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainedChar = str.slice(0,i) + str.slice(i + 1);

        const remainedCharsPermuted = getCombinationWord(remainedChar);

        for (let j = 0; j < remainedChar.length; j++) {
            const combination = currentChar + remainedCharsPermuted[j];
            result.push(combination)
        }
    }
    return result;
}
console.log(getCombinationWord('man'));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}