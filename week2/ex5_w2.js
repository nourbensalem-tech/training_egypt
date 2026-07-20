//version1
const grades = [8, 12, 15, 6, 10];

let sum = 0;

for (let i = 0; i < grades.length; i++) {

    if (grades[i] >= 10) {

        sum += grades[i] + 1;

    }

}

console.log(sum);

//version2 with filter and reduce

const grades = [8, 12, 15, 6, 10];

const total = grades
    .filter(grade => grade >= 10)
    .map(grade => grade + 1)
    .reduce((sum, grade) => sum + grade, 0);

console.log(total);