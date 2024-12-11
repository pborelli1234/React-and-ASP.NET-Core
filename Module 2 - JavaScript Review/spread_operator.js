
// example 1

const sum = (a, b) => a + b;
const numbers = [4, 8];
const total = sum(...numbers);
// console.log(total);

// example 2

const moreNumbers = [1, ...numbers]; // [1, 4, 8]
const moreNumbers2 = [1, numbers]; // [1, [4, 8]]
const moreNumbers4 = [1, ...numbers, 9, 12];

// example 3

const otherNumbers = [2, 5];

const concatArrays = [...numbers, ...otherNumbers]; // [4, 8, 2, 5];

//for (let key of concatArrays)
    // console.log(key);


// example 4

const [first, ...theRemainingValues] = concatArrays;
console.log(first); // 4
console.log(theRemainingValues);

// example 5

const concatArraysCloned = [...concatArrays];

for (let key of concatArraysCloned)
    console.log(key);

// example 6

const person = {
    name: 'Taylor',
    lastname: 'Swift'
};

const person2 = {
    ...person,
    age: 32
};

//console.log(person2);

// example 7
const person4 = {...person2};
person4.name = 'Scott';

console.log(person2);
console.log(person4);

// example 8

const {age, ...person5} = person2;

console.log(age);
console.log(person5);