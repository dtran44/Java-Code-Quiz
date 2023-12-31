/* === Questions & options array === */
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

    showQuestion();

    startTimer(seconds);

    
    });

    
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
        score++;

    } else {
        checker.textContent = "Incorrect!";
        count -= 1; // Decrease the timer by 1 second for incorrect answers
        updateTimerDisplay(seconds); // Update the timer display
    }

    setTimeout(nextQuestion, 1000); // Move to the next question after a brief delay.
}



//Moves to the next question if the current question is less than the total number of questions in the array
var allQuestionsAnswered = false;

function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } 
    else{
        allQuestionsAnswered = true;
        quiz.style.display = "none";
        start.style.display = "none";
        finish.style.display = "block";
        clearInterval(timer);
    }}

/* === Timer function === */

// Set the initial number in seconds
var count = 75;


// Function to update the timer display
function updateTimerDisplay(seconds) {
    document.getElementById("seconds").textContent = count + " seconds left";
}

function startTimer(seconds) {
    updateTimerDisplay(seconds); // Initial display
    var timerInterval = setInterval(function() {
        count--; // Decrement the seconds (using the correct variable name)
        updateTimerDisplay(count); // Update the display
        if (count === 0 || allQuestionsAnswered) {
            clearInterval(timerInterval); // Stop the timer when seconds reach 0 or when all questions are answered
            timerZero()
            displayScore(count);// Pass the remaining seconds as the score
        }
    }, 1000); // Update every 1 second (1000 milliseconds)
}

//Moves to finish page when timer reaches zero
function timerZero() {
    if (count === 0){
        quiz.style.display = "none";
        start.style.display = "none";
        finish.style.display = "block";
        clearInterval(timer);
    }}

/* === Completion of Quiz section === */
var initialsInput = document.querySelector("#initials")

function displayScore(remainingSeconds) {
    var score = remainingSeconds;
    document.getElementById("score").textContent = "Your final score is: " + score;}


document.getElementById('submitBtn').addEventListener('click', function() {
    // Get initials value here when the button is clicked
    initials = initialsInput.value.trim();
    
    // Check if initials are not empty
    if (initials !== "") {
      
        // Retrieve existing high scores from localStorage or create an empty array
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        
        // Add the current score and initials to the high scores array
        var newScore = {
            initials: initials,
            score: count
            
        };
        highScores.push(newScore);
        
        // Sort the high scores array in descending order based on score
        highScores.sort(function(a, b) {
            return b.score - a.score;
        });

        // Store the updated high scores back in localStorage
        localStorage.setItem("highScores", JSON.stringify(highScores));

        // Redirect to highscores.html
        window.location.href = 'highscores.html';

    } else {
        // Handle the case where initials are empty
        alert("Please enter your initials.");
    }
});