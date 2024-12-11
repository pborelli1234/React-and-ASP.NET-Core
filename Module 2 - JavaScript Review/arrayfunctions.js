let span = document.querySelector('span');

let duplicate = function(value) {
    return value * 2;
}

// arrow function - does does same
let duplicate_arrow = (value) => value * 2;

let duplicate_arrow2 = value => {
    return value * 2
}

let printSomething = () => console.log('something');

let addition = (value1, value2) => value1 + value2;

//span.innerHTML = duplicate_arrow(4);

span.innerHTML = addition(10, 4);

//difference with this keyword

const obj = {
    traditionalFunction: function() {
        console.log('traditional function', this);
    },
    arrowFunction: () => {
        console.log('arrow function', this);     
    },
    lastName: 'Cronje'
}

console.log('this environment', this);
obj.traditionalFunction();
obj.arrowFunction();