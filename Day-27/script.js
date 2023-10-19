// JavaScript Object Notation (JSON)

// myOrder = {};

// myOrder = {
//     "name of product" : "earbuds",
//     "cost" : "789",
//     "warranty" : "1 year"
// };

// let myOrder, i;

// Object is created with ame myOrder
// myOrder = {
//     "name_of_the_product" : "Earbuds",
//     "cost" : "798",
//     "warranty": "1 year"
// };

// Accessing for partcular detail from object myOrder
// i = myOrder.name_of_the_product;

// It prints the detail of name of the product
// console.log(i);

// let myOrder, i;

// myOrder = {
//     "name_of_the_product" : "Earbuds",
//     "cost" : "798",
//     "warranty": "1 year"
// }

// Accessing objects using [] notation
// i = myOrder["name_of_the_product"];

// console.log(i)

// myOrder = {
//     "name of product" : "earbuds",
//     "cost" : "799",
//     "warranty" : {
//         "warranty1" : "6 months",
//         "warranty2" : "12 months"
//     }
// }

// i = myOrder.warranty.warranty2;
// console.log(i);

// Modify values of object
// myOrder.warranty.warranty1 = "10 months"
// i = myOrder.warranty.warranty1
// console.log(i)

// delete
// delete myOrder.warranty.warranty2;
// console.log(myOrder.warranty)

// Looping

let myOrder, a;

myOrder = {
    "name of product": "earbuds",
    "cost": "799",
    "warranty": "1 year"
};
// Keys...
for (a in myOrder) {
    console.log(a)
}
// Values......
for (a in myOrder) {
    console.log(myOrder[a])
}

// Object reference
// Object creation
let student = {
    name: "Sammy",
    class: "10th",
    section: "A",

    studentDetails: function() {
        return this.name + " " + this.class + " " + this.section + " ";
    }
};

// Display object data
console.log("STUDENT: " + student.studentDetails());


// assign()
// creating 3 object constructors and assigning values to it
let obj1 = { a: 10 };
let obj2 = { b: 20 };
let obj3 = { c: 30 };

// creating a target object and copying values and properties to it using object.assign() method
let new_obj = Object.assign({}, obj1, obj2, obj3);

// Displaying the target object
console.log(new_obj);

//create()
// creating a function which be the prototype for the object to be created later
function fruits() {
    this.name = 'fruit 1';
}

// creating a function to whose object will inherit properties from the prototype using object.create() method
function apple() {
    fruits.call(this);
}

// creating an object of the apple function which will have properties of the prototype object i.e fruits
apple.prototype = Object.create(fruits.prototype);
const app = new apple();

// Displaying the created object
console.log(app.name);