// create three arrays
const students = ["Олександр", "Ігор", "Олена", "Марія", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// create a function which makes a pairs nested array
function getPairs(arr) {
    const studentsInPairs = [];
    const maleStudents = [];
    const femaleStudents = [];
    // gender divider
    for (let i = 0; i < arr.length; i++) {
        (arr[i].endsWith("а") || arr[i].endsWith("я")) ? femaleStudents.push(arr[i]) : maleStudents.push(arr[i]);
    }
    // create pairs 
    for (let i = 0; i < maleStudents.length; i++) {
        studentsInPairs.push(new Array(maleStudents[i], femaleStudents[i]));
    }
    return studentsInPairs;
}

// create a function which determines a topic for students in pairs
function topicPicker(arr) {
    const topicsAndPairs = getPairs(students);
    for (let i = 0; i < topicsAndPairs.length; i++) {
        topicsAndPairs[i].push(arr[i]);
    }
    return topicsAndPairs;
}

// create a function which applies a grade for each student in array
function getGrade(students, marks) {
    const studentsGrade = [];
    for (let i = 0; i < students.length; i++) {
        studentsGrade.push(new Array(students[i], marks[i]))
    }
    return studentsGrade;
}

// create a function which applies a random grade for each pair of students
function getRandomGrade(arr){
    const randomGrade = Array.from(topicPicker(themes));
    for (let i = 0; i < arr.length; i++) {
        randomGrade[i].push(getRandomNumber(1,5))
    }
    return randomGrade;
}
// random function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const studentsInPairs = getPairs(students);
const topicsAndPairs = topicPicker(themes, students);
const studentsGrade = getGrade(students, marks);
const randomPairsGrade = getRandomGrade(topicsAndPairs);
document.writeln(`<ul><li>${studentsInPairs}</li>
                    <li>${topicsAndPairs}</li>
                    <li>${studentsGrade}</li>
                    <li>${randomPairsGrade}</li></ul>`);