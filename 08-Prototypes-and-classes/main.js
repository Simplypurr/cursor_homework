// create student class

class Student {
    constructor(university, course, fullName, mark) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.mark = mark;
        this.isStudent = true;
    }

    getStudentInfo() {
        return `Student of ${this.course}th course,from ${this.university} - ${this.fullName}`;
    }

    get marks() {
        return this.isStudent ? this.mark : null;
    }

    set marks(value) {
        if (this.isStudent) this.mark.push(value);
    }

    getAverageMark() {
        const totalMarks = this.mark.reduce((total, prev) => total += prev,0)
        return +(totalMarks / this.mark.length).toFixed(2);
    }

    dismissed() {
       this.student = false; 
    }

    recovered() {
       this.student = true;
    }
}



const elon = new Student('University of Pennsylvania', 5, 'Elon Musk', [5, 5, 5, 4]);

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
console.log(elon.getAverageMark());

class BudgetStudent extends Student {
    constructor (university, course, fullName, mark) {
        super(university, course, fullName, mark);
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
        const gradeForScholarship = 4;
        if (this.getAverageMark() >= gradeForScholarship && this.isStudent) {
            return console.log('You get a scholarship 1400 uah');
        } 
    }
}

const musk = new BudgetStudent('University of Pennsylvania', 5, 'Elon Musk', [5, 5, 5, 4]);
