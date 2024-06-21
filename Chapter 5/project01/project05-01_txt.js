"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Joseph Gjelaj
      Date:   6.21.24

      Filename: project05-01.js
*/
// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// Node list for questions
let questionList = document.querySelectorAll('div#quiz input');

// Function to start the quiz
startQuiz.onclick = function() {
    overlay.className = 'showquiz'; // Show quiz overlay
    timeID = setInterval(countdown, 1000); // Start countdown timer
};

// Function to handle countdown
function countdown() {
    if (timeLeft === 0) {
        clearInterval(timeID); // Stop countdown
        let totalCorrect = checkAnswers();
        if (totalCorrect === correctAnswers.length) {
            alert('Congratulations! You got 100%');
        } else {
            alert(`You got ${correctAnswers.length - totalCorrect} incorrect out of ${correctAnswers.length} questions.`);
            timeLeft = quizTime; // Reset timeLeft
            quizClock.value = timeLeft; // Update clock display
            overlay.className = 'hidequiz'; // Hide quiz overlay
        }
    } else {
        timeLeft--;
        quizClock.value = timeLeft; // Update clock display
    }
}

// Function to check answers
function checkAnswers() {
    let correctCount = 0;
    questionList.forEach((input, index) => {
        if (input.value.trim() === correctAnswers[index]) {
            correctCount++;
        } else {
            input.style.color = 'red'; // Mark incorrect answers in red
        }
    });
    return correctCount;
}





















