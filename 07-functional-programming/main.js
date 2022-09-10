const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const lithuania = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

function getMyTaxes(salary) {
    return +(this.tax * salary).toFixed(2);
}
console.log(getMyTaxes.call(ukraine, 3000));

function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
}
console.log(getMiddleTaxes.call(latvia))

function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies)
}
console.log(getTotalTaxes.call(lithuania));


function getMySalary(country) {
    setInterval(() => {
        const obj = {
            salary: getRandomNumber(1500,2000),
            taxes: function() {
                return getMyTaxes.call(country, this.salary)
            },
            profit: function() {
                return this.salary - this.taxes();
            }
        }
            return console.log({salary: obj.salary, taxes: obj.taxes(), profit: obj.profit()});
        }, 10000)
}

// getMySalary(ukraine);
getMySalary(lithuania);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}