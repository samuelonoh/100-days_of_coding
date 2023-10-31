


const submit = document.getElementById("submit")
const form = document.getElementById("form")
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const confirmError = document.getElementById("confirmError");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let nameFormat = /^[A-Za-z]+$/;
let input = document.querySelectorAll(".input");
const box = document.getElementById("box")
const boxText = document.getElementById("boxText")


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "" && !box.checked) {
            input[i].style.borderColor = "red";
            boxText.style.color = "red";
            setTimeout((index) => {
                input[index].style.borderColor = "white";
                boxText.style.color = "white";
            }, 3000, i);
            console.log("error 1")
        } else if (!fullname.value.match(nameFormat)) {
            fullname.style.borderColor = "red";
            nameError.style.display = "block";
            setTimeout(() => {
                fullname.style.borderColor = "white";
                nameError.style.display = "none";
            }, 3000, i);
            console.log("Name match error")
        } else if (!email.value.match(emailPattern)) {
            email.style.borderColor = "red";
            emailError.style.display = "block";
            setTimeout(() => {
                email.style.borderColor = "white";
                emailError.style.display = "none";
            }, 3000, i);
            console.log("Email match error")
        }else if (password1.value !== password2.value) {
            password1.style.borderColor = "red";
            password2.style.borderColor = "red";
            confirmError.style.display = "block";
            setTimeout(() => {
                password1.style.borderColor = "white";
                password2.style.borderColor = "white";
                confirmError.style.display = "none";
            }, 3000);
            console.log("password error")
        } else if (!box.checked) {
            boxText.style.color = "red";
            setTimeout(() => {
                boxText.style.color = "white";
            }, 3000, i);
            console.log("check error")
        } else  {
        console.log("Form is valid. Navigating to success.html...");
        
        location.replace("./success.html")
    }
    } 

});

