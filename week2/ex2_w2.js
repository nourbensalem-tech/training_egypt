//version1 
const ages = [15, 22, 17, 30, 18];

const adults = [];

for (let i = 0; i < ages.length; i++) {

    if (ages[i] >= 18) {
        adults.push(ages[i]);
    }

}

console.log(adults);

//version2 with filter

const ages = [15, 22, 17, 30, 18];

const adults = ages.filter(age => age >= 18);

console.log(adults);
