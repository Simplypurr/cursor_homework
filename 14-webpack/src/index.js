import { getMaxDigit } from "../../03-functions/main";
import "../src/scss/main.scss";
import { studentsArr, getPairs } from "../../04-arrays/main";
import { getMode } from "../../05-array-iteration/main";
import { getSubjects, students } from "../../06-objects/main";
import { getMyTaxes, ukraine, lithuania, latvia } from "../../07-functional-programming/main";
import { Student } from "../../08-Prototypes-and-classes/main";
import { generateBlock } from "../../09-DOM/main";
import { getRandomChinese } from "../../11-Promises-and-date/js/main";
import bg from "./assets/bg-image.jpg";


console.log(getRandomChinese(4))
const student = new Student('University of Pennsylvania', 5, 'Elon Musk', [5, 5, 5, 4]);


const funcContainer = document.getElementById('func');

funcContainer.innerHTML = `<div>${student.getStudentInfo()}</div>
                        <div>Max digit from 12345252 - ${getMaxDigit('12345252')}</div>
                        <div>Mode from 1,2,3,4,2,21,2 - ${getMode(1,2,3,4,2,21,2)}</div>
                        <div>Get pairs from Students: ${studentsArr} => ${getPairs(studentsArr)} </div>
                        <div>Get subjects: ${getSubjects(students[0])}</div>
                        <div>Get salary taxes from 3000$ for Ukraine: ${getMyTaxes.call(ukraine, 3000)}$</div>
                        <div>Get random chinese symbols: ${await getRandomChinese(4)}</div>`
generateBlock(5)