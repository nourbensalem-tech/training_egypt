//version1 
const numbers = [1, 2, 3, 4, 5, 6];
const result = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        result.push(numbers[i] * 10);
    }

}

console.log(result);

//version2 with filter and map
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 10);

console.log(result);
