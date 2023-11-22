const contacts = [
    {
        "name": "John Wick",
        "img": "https://shorturl.at/hrKSW",
        "username": "@John",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        "name": "David J. Malan ",
        "img": "https://t.ly/LY9b4",
        "username": "@david",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        "name": "Cristiano",
        "img": "https://rb.gy/nax2ia",
        "username": "@ronaldo",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
]



const result = contacts.map((contact) => {
    return contact.about.substring(0,50)
});

console.log("my result is ", result);


const array = ["corn", "Oranges", "Peanut", "Chocolate"];
const result1 = array.filter((arr) => arr.length > 5 )

console.log("Array is :",result1)