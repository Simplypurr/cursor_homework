// create func get Random Array
function getRandomArray(length, min, max) {
    const arr = [...Array(length)]
    return arr.map(() => getRandomNumber(min, max));
}
console.log(getRandomArray(10, 0, 100));

// create func get Mode of numbers (ignores decimal)
function getMode(...numbers) {
    const mode = filterIntegers(numbers).reduce((count, current) => {
        if (!count[current]) {
            count[current] = 1;
        } else {
            count[current] += 1;
        }
        return count; 
    }, {});

    const result = Object.keys(mode).reduce((prev, curr) => {
        if (mode[prev] > mode[curr]) {
            return prev;
        } else if (mode[prev] < mode[curr]) {
            return curr;
        } else {
            return 'Your entered numbers do not have a mode';
        }
    })
    return result;
}

console.log(getMode(1, 2.2, 2, 2, 2, 3.3, 3, 3, 4, 5));

// create func get average number (ignore decimal)
function getAverage(...numbers) {
    const total = filterIntegers(numbers).reduce((total,current) => (total + current));
    return +(total / numbers.length).toFixed(2);
    
}
console.log(getAverage(3,2,3,4,5,6));

// create func get median number (ignore decimal)
function getMedian(...numbers) {
    const middleOfArr = Math.floor(numbers.length / 2);
    const median = filterIntegers(numbers).sort((a,b) => a - b).reduce((prev, curr, ind, arr) => {
        if (arr.length % 2) {
            return arr[middleOfArr]
        } else {
            return (arr[middleOfArr - 1] + arr[middleOfArr]) / 2
        }
    });
    return median;   
}
console.log(getMedian(1,3,5,2,4));

// create func filter even numbers
function filterEvenNumbers(...numbers) {
    return numbers.filter(i => (i % 2));
}
console.log(filterEvenNumbers(1,2,3,4,40,55));

// create func count positive numbers
function countPositiveNumbers(...numbers) {
    return numbers.filter(i => (i > 0)).length;
}
console.log(countPositiveNumbers(1,2,-3,4,-40,-55));

// create func filter dividing by five
function getDivideByFive(...numbers) {
    return numbers.filter(i => !(i % 5));
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
    if (str.length > 10) return 'Function is limited to operate with string which length not exceed 10 symbols';
    if (str.length === 0) return '';
    if (str.length === 1) return str;
    
    const result = [];

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainedChar = str.slice(0,i) + str.slice(i + 1);

        const remainedCharsPermuted = getCombinationWord(remainedChar);

        for (let j = 0; j < remainedCharsPermuted.length; j++) {
            const combination = currentChar + remainedCharsPermuted[j];
            result.push(combination)
        }
    }
    return result;
}
console.log(getCombinationWord('manama'));

// addition function
    // random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    // filter integer
function filterIntegers(intArr) {
    return intArr.filter(Number.isInteger);
}
