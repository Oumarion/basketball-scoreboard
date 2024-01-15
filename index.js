let homeScore = 0;
let awayScore = 0;
let timerInterval;
let timerSeconds = 0;

function updateScore(team, points) {
  if (team === "home") {
    homeScore += points;
    document.querySelector(".home .score").textContent = homeScore;
  } else if (team === "away") {
    awayScore += points;
    document.querySelector(".away .score").textContent = awayScore;
  }
}

function startTimer() {
  stopTimer();
  timerSeconds = 0;
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  timerSeconds++;
  const minutes = Math.floor(timerSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timerSeconds % 60).toString().padStart(2, "0");
  document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

function resetScoreboard() {
  homeScore = 0;
  awayScore = 0;

  document.querySelector(".home .score").textContent = homeScore;
  document.querySelector(".away .score").textContent = awayScore;
  stopTimer();
  document.getElementById("timer").textContent = "00:00";
}``

document.addEventListener("DOMContentLoaded", () => {
  resetScoreboard(); // Initialize scoreboard on page load
});
