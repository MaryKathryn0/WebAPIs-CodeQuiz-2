// Questions as array
var questions = document.getElementById("questions")
var allQuestions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed within ____.", "Arrays in JavaScropt can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is:"];

function setQuestion(index) {
    // for(var = i; i < nums.length; i++) 
    questions.textContent = allQuestions[index];
    }
//Mulitple Choice Options in Arrays  
var qOptions1 = ["strings", "booleans", "alerts", "numbers"];
var qOptions2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var qOptions3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var qOptions4 = ["commas", "curly brackets", "quotes", "parentheses"];
var qOptions5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];

// for(var = i; i < nums.length; i++) {}
function setAnswers(index) {
     choices.textContent = qOptions1[index];
}
