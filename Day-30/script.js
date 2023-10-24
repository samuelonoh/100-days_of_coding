// includes()
// let array = ["Hello", "Samuel", "fine"];
// console.log(array.includes("Samuel"));
// console.log(array.includes("React"));

// concat() 
let firstArray = ["Hello", "Sammy", "cool"];
let secondArray = ["React"];
let newArray = firstArray.concat(secondArray);
console.log(firstArray);
console.log(secondArray);
console.log(newArray)

// forEach()
// let array = ["Hello", "Joe", "John"];
// array.forEach(function (element) {
//     console.log(element)
// })

// sort()
let array = ["Hello", "Samuel", "Joe"];
console.log(array);
array.sort();
console.log(array);

// map()
let oldArray = [1, 2, 3, 4, 5];
console.log(oldArray);
let recentArray = oldArray.map (function (element) {
    return element * 5
});
console.log(recentArray);

// reduce()
console.log(oldArray);
let sumOfElement = oldArray.reduce(
    function (accumulator, element) {
        return accumulator + element;
    }
);
console.log(sumOfElement)

// filter()
console.log(oldArray)
let array1 = oldArray.filter(function (element) {
    return element % 2 === 0;
});
console.log(array1);

// find()
let arr = oldArray.find(function (element) {
    return element > 4
})
console.log(arr);

// findIndex() 
let findIndexValue = oldArray.findIndex(function (element) {
    return element >=4
});
console.log(findIndexValue)

// every()
let numbersGreaterThanZero = oldArray.every(function (element) {
    return element < 0
});
console.log(numbersGreaterThanZero)

// JavaScript Array Reference
// create and i nitialize an array
let items = ['Sam', 'Joe', 'Tom'];

//Display the array items
console.log(items);

// Create a new empty array
let new_Array = [];

// forEach loop to push elements into new array
items.forEach(function(item) {
    new_Array.push(item);
});

// Display the new array of items
console.log(new_Array);