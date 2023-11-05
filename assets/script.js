var Questions = [
    {"question": "What is the purpose of the addEventListener method in JavaScript?",
    "options": ["(a) To create a new event", "(b) To remove an event", "(c) To attach an event handler function to an element", "(d) To prevent default behavior of an event"],
    "correctAnswer": 2
    },
    {"question": "How do you properly check if a variable x is of type string in JavaScript?",
    "options": ["(a) if (typeOf x === 'string')", "(b) if (typeof x === 'string')", "(c) if (x.type === 'string')", "(d) if (x instanceof 'string')"],
    "correctAnswer": 1
    },
    
    {"question": "Which of the following is used to comment a single line in JavaScript?",
    "options": ["(a) //", "(b) /**/", "(c) #", "(d) --"],
    "correctAnswer": 1 
    },

    {"question": "Which of the following methods can be used to remove an item from the end of an array in JavaScript?",
    "options": ["(a) array.push()", "(b) array.pop()", "(c) array.shift()", "(d) array.unshift()"],
    "correctAnswer": 2 
    },

   {"question": "What does the JSON.parse() function do in JavaScript?",
   "options": ["(a) Converts a JSON string to a JavaScript object","(b) Converts a JavaScript object to a JSON string","(c) Parses a JSON object","(d) Parses a JavaScript object"],
   "correctAnswer": 1
},
];


document.getElementById('startBtn').addEventListener('click', function() {
    currentQuestion = 0; // Reset the current question to the first question.
    displayQuiz();
    setTime();
    showQuestion();
})

// Display quiz section when the button is clicked & hide the start page
function displayQuiz() {
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
    }}


// Display timer in minutes and seconds
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}


// Display quiz questions
var questionArea = document.getElementById('questions');
var answerArea = document.getElementById('answers');
var checker = document.getElementById('checker');
var currentQuestion = 0;

function showQuestion() {
    var question = Questions[currentQuestion].question;
    var options = Questions[currentQuestion].options;
    questionArea.textContent = question;
    loadAnswers(options);
    checker.textContent = '';
}

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

function checkAnswer(selectedAnswer) {
    var correctAnswer = Questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        checker.textContent = "Correct!";
    } else {
        checker.textContent = "Incorrect!";
    }

    setTimeout(nextQuestion, 1000); // Move to the next question after a brief delay.
}

function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        alert('Quiz completed!'); // Display a message when all questions are answered.
    }
}



    








