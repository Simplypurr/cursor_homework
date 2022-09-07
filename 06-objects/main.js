const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];

// get subjects of student object
const getSubjects = (obj) => Object.keys(obj.subjects).map(item => item.slice(0, 1).toUpperCase() + item.slice(1).replace('_', ' '));
console.log(getSubjects(students[0]));

// get average mark of student object
const getAverageMark = (obj) => {
  const marks = Object.values(obj.subjects).flat();
  const result = +(marks.reduce((total, current) => ((total + current))) / marks.length).toFixed(2);
  return result;
}

console.log(getAverageMark(students[0]));

// get student info with average mark
const getStudentInfo = (obj) => {
  const modifiedObj = Object.keys(obj).sort().reduce((newObj, key) => {
    if (key === 'subjects') {
      Object.assign(newObj, { averageMark: getAverageMark(obj) });
    } else {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
  return modifiedObj;
}
console.log(getStudentInfo(students[1]));

// get student name from array of student objects
const getStudentNames = (arrOfObj) => arrOfObj.map(obj => obj.name).sort();
console.log(getStudentNames(students));

// get student whose academic performance is the best
const getBestStudent = (arrOfObj) => {
  const bestStudent = arrOfObj.map(obj => getStudentInfo(obj)).reduce((prev, curr) => prev.averageMark > curr.averageMark ? prev.name : curr.name);
  return bestStudent
}
console.log(getBestStudent(students));

// letter counter 
const letterCounter = (str) => str.toLowerCase().split('').reduce((count, current) => (count[current] = count[current] + 1 || 1, count), {});
console.log(letterCounter('test'))
