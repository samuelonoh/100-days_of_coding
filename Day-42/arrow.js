let Array = [23, 45, 3, 7, 10, 56, 67, 100, 23]

// 1.
const map = Array.map((x) => {
    return x * 2
})
console.log(map);

// 2.
const map1 = Array.map((x) => x * 3)
console.log(map1)

// 3.
const map2 = Array.map(x => x * 4)
console.log(map2)


// 1.
const reduce = Array.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber
})
console.log(reduce)

// 2.
const reduce1 = Array.reduce((accumulator, currentNumber) => accumulator - currentNumber)
console.log(reduce1)

// filter
// 1.
const filter = Array.filter((x) => {
    return x < 100
})
console.log(filter)

// 2.
const filter1 = Array.filter((x) => x === 100)
console.log(filter1)

// 3.
const filter2 = Array.filter(x => x < 10)
console.log(filter2)