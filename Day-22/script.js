// Addition Operator
let a = 1 + 2
console.log("a = " + a);

// Subtraction Operator
let b = 10 - 7
console.log("b = " + b);

// Multiplication Operator
let c = 3 * 3
console.log("c = " + c);

// Division Operator
let d = 1.0 / 2.0
console.log("d = " + d);

// Modulas Operator
let e = 9 %  5
console.log("e = " + e);

// Exponentian Operator
let f = 2 ** 5
console.log("f = " + f);

// Increment Operator
let g = 2;
g1 = g++;
console.log("g = " + g)

// Decrement Operator
let h = 2;
h1 = h--;
console.log("h = " + h)

// Unary plus Operator
let i = 3;
i1 = +i;
console.log("i1 = " + i1);

// Negation Operator
let j = 3;
j1 = -j;
console.log("j1 = " +j1)

// Assignment Operator
let k = 2;
console.log(k);

// Addition Assignment Operator
const l = 3;
console.log( k = l+ 1);

// Subtraction Assignment Operator
let yoo = 4;
console.log(foo = yoo-1);

// Multiplication Assignment
console.log(yoo = yoo*2);

// Division Assignment Operator
const moo = 2;
console.log(yo = yoo/moo);
// Modulas Assignment Operator
console.log(yoo %= 2);

// Exponentan Assignment Operator
console.log(yoo**moo);

// Left Shift Assignment
console.log(yoo <<= 2);

// Right shift Assignment
console.log(yoo >> 2);

// Bitwise AND Assignment
console.log(yoo &= 2);

// Bitwise OR Assignment
console.log(yoo |= 2);

// Bitwise XOR Assignment
console.log(yoo ^= 2);

// Assigning values 
let car1 = 5;
let car2 = 5;
// Equality Operator
console.log(car1 == car2);

// Strict equality Operator
console.log(car1 === car2);

// Inequality Operator
console.log(car1 != car2);

// Strictly Inequality Operator
console.log(car1 !== car2);

// Greater than Operator
console.log(car1 > car2);

// Greater than or equal Operator
console.log(car1 >= car2);

// Less than Operator
console.log(car1 < car2)

// Less than or equal Operator
console.log(car1 <= car2)

// Assigning values
opera1 = 7;
opera2 = 7;

// Logical !(NOT) Operator
console.log("Opera = " + !opera2);

// Logical &&(AND) Operator
console.log(opera1 && opera2);

// Logical ||(OR) Operator
console.log(opera1 || opera2);

// Bitwise
// AND(&)
a1 = 6, a2= 1;
console.log(a1 & a2)

// OR (|)
console.log(a1 | a2 )

// XOR (^)
console.log(a1 ^ a2)

// NOT(~)
console.log(~a1)

// Left Shift (<<)
console.log(a1 << a2)

// Right Shift (>>)
console.log(a1 >> a2)

// Zero Fill right Shift (>>>)
console.log(a1 >>> a2)

// Y = ? A : B
// If the condition is true then Y = A otherwise Y = B

// Assigning
let marks = 40

// Ternary Operator
let result = (marks > 39) ? "Pass" : "Fail";
console.log(result)

// Assigning 


console.log('Type of a = ' + (typeof 'ron1'));
console.log('Type of a = ' + (typeof 25));
console.log('Type of a = ' + (typeof variable));

// Delete Operator
let emp = {
    firstame: "Samuel",
    lastName: "Onoh",
    salary: 50000
};
console.log(emp);
console.log(delete emp.salary);
console.log(emp);

let person = {
    firstName: "Mark",
    lastName: "Joe",
    phone: 12345
};
console.log(person);
console.log(delete person.phone);
console.log(person);

let num = 5;
let sum = (num1, num2) => {
    return num1 + num2
}
console.log(num)
console.log(delete num)

console.log(sum) //function:sum
console.log(delete sum)

let arr = [1, 2, 3]
console.log(delete arr[0]); // true
console.log(arr); // [empty, 2, 3]

//  Comma Operator
function func1(){
    console.log('one');
    return 'one'
}

function func2(){
    console.log('two');
    return 'two';
}

function func3() {
    console.log('three');
    return 'three';
}

// Three expressions are given at one place
let x = (func1(), func2(), func3())
console.log(x)

// Javascript in Operator
// prop in object

function tradeMark() {
    // Illusration of in operator
    const array = [
        'love', 'for', 'all'
    ]
    
    // Output of the indexed number
    console.log(0 in array);

    // Output of the Value
    console.log('for' in array);

    // Output of the Array property
    console.log('length' in array);
}

tradeMark();

// Illustration
const object = {
    tom1: "Let's",
    tom2: "keep",
    tom3: "it",
    tom4: "going"
};
console.log('tom1' in object);

delete object.tom1;
console.log('tom1' in object);

if ('vali' in object === false) {
    object.tom1 = 'welldone'
}
console.log(object.tom1);

// Grouping Operator
// 3 * (2 + 3)
let value1 = 3 * (2 + 3);
console.log(value1)
