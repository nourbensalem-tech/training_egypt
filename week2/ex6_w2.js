//version1 
const numbers = [5, 10, 15];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

    sum += numbers[i];

}

console.log(sum);

//version2 with reduce

const numbers = [5, 10, 15];

const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum);