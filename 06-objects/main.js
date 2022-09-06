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
const getSubjects = (obj) => {
    if (obj.hasOwnProperty('subjects')) {
        return Object.keys(obj['subjects']);
    }
}
console.log(getSubjects(students[0]));

// get average mark of student object
const getAverageMark = (obj) => {
    if (obj.hasOwnProperty('subjects')) {
        const marks = Object.values(obj['subjects']).flat();
        return +(marks.reduce((total, current) => ((total + current))) / marks.length).toFixed(2);
    }
}
console.log(getAverageMark(students[0]));

// get student info with average mark
const getStudentInfo = (obj) => {
        const modifiedObj = Object.keys(obj).sort().reduce((newObj, key) => {
            if (key === 'subjects') {
                Object.assign(newObj, {averageMark: getAverageMark(obj)})
            } else {
                newObj[key] = obj[key];
            }
        return newObj 
    }, {});
        return JSON.stringify(modifiedObj);
}
console.log(getStudentInfo(students[1]));

// get student name from array of student objects
const getStudentNames = (arrOfObj) => {
  const names = arrOfObj.map(obj => {
    if (obj.hasOwnProperty('name')) {
      return obj.name
    }
  });
  return names.sort();
}
console.log(getStudentNames(students));

// get student whose academic performance is the best
const getBestStudent = (arrOfObj) => {
  const bestStudent = arrOfObj.map(obj => {
    if (obj.hasOwnProperty('name') && obj.hasOwnProperty('subjects')) {
      return JSON.parse(getStudentInfo(obj)) 
    }
  });
  return bestStudent.reduce((prev,curr) => prev.averageMark > curr.averageMark ? prev.name : curr.name);
}
console.log(getBestStudent(students));

// letter counter 
const letterCounter = (str) => {
  return str.toLowerCase().split('').reduce((count, current) => (count[current] = count[current] + 1 || 1, count), {});
}
console.log(letterCounter('test'))