//version1
const numbers = [10,20,30,40];

let sum = 0;

for(let i=0;i<numbers.length;i++){

    sum += numbers[i];

}

console.log(sum);

//version2 with reduce

const numbers = [10,20,30,40];

const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum);
