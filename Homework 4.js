/* 1. Create a Rectangle class. Rectangle should have: length and width.
It should have getters and setters for all fields.
It should have getArea() method.
It should have getPerimeter() method.
It should have a toString method */

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        if (value < 0) {
            return `The length value cannot be negative`;
        } else {
            this._length = value;
        }
    }
    get width() {
        return this._width;
    }
    set width(value) {
        if (value < 0) {
            return `The length value cannot be negative`;
        } else {
            this._length = value;
        }
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
    toString() {
        return `We have a rectangle with length ${this.length} and width ${this.width}`;
    }
}
let shape = new Rectangle(5, 8);



/* 2. Create an object called shape that has the type property and a getType() method.
Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three properties — a, b, and c, representing the lengths of the sides of a triangle.
Add a new method to the prototype called getPerimeter()


> var t = new Triangle(1, 2, 3);
> t.constructor === Triangle;
       
true
> shape.isPrototypeOf(t);
        true
> t.getPerimeter();
       6
> t.getType();
       
"triangle" */


let shape = {
    type: "Triangle",
    getType: function() {
        return this.type;
    }
};
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};
let t = new Triangle(8, 3, 5);
t.constructor = Triangle;


/* 3. Create an Author class and a Book class.
Author should have: name, email, gender. 
It should have getters.
It should have a toString method.

Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
It should have a toString method. */

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get gender() {
        return this._gender;
    }
    toString() {
        return `The author of the book is ${this.name}`;
    }
}
class Book {
    constructor(title, classAuthor, price, quantity) {
        this. title = title;
        this.author = classAuthor;
        this.price = price;
        this.quantity = quantity;
    }
    get title() {
        return this._title;
    }
    set title(name) {
        this._title = name;
    }
    get author() {
        return Author._name;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value < 0) {
            return `The price cannot be negative`;
        } else {
            this._price = value;
        }
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        if (value < 0) {
            return `The price cannot be negative`;
        } else {
            this._price = value;
        }
    }
    getProfit() {
        return this.price * this.quantity;
    }
    toString() {
        return `The book is ${this.title}`;
    }
}
let author = new Author("Liana", "Liana-as90@rambler.ru", "female");
let book = new Book("Ete...", author, 5000, 100);


/* 4. What is output and why?
	 
function test (name) {
   this.fullName = `My name is ${name}`
   this.age = 5;
   return this.age;
}
	a) new test(’Some Name’);
    b) test('Some Name’) */
    

a) The output will be an object with fullName: "My name is Some Name" and age: 5, because it is a constructor function.
b) The output will be 5, because it calls test function, which returns the variable this.age, which value is 5.


/* 5.  What is output and why?
	 
function test (name) {
   this.fullName = `My name is ${name}`
   this.age = 5;
   return {
       age: this.age
   };
}

	a) new test(’Some Name’);
    b) test('Some Name’) */
    

a) The output will be an object with age: 5, as it is a constructor function that returns object with age property which valu is this.age, which is 5.
b) The output will also be an object with age: 5, as it calls test function which returns an object with age property which value is 5.


/* 6. What will be the output of the following code and why?


var Animal = function (name, type) {
   this.kind = name,
       this.breed = type
}

var playground = {
   animals: [],

   addAnimal(animal) {
       this.animals.push(animal);
   },

   listAnimalKind(kind) {
       this.animals.forEach(function (animal) {
           if (animal.kind == kind) {
               console.log(animal.breed);
           }
       });
   }
}

playground.addAnimal(new Animal('dog', 'Labrador'));
playground.addAnimal(new Animal('dog', 'Goldren Retriever'));
playground.addAnimal(new Animal('rabbit', 'Angola'));
playground.listAnimalKind('dog'); */

The output will be "Labrador" and "Goldren Retriever", as playground.listAnimalKind('dog') was called with dog argument, and 
according to our if condition the value of kind must be dog, so will be taken first and second objects, and will be printed 
their animal.breed.


/* 8. Write Car class, which have
properties:
	static finishPosition: number 
	name: string,
	 color: string(hashcode of color),
	 currentPosition: number(on start it equal to 0),
	 intervalPinter: number(setInterval pointer, that need for stopping interval)
	 speed: number(ex. 10, it means car can go 10px for 1 second),
methods:
	reset() -> it will reset currentPosition to 0
	start() -> it should update currentPosition value by speed each 300ms(with setInterval) and log it to console, if currentPosition equal or more then finishPosition, then call stop method
	stop() -> will stop interval and log`[name] car was finished`

set some finishPosition value for Car 
create 3 Cars with different parameters
create function that will start car competition */


class Car {
    constructor(name, color, currentPosition, intervalPinter, speed) {
        this.name = name;
        this.color = color;
        this.currentPosition = currentPosition;
        this.intervalPinter = intervalPinter;
        this.speed = speed;
    }
    static finishPosition = 500;
    reset() {
        return this.currentPosition = 0;
    }
    start() {
        if (this.currentPosition >= finishPosition) {
            return this.currentPosition = this.speed * 300;
        } 
    }
    stop() {
        return `${this.name} car was finished`;
    }
}
let bmw = new Car("BMW", "#FC3CFF", 50, 100, 8);
let mersedes = new Car("Mersedes", "#DFFF69", 80, 140, 10);
let mitsubishi = new Car("Mistsubishi", "#9BA0FF0", 110, 100, 9);

// 8. Write 7) with function prototype style
    
// 7 is partly and 8 isn't done, will add and send again.
    
    
    
   





