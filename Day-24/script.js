// declaring object
const courses = {
    firstCourse: "JavaScript",
    secondCourse: "Python",
    thirdCourse: "SQL"
};
let value = "";

for (keys in courses) {
    value += courses[keys] + " "; 
}

console.log(value);

// Example 2
// for...of loop

// Array of numbers
let numArray = [1, 4, 16, 25, 49];
console.log("Element of numArray are->");
for (let value of numArray) {
    console.log(value)
}

// string object
let st = "samuel";

for (let value of st)  {
    console.log(value);
}

// Iterating over argument objects
function son() {
    for (let value of arguments) {
        console.log(value);
    }
}

// Iterating over all arguments passed through the function
son("Samuel", "Onoh", "Nnamela");

// Map is an object that takes key-value pair as input
let mapObject = new Map([
    ["Samuel", 1],
    ["Onoh", 2],
    ["Nnamela", 3],
]);

console.log("Display of key-Value Pair->")
for (const entry of mapObject) {
    console.log(entry)
}

console.log("Display of Value only->")
for (const [key, value] of mapObject) {
    console.log(value);
}

console.log("Display of Key only->")
for (const [key, value] of mapObject) {
    console.log(key);
}