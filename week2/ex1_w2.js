//version1
const numbers = [1, 2, 3, 4, 5];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

console.log(doubled);

//version2 with map

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

console.log(doubled);