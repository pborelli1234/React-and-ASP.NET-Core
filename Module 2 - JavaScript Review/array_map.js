// example 1

const numbers = [1,2,3,4,5];
const squares = numbers.map(value => value * value);

//for (let key of squares)
    //console.log(key);

// example 2

const people = [
    {id: 1, name: 'Felipe', country: 'DR'},
    {id: 2, name: 'Scott', country: 'USA'},
    {id: 3, name: 'Jennifer', country: 'Canada'}
];

const names = people.map(person => person.name);

//console.log(names);

//example 3

const divs = numbers.map(number => `<div>${number}</div>`);

console.log(divs);