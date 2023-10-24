let str1 = "Welcome to the hub";
let str2 = new String("Welcome Samuel");

console.log(str1)
console.log(str2)

function func() {
    console.log("SON".length)
}

func()

// String Method
// slice()
let A = "Sammy is always happy";
b = A.slice(0,5);
c = A.slice(6,9);
d = A.slice(9)

console.log(b);
console.log(c);
console.log(d);

// replace(replaceValue, rep[laceWithValue])
let str = "Mind, Power, Soul";
let part = str.replace("Power", "Space")
console.log(part);

// replaceAll(regexp | substr, newSubstr | function)
let str3 = "Mind, Power, Power, Soul";
let part1 = str3.replaceAll("Power", "Space")
console.log(part1)

// to UpperCase(stringVariable)
let son = 'SON '
let sammy = 'stands-for-SamuelOnohNnamela'
console.log(sammy.toUpperCase(sammy));

// toLowerCase(stringVariable)
console.log(sammy.toLowerCase(sammy))

// concat(objectOfString)
console.log(son)
console.log(sammy)
console.log(son.concat(sammy))

// trim() - removes white spaces
let name1 = "Samuel    "
let newName = name1.trim()
console.log(newName)
console.log(newName.length)

// trimStart()
let string1 = "   Soul"
console.log(string1)
let newString1 = string1.trimStart()
console.log(newString1)

// trimEnd()
let string2 = "Soul   "
console.log(string2.length)
let newString2 = string2.trimEnd().length
console.log(newString2)

// padStart
let stone = "soul";
stone = stone.padStart(9, "Mind ")
console.log(stone)

// padEnd
let stone1 = "soul";
stone1 = stone1.padEnd(10, " Power");
console.log(stone1);

// charAt(indexOfCharacter)
let profile = "Samuel is always job ready"
console.log(profile.charAt(0))
console.log(profile.charAt(7))

// charCodeAt(indexOfCharacter) - It returns a number that represents the Unicode value of the character at the specified index
let profile1 = "Samuel is always ready"
console.log(profile.charCodeAt(0))  // S
console.log(profile.charCodeAt(8))  // s

// split(character)
let pro = "Samuel-is-always-job-ready"

// split on '-',
console.log(pro.split('-'))

//  JAVACRIPT STRING REFERENCE
function stringLength() {
    const str = "sammy";

    console.log("string Length: " + str.length);
}
stringLength()


// JAVASCRIPT NUMBERS
// Decimal Numbers
console.log(323);

// Binary Numbers
console.log(0b11)   // 3
console.log(0B0111)   // 7

// Hexadecimal Numbers
console.log(0xfff)    // 4095

// Octal Numbers
console.log(0o562)   // 370

let x = 21
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));

// Bengali (Bangladeshi) locale
console.log(x.toLocaleString("bn-BD"))

// Number Reference
function func() {
    // Original string
    let a = false
    let value = Number(a);
    console.log(value);
}
func()