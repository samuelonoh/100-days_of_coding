// 1. If nothing as parameter is given, It represent the present date and time.
// let A = new Date().toLocaleString();

// Printing present date and time
// console.log(A)

// 2. Parameter as interger value give the number of miliseconds since January 1, 1970, 00:00:00 UTC
// let B = new Date(32549);

// console.log(B)

// 3. When any dataString is given as the parameter then it return the same as the parameter including day name.
// let C = new Date('October 26, 2023 12:23:20')

// console.log(C);

// 4. When some numbers are taken as the parameter then they are considered as year, month, day, hours, minutes, seconds, miliseconds respectively
// let D = new Date(2021, 10, 26, 5, 30, 22)

// console.log(D.toLocaleString())

const time = document.getElementById("time")
const date = document.getElementById("date")
const hourss = document.getElementById("main")


let date1 = new Date().toLocaleString().split(" ")

 task = () => {
    date.innerHTML = `Date: ${date1[0].replace(/,/gi, "")}`;
    time.innerHTML = `Time: ${date1[1]}`;
}

task1 = () => {
    let date2 = new Date();
    let hours = date2.getHours();
    let minutes = date2.getMinutes();

    // Check whether AM or PM
    let comparison  = hours >= 12 ? 'PM' :'AM';

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    hourss.innerHTML = hours + ':' + minutes + ' ' + comparison
}