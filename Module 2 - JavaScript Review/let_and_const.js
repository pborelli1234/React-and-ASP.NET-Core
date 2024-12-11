let spanTag = document.querySelector('span');
let age = 999;
let birthDate = new Date(1990, 4, 19);

let person = {
    firstName: 'Brad',
    lastName: 'Pitt'
}

let duplicate = function(value) {
    return value * 2;
}

spanTag.innerHTML = birthDate;