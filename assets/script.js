var Questions = [
    {"question": "What is the purpose of the addEventListener method in JavaScript?",
    "options": ["(a) To create a new event", "(b) To remove an event", "(c) To attach an event handler function to an element", "(d) To prevent default behavior of an event"],
    "correctAnswer": 2,
    },
    {"question": "How do you properly check if a variable x is of type string in JavaScript?",
    "options": ["(a) if (typeOf x === 'string')", "(b) if (typeof x === 'string')", "(c) if (x.type === 'string')", "(d) if (x instanceof 'string')"],
    "correctAnswer": 1,
    },
    
    {"question": "Which of the following is used to comment a single line in JavaScript?",
    "options": ["(a) //", "(b) /**/", "(c) #", "(d) --"],
    "correctAnswer": 1, 
    },

    {"question": "Which of the following methods can be used to remove an item from the end of an array in JavaScript?",
    "options": ["(a) array.push()", "(b) array.pop()", "(c) array.shift()", "(d) array.unshift()"],
    "correctAnswer": 2,
    },

   {"question": "What does the JSON.parse() function do in JavaScript?",
   "options": ["(a) Converts a JSON string to a JavaScript object","(b) Converts a JavaScript object to a JSON string","(c) Parses a JSON object","(d) Parses a JavaScript object"],
   "correctAnswer": 1,
},
];

/* === Start Button function === */
document.getElementById('startBtn').addEventListener('click', function() {
    currentQuestion = 0; // Reset the current question to the first question.
    displayQuiz();
    requestAnimationFrame(function() {
    showQuestion();
    startTimer();
    });
})

/* === Display Quiz === */
// Display quiz section when the button is clicked & hide the start page
function displayQuiz() {
    var quiz = document.getElementById("quiz");
    console.log(quiz)
    var start = document.getElementById("start");
    console.log(start)
    
    if (quiz.style.display === "none") {
        quiz.style.display = "block";
        start.style.display = "none";
        finish.style.display = "none";
    } else {
        quiz.style.display = "none";
        start.style.display = "block";
        finish.style.display = "none";
    }}


 /* === Show questions === */   
// Retrieve the elements in the quiz section from HTML in order to load the questions and answers
var questionArea = document.getElementById('questions');
var answerArea = document.getElementById('answers');
var checker = document.getElementById('checker');
var currentQuestion = 0;
var score = 0;

//Load the questions from the array into the quiz question area
function showQuestion() {
    var question = Questions[currentQuestion].question;
    var options = Questions[currentQuestion].options;
    questionArea.textContent = question;
    loadAnswers(options);
    checker.textContent = '';
}

//Load the answers from the array into the quiz question area
function loadAnswers(options) {
    answerArea.innerHTML = '';
    for (var i = 0; i < options.length; i++) {
        var createDiv = document.createElement('div');
        createDiv.textContent = options[i];
        createDiv.classList.add('option');
        createDiv.setAttribute('data-index', i);
        createDiv.addEventListener("click", function(event) {
            var selectedAnswer = parseInt(event.target.getAttribute('data-index'));
            checkAnswer(selectedAnswer);
        });
        answerArea.appendChild(createDiv);
    }
}

//Checks the selected answer by the user against the correct answer in the array
function checkAnswer(selectedAnswer) {
    var correctAnswer = Questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        checker.textContent = "Correct!";
        
    } else {
        checker.textContent = "Incorrect!";
    }

    setTimeout(nextQuestion, 1000); // Move to the next question after a brief delay.
}

document.getElementById('checker').addEventListener('click', function() {
    if (checker.textContent = "Incorrect!"){
    sec = -1;
    document.getElementById("seconds").innerHTML='00:'+ sec;
    }
});

//Moves to the next question if the current question is less than the total number of questions in the array
function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } 
    else{
        quiz.style.display = "none";
        start.style.display = "none";
        finish.style.display = "block";
        clearInterval(timer);
    }}

/* === Timer function === */

// Set the initial number in seconds
var count = 75;
var lastQuestion = Questions.length - 1

// Function to update the timer display
function updateTimerDisplay() {
    document.getElementById("seconds").textContent = count + " seconds left";
}

function startTimer() {
    updateTimerDisplay(); // Initial display
    var timerInterval = setInterval(function() {
        count--; // Decrement the seconds (using the correct variable name)
        updateTimerDisplay(); // Update the display
        if (count === 0 || currentQuestion === lastQuestion) {
            clearInterval(timerInterval); // Stop the timer when seconds reach 0 or when all questions are answered
        }
    }, 1000); // Update every 1 second (1000 milliseconds)
}

/* === Completion of Quiz section === */
    var initialsInput = document.querySelector("#initials");
    
    // create user object from user input & score
    var initialScore = {
    initials: initialsInput.value.trim(),
    };


    function displayScore() {
        document.getElementById("seconds").textContent = count + " seconds left";
        
        
        document.getElementById('submitBtn').addEventListener('click', function() { 
        localStorage.setItem("initialScore", JSON.stringify(initialScore));
        window.location.href = 'highscores.html'; // Redirect to highscores.html
        }
)};



  








