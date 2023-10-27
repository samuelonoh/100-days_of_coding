document.getElementById('properties').innerHTML =
"Math.LN10: " + Math.LN10 + "<br>" +
"Math.LOG2E: " + Math.LOG2E + "<br>" +
"Math.LOG10E: " + Math.LOG10E + "<br>" +
"Math.SQRT2: " + Math.SQRT2 + "<br>" +
"Math.SQRT1_2: " + Math.SQRT1_2 + "<br>" +
"Math.LN2: " + Math.LN2 + "<br>" +
"Math.E: " + Math.E + "<br>" +
"Math.PI: " + Math.PI;


// Math objects methods :
document.getElementById("methods").innerHTML =
    "<p><b>Math.abs(-4.7):</b> " + Math.abs(-4.7) + "</p>" +
    "<p><b>Math.ceil(4.4):</b> " + Math.ceil(4.4) + "</p>" +
    "<p><b>Math.floor(4.7):</b> " + Math.floor(4.7) + "</p>" +
    "<p><b>Math.sin(90 * Math.PI / 180):</b> " +
            Math.sin(90 * Math.PI / 180) + "</p>" +
    "<p><b>Math.min(0, 150, 30, 20, -8, -200):</b> " +
            Math.min(0, 150, 30, 20, -8, -200) + "</p>" +
    "<p><b>Math.random():</b> " + Math.random() + "</p>";


    
    // javaScript Map
    let map1 = new Map([
        [1 , 10], [2 , 20],
        [3 , 30], [4 , 40]
    ])
    console.log(map1)

    let map2 = new Map([
        ['firstname', 'Samuel'],
        ["lastname", 'Onoh']
    ])
    console.log(map2)

    let map3 = new Map();

    map3.set()

    // Creating a map using Map object
    let mp = new Map()

    // Add valuers to the map
    mp.set("a",1);
    mp.set("b",2);
    mp.set("c",3);

    // Looping map object to variables
    mp.forEach((values, keys) => {
        console.log(values, keys)
    })

    