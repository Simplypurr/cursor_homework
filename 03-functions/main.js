// get the biggest number from any digit number
export function getMaxDigit(number) {
    let digit = number.toString().split('');
    let max = +digit[0]
    for (let i = 0; i <= digit.length; i++){
        if (+digit[i] > max) {
            max = +digit[i]
        } 
    }
    return max;
}

// exponentiation number

    // using loop
function pow1(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

    // using recursion
function pow2(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow2(x, n - 1);
    }
}

// Capitalize letter in string
function capitalizeLetter(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
}

// Salary without tax
function salaryWithoutTax(salary) {
    let tax = 18 + 1.5;
    return salary - (salary * (tax / 100));
}


// random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// count letters in word
function countLetters(letter, word) {
    let arr = word.toLowerCase().split('');
    let counter = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === letter) {
            counter++
        }
    }
    return counter;
}

// currency converter
function convertCurrency(amount) {
    let rate = 35;
    if (amount.toLowerCase().includes('uah')) {
        return (parseInt(amount, 10) / rate).toFixed(2) + '$';
    } else if (amount.includes('$')) {
        return (parseInt(amount, 10) * rate).toFixed(2) + 'UAH';
    } else {
        return 'Your currency is not valid, try again'
    }
}

// random pass
function randomPassword(length = 8) {
    let pass = '';
    const min = 0;
    const max = 9;
    for (let i = 0; i < length; i++) {
        pass += getRandomNumber(min,max);
    }
    return pass
}

// delete matching letters
function deleteLetters(letter, word) {
    const arrStr = word.toLowerCase().split('');
    const normalizedLetter = letter.toLowerCase();
    let updString = '';
    for (let i = 0; i < arrStr.length; i++) {
        updString += (arrStr[i] === normalizedLetter) ? '' : arrStr[i]; 
    }
    return updString;
}

// palindrome sentence
function isPalindrome(string) {
    const strWithoutSpace = string.toLowerCase().replace((/\s/g), '');
    const reversedStr = strWithoutSpace.split('').reverse().join('');
    return (reversedStr === strWithoutSpace);
}

// delete duplicate letter
function deleteDuplicateLetters(string) {
    let arrStr = string.toLowerCase().split('');
    let updString = '';
    for (let i = 0; i < arrStr.length; i++){
        if (arrStr.indexOf(arrStr[i]) === arrStr.lastIndexOf(arrStr[i]))
        updString += arrStr[i];
    }
    return updString;
}

// document.writeln(`<ul><li>Function 1 - ${getMaxDigit(21638)}</li>
//                 <li>Function 2 - ${pow1(5, 3)}</li>
//                 <li>Function 2.1 - ${pow2(5, 5)}</li>
//                 <li>Function 3 - ${capitalizeLetter('valEra')}</li>
//                 <li>Function 4 - ${salaryWithoutTax(10000)}</li>
//                 <li>Function 5 - ${getRandomNumber(10, 50)}</li>
//                 <li>Function 6 - ${countLetters('a', 'Abrakadabra')}</li>
//                 <li>Function 7 - ${convertCurrency('1000$')}</li>
//                 <li>Function 8 - ${randomPassword()}</li>
//                 <li>Function 9 - ${deleteLetters('a', 'Abrakadabra')}</li>
//                 <li>Function 10 - ${isPalindrome('race car')}</li>
//                 <li>Function 11 - ${deleteDuplicateLetters('see you later alligator')}</li></ul>`);


