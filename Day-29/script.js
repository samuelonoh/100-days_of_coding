// let arrayName = [value1, value2, ...];

// Initializing while declaring
// let courses = ["HTML", "CSS", "JavaScript", "React"];
// console.log(courses)

// let arrayName = new Array();

// Intializing wile declaring
let arr1 = new Array(3)
arr1[0] = 10
arr1[1] = 20
arr1[2] = 30
console.log("Array 1: ", arr1)

// Creates an array having elements 10, 20, 30, 40, 50
let arr2 = new Array(10, 20, 30, 40, 50);
console.log("Array 2: ", arr2)

// Create an array of 5 undefined elements
let arr3 = new Array(5);
console.log("Array 3: ", arr3)

// Creates an array with one element
let arr4 = new Array("1BHK");
console.log("Array 4: ", arr4)

// Accessing Elements of an Array
const courses = ["HTML", "CSS", "JavaScript"];
console.log(courses[0])
console.log(courses[1])
console.log(courses[2])
// Changing an element
courses[1] = "Statistics"
console.log(courses)

// Convert an Array to String
console.log(courses.toString())

// Increse and Decreasing of an Array
courses.length = 5
console.log("Array after increased length: ",courses)

courses.length = 2
console.log("Array after decreased length: ", courses);

// Loop through an Array Element
// const topics = ["Challenge", "Code", "Algebra"];
// for (let i = 0; i < topics.length; i++) {
//     console.log(topics[i])
// }

// forEach
const topics = ["Challenge", "Code", "Algebra"];
topics.forEach(myfunc);
function myfunc(elements) {
    console.log(elements)
}
// Adding new element
// topics.push("React");
// console.log("Array after an element: ", topics)
topics[topics.length] = "React"
console.log("Array after an element: ", topics)

// type
console.log(typeof topics) // Object

// Recognizing a Array
console.log("Using Array.isArray() method: ", Array.isArray(topics))  // true
console.log("Using instanceof method: ",courses instanceof Array)  // true

// Basic Array methods

// Unshift()
let number_arr = [20, 30, 40]
number_arr.unshift(10, 20)
console.log(number_arr) // [ 10, 20, 20, 30, 40 ]

// pop()
number_arr.pop()
console.log(number_arr) //[ 10, 20, 20, 30 ]

// shift()
number_arr.shift();
console.log(number_arr)  // [ 20, 20, 30 ]

// splice()
// Array.splice (start, deleteCount, item 1, item 2….) 
// deletes 3 elements starting from 1
// number array contains [20, 30]
number_arr.splice(0,1)
console.log(number_arr)

// dosen't delete but inserts 3, 4, 5
// at starting location 1
number_arr.splice(1, 0, 5, 6, 7, 8)
console.log(number_arr) // [ 20, 5, 6, 7, 8, 30 ]

// deletes two elements starting from index 1
// and add three elements.
number_arr.splice(1, 2, 100, 200, 300)
console.log(number_arr)  // [
//     20, 100, 200, 300,
//      7,   8,  30
//   ]

// slice()
const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// case 1: Etract the first 3 elements of the array
const case1 = originalArr.slice(0, 3);
console.log(case1)

//case 2: Extract the last 3 elements of the array
const case2 = originalArr.slice(-3)
console.log(case2)


// some()
// This method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.
function isGreaterThan5(element, index, array) {
    return element > 5;
}

function func() {
    // Original array
    let array = [2, 5, 8, 1, 4];

    // checking for condition in array
    let value = array.some(isGreaterThan5);

    console.log(value);
}

func();

// map
let numbers = [4, 9, 16, 25]

let sub = numbers.map(Math.sqrt);

console.log(sub)