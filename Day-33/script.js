// Set in JavaScript
let set1 = new Set(["sumit", "sumit", "amit", "amil", "anish"])
console.log(set1);

let set = new Set("foooooooood")
console.log(set)

let set3 = new Set([10, 20, 30, 30, 40, 40])
console.log(set3)
console.log(set3.size)

let set4 = new Set();
set4.add(10)
set4.add(20)
set4.add(1).add(2).add(3)
console.log(set4)

set4.delete(10)
console.log(set4)

set4.clear()
console.log(set4)
console.log(set3);

// using entries to get iterator
let getEntryArray = set3.entries()
// each iterator is array of [value, value]
console.log(getEntryArray.next().value)
console.log(getEntryArray.next().value)
console.log(getEntryArray.next().value)

//set.has(value)
console.log(set3.has(50))
console.log(set3.values())
console.log(set3.keys())


let getit = set3[Symbol.iterator]()
console.log(getit.next())

// subset()
Set.prototype.subSet = function(otherSet){
    // if size of this set is greater
    // than otherSet them it can't be a subset
    if(this.size > otherSet.size)
    return false;
else{
    for(let elem of this)
    {
        // if any of the element of this is not present in the otherset thenfalse
        if(!otherSet.has(elem))
        return false;
    }
    return true;
}
}

// Usimg the subset function
// Declaring different sets
let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);

console.log(setA.subSet(setB));
console.log(setA.subSet(setC));
console.log(setC.subSet(setB));

// union () method
Set.prototype.union = function(otherSet)
{
    // Creating new set to store union
    let unionSet = new Set();

    // iterate over the values and add it to unionSet
    for (let elem of this)
    {
        unionSet.add(elem)
    }
    // iterate over the values and add it to the unionSet
    for(let elem of otherSet)
    unionSet.add(elem);

    // return the values of unionSet
    return unionSet;
}

// Using the uion function 
// Declaring values for set1 and set2
let set5 = new Set([10, 20, 30, 40, 50]);
let set6 = new Set([40, 50, 60, 70, 80]);

// Performing union operation and storing this resultant set in unionSet
let unionSet = set5.union(set6);
console.log(unionSet.values())

// Intersection() method
Set.prototype.intersection = function(otherSet)
{
    // creating new set to store intersection
    let intersectionSet = new Set();

    // iterate over the values
    for(let elem of otherSet)
    {
        // if the other set contains a asimilar value as of value[i] then add it to intersectionSet
        if(this.has(elem))
        intersectionSet.add(elem);
    }

    // return values of intersectionSet
    return intersectionSet;
}

// Using intersectionSet function
// Declaring values for set7 and set8
let set7 = new Set([10, 20, 30, 40, 50]);
let set8 = new Set([40, 50, 60, 70, 80]);

// performing union operation and storing the resultant set in intersectionSet
let intersectionSet = set7.intersection(set8);
console.log(intersectionSet.values());

//difference() method
Set.prototype.difference = function(otherSet){
    // creating new set to store difference
    let differenceSet = new Set();

    // iterate over the values
    for (let elem of this){
        // If the value[i] is not present in otherSet add to the differenceSet
        if(!otherSet.has(elem))
        differenceSet.add(elem);
    }

    // return values of differenceSet
    return differenceSet;
}

// using difference function
// Declaring values for set9 and set10
let set9 = new Set([10, 20, 30, 40, 50])
let set10 = new Set([40, 50, 60, 70, 80]);

// performing union operation and storing the resultant set in intersectionSet
let differenceSet = set9.difference(set10);

console.log(differenceSet);

// Set reference
const mySet = new Set();
mySet.add("California");
mySet.add("India");
mySet.add("Califoria");
mySet.add(10);
mySet.add(10);

const myObject = {a: 1, a: 5};

mySet.add(myObject);

console.log(mySet)