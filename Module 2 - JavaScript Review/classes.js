class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        console.log(`The area of the rectangle is ${this.height * this.width}.`)
    }
}

const rectangle1 = new Rectangle(100, 70);
const rectangle2 = new Rectangle(7, 2);

// console.log(rectangle1.height);

rectangle1.area();

// overwrite area function
rectangle2.area = function() { console.log('new implementation ' + this.height); }

rectangle2.area();

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

const square1 = new Square(7);
square1.area();