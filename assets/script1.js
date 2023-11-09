// Retrieve high scores from localStorage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Display high scores on the high scores page
var detailsArea = document.getElementById('details');
highScores.forEach(function(scoreData, index) {
    var scoreEntry = document.createElement('div');
    scoreEntry.textContent = 'Initials: ' + scoreData.initials + ' -Score: ' + scoreData.score;
    detailsArea.appendChild(scoreEntry);
});

// Get the clear high scores button element
var clearScoresBtn = document.getElementById('clearBtn');

// Add click event listener to the clear high scores button
clearBtn.addEventListener('click', function() {
    // Remove high scores data from local storage
    localStorage.removeItem('highScores');
    // Clear the details element on the high scores page
    var detailsElement = document.getElementById('details');
    detailsElement.innerHTML = '';
});