// create three arrays
const students = ["Олександр", "Ігор", "Олена", "Марія", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// create a function which makes a pairs nested array
function getPairs(arr) {
    const maleStudents = [];
    const femaleStudents = [];
    for (const item of arr) {
        item.endsWith('а')|| item.endsWith('я') ? femaleStudents.push(item) : maleStudents.push(item); 
    }
    const studentsInPairs = maleStudents.map((item, index) => [`${item} i ${femaleStudents[index]}`]);
    return studentsInPairs;
}

// create a function which determines a topic for students in pairs
function topicPicker(arr, studentPairs) {
    const topicsAndPairs = studentPairs.flat().map((item, index) => [item, arr[index]]);
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
function getRandomGrade(arr) {
    const randomGrade = arr.map((item) => [item]);
    const minGrade = 2;
    const maxGrade = 5;
    for (let i = 0; i < arr.length; i++) {
        randomGrade[i].push(getRandomNumber(minGrade,maxGrade))
    }
    return randomGrade;
}

// random function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const studentPairs = getPairs(students);
const topicsAndPairs = topicPicker(themes, studentPairs);
const studentsGrade = getGrade(students, marks);
const randomPairsGrade = getRandomGrade(topicsAndPairs);

document.writeln(`<ul><li>${studentPairs}</li>
                    <li>${topicsAndPairs}</li>
                    <li>${studentsGrade}</li>
                    <li>${randomPairsGrade}</li></ul>`);