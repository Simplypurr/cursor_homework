// create student class

class Student {
    constructor(university, course, fullName, ...mark) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.mark = mark;
        this.student = true;
    }

    getStudentInfo() {
        return `Student of ${this.course}th course,from ${this.university} - ${this.fullName}`;
    }

    get marks() {
        return (this.student) ? this.mark : null;
    }

    set marks(value) {
        (this.student) ? this.mark.push(value) : null;
    }

    getAverageMark() {
        return this.mark.reduce((total, prev) => total += prev,0) / this.mark.length;
    }

    dismissed() {
       this.student = false; 
    }

    recovered() {
       this.student = true;
    }
}



const elon = new Student('University of Pennsylvania', 5, 'Elon Musk', 5, 5, 5, 4);

console.log(elon.getStudentInfo());
console.log(elon.marks);
elon.dismissed();
console.log(elon.marks);
elon.marks = 5;
console.log(elon.marks);
elon.recovered();
console.log(elon.marks);
elon.marks = 5;
console.log(elon.marks);

class BudgetStudent extends Student {
    constructor (university, course, fullName, ...mark) {
        super(university, course, fullName, ...mark);
        let timer = 0;
        const timerId = setInterval(() => {
            this.getScholarShip();

            if (timer >= 10) {
                clearInterval(timerId);
            }
            timer++;
        }, 30000);
    }

    getScholarShip() {
        if (this.getAverageMark() >= 4 && this.student) {
            return console.log('You get a scholarship 1400 uah');
        } 
    }
}

const musk = new BudgetStudent('University of Pennsylvania', 5, 'Elon Musk', 5, 5, 5, 4);