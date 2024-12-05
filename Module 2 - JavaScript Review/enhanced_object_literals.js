let lastname = 'Gavilan';
lastname = 'Damon';
let age = 48;
let date = new Date();

let propertyName = 'country';
let propertyValue = 'Mexico';

let person = {
    [propertyName]: propertyValue,
    firstname: 'Matt',
    lastname,
    age,
    date: new Date(),
    normalFunction() {
        console.log(this.firstname + ' ' + this.lastname)
    },
    arrowFunction: () => {
        console.log(`This is a test person ${person.firstname} and ${person.lastname}`);
    }
}

console.log(person.age);
console.log(person.normalFunction());
console.log(person.arrowFunction());
console.log(person[propertyName]);

returnValueFromPerson = (prop) => person[prop];

console.log(returnValueFromPerson('lastname'));