let person = {
    firstName: 'Matt',
    lastName: 'Damon',
    age: 48,
    currentDate: new Date()
};

//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;

const {firstName, lastName, age} = person;

console.log(`${firstName} ${lastName}`);

getAddress = () => {
    return  {
        street: 'street 1',
        country: 'country 1',
        state: 'state 1'
    }
}

const {street, country} = getAddress();

console.log(`${street}, ${country}`);

//destructure parameter of function

printName = (person) => {
    console.log(person.firstName);
}

printName2 = ({firstName}) => {
    console.log(firstName);
}

printName2(person);

const arr = [1,2,3,4];

for(let key of arr)
    console.log(key);

const [first, second, fourth] = arr;

console.log(second);