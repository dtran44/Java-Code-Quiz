// Get the button element from the HTML
var startBtn= document.querySelector("startBtn");

// Add an event listener to the button that listens for the click event
start.addEventListener('click',showQuiz);

// Display quiz when the button is clicked & hide the start page
function showQuiz() {
    var quiz = document.getElementById("quiz");
    console.log(quiz)
    var start = document.getElementById("start");
    console.log(start)
    
    if (quiz.style.display === "none") {
        quiz.style.display = "block";
        start.style.display = "none";
    } else {
        quiz.style.display = "none";
        start.style.display = "block";
    }

// Display timer once the quiz is displayed
setInterval(Timer, 1000);

function Timer() {
  const d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}



    }
    








