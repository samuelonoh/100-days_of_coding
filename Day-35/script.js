console.log(15 == 15);
console.log(15 === 11)

// Js Boolean() Constructor

console.log("Boolean contructor >>>>>>>>")
func = () => {
    let value1 = Boolean(true);
    let value2 = Boolean(false);
    console.log(value1);
    console.log(value2);
}
func()

func1 = () =>{
    let value3 = Boolean("Hello");
    let value4 = Boolean("0");
    let value5 = Boolean(0);
    let value6 = Boolean(new Date());
    console.log(value3)
    console.log(value4)
    console.log(value5)
    console.log(value6)

}
    func1();

// Here Boolean object obj is created for the value 27
let obj = new Boolean(27);

// Here boolean.toString() function is used for the created object obj.
console.log(obj.toString());

// valueOf()
let obj1 = new Boolean(true)
console.log(obj1.valueOf());

let obj2 = new Boolean(0)
console.log(obj2.valueOf())

// DataView
// Creating an ArrayBuffer with a size in bytes
let buffer = new ArrayBuffer(16);

// Creating views
let view1 = new DataView(buffer);

// Creating view from byte 0 for the next 4 bytes
let view2 = new DataView(buffer, 0, 4);

// creating view from byte 12 for the next 2 bytes
let view3 = new DataView(buffer, 12, 3);

// Putting 1 in slot 0
view1.setInt8(0, 1);

// Putting 2 in slot 12
view1.setInt8(12, 2);


// Printing the views
console.log(view2.getInt8(0));
console.log(view3.getInt8(0));

// getInt16
let buffer1 = new ArrayBuffer(20);
let dataview1 = new DataView(buffer, 0, 10);
dataview1.setInt16(1, 12);

console.log(dataview1.getInt16(1))