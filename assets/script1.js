var storedScore = JSON.parse(localStorage.getItem("score"));
    var storedInitials = JSON.parse(localStorage.getItem("initials"));

    var highscoreDisplay = document.getElementById("details");
    highscoreDisplay.textContent = "Initials: " + storedInitials + " - Score: " + storedScore;