// function simpleFunc(paramA, paramB) {
    // Set of statements
// }

// Functon declaration
function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2);  // Calling the function
console.log(value);

function calcAddition(number1, number2) {
    return number1 + number2;
}
console.log(calcAddition(6, 9))

// Function Expression
// const square = function(number) {
//     return number * number;
// };
// const x = square(4) // x gets the value 16
// console.log(x);

// Arrow Function
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log("Normal way", a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function", a3); // [8, 6, 7, 9]

// Function Parameters
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}
console.log(multiply(69));

// Calling Functions
function welcomeMsg(name) {
    return ("Hello " + name + "," + " welcome to my Dashboard")
}

// creating a variable
let nameVal = "John";


// calling the function
// console.log(welcomeMsg(nameVal))

// function welcome() {
//     console.log("Welcome to the game")
// }

// Function calling
// welcome()

// function welcome(name) {
//     console.log("Hey " + name + ", " + "welcome to the game")
// }

// Passing arguments
// welcome("Sammy");

// function welcome() {
    // Return statement
//     return "Welcome to the game"
// }

// console.log(welcome())

// let welcome = function(){
//     return "welcome to the challenge"
// }
// let code = welcome();
// console.log(code)

// Named function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 4))

//Anonymous function
let add = function(a, b){
    return a + b;
}
console.log(add(5, 4))

// Nested function
// function msg(firstName) {
//     function hey() {
//         console.log("Hey " + firstName);
//     }
//     return hey();
// }
// msg("Sam");

// Immediately-invoked function expression
let msg = (function() {
    return "Welcome to the challenge";
})();

console.log(msg)

// Function call
// function that returns product of two numbers
function product(a, b) {
    return a * b;
}

// calling product() 
let result = product.call(this, 20, 5)
console.log(result)

let employee = {
    details: function (designation, experience) {
        return this.name
        + " "
        + this.id
        + " "
        + designation
        + " "
        +experience;
    }
}
// Object declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let x = employee.details.call(emp2, "Manager", "4 years");
console.log(x)

//
let obj = {a: 12, b: 13};
function sum() {
    return this.a + this.b;
}
console.log(sum.call(obj));