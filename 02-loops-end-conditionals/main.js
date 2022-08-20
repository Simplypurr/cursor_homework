// user input check
let N = parseInt(prompt('Input your start range number for calculation..'), 10);
while (isNaN(N)) {
    parseInt(prompt('Your input is not valid, try again. Type your start range number..(ex.10)', 10), 10);
};

let M = parseInt(prompt('Input your end range number for calculation..'), 10);
while (isNaN(M)) {
    parseInt(prompt('Your input is not valid, try again. Type your end range number..(ex.20)', 20), 10);
};

// user even numbers confirmation
const evenNumberSetter = confirm('Do you want to skip even numbers in calculation?');

// create loop for calculations
let sumInRange = 0;

for (let i = N; i <= M; i++) {
   if (evenNumberSetter) {
    sumInRange += (i % 2) ? i : 0;
   } else {
    sumInRange += i;
   }
}

console.log(`Sum of numbers in range ${(evenNumberSetter) ? 'excluding':'including'} even numbers is ${sumInRange}`);