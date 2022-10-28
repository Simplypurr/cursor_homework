import { getMaxDigit } from "../../03-functions/main";
import "../scss/main.scss"
import { studentsArr, getPairs } from "../../04-arrays/main";
import { getMode } from "../../05-array-iteration/main";
import { getSubjects, students } from "../../06-objects/main";
import { getMyTaxes, ukraine, lithuania, latvia } from "../../07-functional-programming/main";

console.log(getMaxDigit('123213'));
console.log(getMode(1,2,3,3,2,2,4,1,4,1,43,554,3,2,1));
console.log(getPairs(studentsArr));
console.log(getSubjects(students[0]));
console.log(getMyTaxes.call(ukraine, 3000));