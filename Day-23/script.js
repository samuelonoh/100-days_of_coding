// Iterative 
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

// Using For Loop
// for (initialization; testing condition; increment/decrement) {
    // statement(s) 
// }
// console.log("Using Loops >>>>>>>>>>>>>>")
// for (let i = 0; i < 10; i++) {
//     console.log("Hello World!")
// }

// for (let i = -5; i <= 0; i++) {
//     console.log(i)
// }

// Javascript program to illustrate for loop
let x;

// for loop begins when x = 2
// and runs till x <= 4
for (x = 2; x <= 4; x++) {
    console.log("values of x:" + x)
}

// let x = 2;
// for (;x <= 4; x++) {
//     console.log("values of x:" + x)
// }
const subjects = ["Maths", "Science", "Politics", "History"];
let i = 0;
let len = subjects.length;
let foo = "";
for (; i < len;) {
    foo += subjects[i + ''];
    // can be increade inside loop
    i++;
}
console.log(foo)

// for/in loop
function SON() {
    let fullName = {fname: "Samuel", Mname: "Onoh", lname: "Nnamela"}
    let display = "";
    let x;
    for (x in fullName) {
        display += fullName[x] + " ";
    }
    console.log(display);
}
SON()
// Samuel Onoh Nnamela




// Using While loop
// while (boolean condition)
//     loops statements....
// console.log("while loops >>>>>>>>>>>>>>>>")
// let i = 0;
// while (i < 6) {
//     console.log(i);
//     i++;
// }

// JavaScript code to use while loop
let val = 1;
while (val < 6) {
    console.log(val);
    val += 1;
}



// Using do-wile loop
// do {
// statements.....
// }
// while (condition);
console.log("Using do-while loop >>>>>>>>>>>>>")
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 7);

console.log("Example 2")
let val1 = 1;

do {
    console.log(val1);
    val1 += 1;
} while (val1 < 10);




// for-in loop
console.log("for-in loop >>>>>>>>>>>>>>")
const obj = {a: 1, b: 4, c: 7};
for (let prop in obj) {
    console.log(prop + ': ' + obj[prop]);
}

// for-of Loop
const arr1 = [1, 2, 3];
for (let values of arr1) {
    console.log(values);
}

// forEach loop
console.log("forEach Loop >>>>>>>>>>>>>>>>")
const arr2 = [1, 2, 3];
arr2.forEach(val => console.log(val));

// Map loop
console.log("Map loop >>>>>>>>>>>>>>>>>>>>")
const arr3 = [1, 2, 3];
const newArr = arr3.map(values => values * 2);
console.log(newArr);