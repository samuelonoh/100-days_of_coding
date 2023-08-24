let search = document.querySelector("#search");
let gradeScore = document.getElementById("gradeScore");
let enter = document.getElementId("enter");

enter.addEventListener("click", display);

function display() {
  if (search.value === "A") {
    gradeScore.innerText = "Excellent";
    gradeScore.style.color = "green"
  } else if(search.value === "B") {
    gradeScore.innerText = "Very good";
    gradeScore.style.color = "green";
  } else if(search.value === "C") {
    gradeScore.innerText = "Good";
    gradeScore.style.color = "green";
  } else if(search.value === "D") {
    gradeScore.innerText = "Poor";
    gradeScore.style.color = "green";
  } else if(search.value === "E") {
    gradeScore.innerText = "Very poor";
    gradeScore.style.color = "red";
  } else if(search.value === "F") {
    gradeScore.innerText = "Repeat";
    gradeScore.style.color = "red";
  } else {
    gradeScore.innerText ="Choose of this grade. Grades:(A, B, C, D, E, F)";
    gradeScore.style.color = "red";
  }
}
