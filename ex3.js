let students = [
{name:"Ali",grade:15},
{name:"Sara",grade:8},
{name:"Nour",grade:18},
{name:"Ahmed",grade:11}
]

let passed = students.filter(student => student.grade >= 10);
console.log(passed);

let names = passed.map(student => student.name);
console.log(names);


const average =
students.reduce((sum, student) => sum + student.grade,0)
/students.length;

console.log(average);
