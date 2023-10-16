// Get rid of unnecessary loops and calls made inside loops.
// 
// Array push() pop() and shift() instructions have minimal processing overhead due to being language constructs closely related to their low-level assembly language counterparts.



// push() method
let animals = ["Tiger", "Giraffe", "Horse", "Deer"];
animals.push("Zebra");
console.log(animals);

// pop() method
let cars = ["Audi", "Benz", "Mercedes", "Lamborgini"];
cars.pop();
console.log(cars);

// shift() method
let subjects = ["Programming", "Algebra", "Statistics", "Database", "Calculus"];
subjects.shift();
console.log(subjects);

// Use the local scope ('this')
const person = {
    name: "Samuel",
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
setTimeout(function() {
    // person.greet()
    person.greet.call(person)
    // person.greet.apply(person)
}, 1000);

// Debugging session
// Using console.log
i = "Where do you work?"
j = "I work at Google"
console.log(i);
console.log(j);

// let final = document.getElementById('test')

// const x = 20;
// const y = 5;
// const z = x * y;
// debugger;
// final.innerHTML = z;

// JavaScript Errors Throw and Try to Catch
try {
    dadalert("Welcome Sammy!")
}
catch (err){
    console.log(err);
}

function func() {
    let a = 10;
    try {
        console.log("Value of variable a is :" + a);
    }
    // There's no error, catch won't work
    catch (e) {
        console.log("Error: " + e.description);
    }
}
func();

try {
    throw new Error('Yeah... Sorry');
}
catch (e) {
    console.log(e);
}

try {
    console.log('try');
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}