const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }

// JavaSxcript code demonstrating a simple objecct
// let school = {
//     name: 'Navy Secondary School',
//     location: 'Cross River State',
//     established: 2009,
//     displayInfo: function(){
//         console.log(`${school.name} was established in ${school.established} at ${school.location}`);
//     }
// }
// school.displayInfo();

// let school = {
//     name: 'Nigerian Navy',
//     location: 'Calabar',
//     established: '2009',
//     20: 1000,
//     displayInfo: function(){
//         console.log(`The value of the key 20 is ${school[20]}`);
//     }
// }
// school.displayInfo()

// Bracket notation
let school = {
    name: 'Secondary School',
    displayInfo: function(){
        console.log(`${school.name.split(' ')[0]}`);
    }
}
school.displayInfo();

// hasOwnProperty code in js
const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));  // True

// let person = {
//     gender: "Male"
// }

// let person1 = Object.create(person)
// person1.name = "Adam",
// person1.age = 45,
// person1.nationality = "Australian"

// for (let key in person1) {
//     console.log(key);
// }

// Deleting Properties
let obj1 = {
    propfirst: "Name"
}

// Output : Name
console.log(obj1.propfirst);
delete obj1.propfirst
// Output : Undefined
console.log(obj1.propfirst);

// let obj1 = {
//     propfirst: "Name"
// }

// Output : Nmae
// console.log(obj1.propfirst)
// let obj2 = Object.create(obj1);

// Output : Name
// console.log(obj2.propfirst);

// Output : true
// console.log(delete obj2.propfirst);

// Surprisingly Note that this will return true
// regarless of whether the deletion was successful

// output : Nmae
// console.log(obj2.propfirst);

// Object literal
// Defining object
// let person = {
//     first_name: 'Veritas',
//     last_name: 'Favour',

//     // method
//     getFunction: function() {
//         return (`The name of the person is ${person.first_name} ${person.last_name}`)
//     },
//     // object witin object
//     phone_number: {
//         mobile: '12345',
//         landline: '6789'
//     }
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);

// Using a Constructor
// function person(first_name, last_name) {
//     this.first_name = first_name;
//     this.last_name = last_name;
// }
// Creating new instances of person object
// let person1 = new person('veritas', 'Favour');
// let person2 = new person('Samuel', 'Louis');

// console.log(person1.first_name);
// console.log(`${person2.first_name} ${person2.last_name}`)

// object.create() example a simple object with a properties
// const coder = {
//     isStudying: false,
//     printIntroduction: function() {
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`)
//     }
// }
// Object.create() method
// const me = Object.create(coder);

// "name" is a property set on "me", but not "coder"
// me.name = "Samuel";

// Inherited properties can be overwritten
// me.isStudying = true;

// me.printIntroduction();

// Abstraction Example
function perso(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function() {
        return (`First name is: ${firstname}, Lastname is: ${lastname}`)
    }
    this.getDetails_access = function() {
        return (`First name is: ${firstname}, Lastname is: ${lastname}`)
    }
}
let person1 = new perso('Veritas', 'Favour');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access())

// Inheritance example
class person {
    constructor(name) {
        this.name = name;
    }
    // method to return the string
    toString() {
        return (`Name of person: ${this.name}`)
    }
}

class student extends person {
    constructor(name, id) {
        // super keyword for calling the above class constructor
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        student ID: ${this.id}`);
    }
}
let student1 = new student('Samuel', 22);
console.log(student1.toString());

let myObj = {
    // Integer Property
    int_prop: 5,

    // String Property
    str_prop: "Sammy",

    // Object Property (Date).
    obj_prop: new Date(),

    // Object Property
    inner_prop: {
        int_prop: 6
    },

    // Object Property
    func_prop: function() {
        console.log("Welcome to Day 26!");
    }
};

console.log(myObj.int_prop);
console.log(myObj.str_prop);
console.log(myObj.obj_prop.toLocaleTimeString());
console.log(myObj.inner_prop.int_prop);
myObj.func_prop();


// 4 ways of creating javaScript Ojects

// 1.
// Simple function
// function vehicle(name,maker,engine) {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }
// New keyword to create a object
// let car = new vehicle('GT', 'BMW', '1998cc');
// Property accessors
// console.log(car.name);
// console.log(car.maker);
// console.log(car['engine']);

// 2.
// Creating js objects with object literal
let car = {
    name: 'GT',
    maker: 'BMW',
    engine: '1998cc',
    start: function(){
        console.log('Starting the engine...');
    }
};
// Property accessor
// console.log(car.name); // dot notation
// console.log(car['maker']); // bracket notation
// Adding property to the object
// car.brakesType = 'All Disc';
// console.log(car);
car.start();
// Adding method stop() later to the object
car.stop = function() {
    console.log('Applying Brake...');
}
car.stop()


// Usng object.create() method
const coder = {
    isStudying: false,
    printIntroduction: function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder);
me.name = 'Nancy';
me.isStudying = true;
me.printIntroduction();

// Using es6 classes
class details {
    constructor(fname, lname, mname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
}
let identity = new details('Samuel', 'Onoh', 'Nnnamela');
console.log(identity.fname)