
//Questions Defined
var question1 = "Commonly used data types DO NOT include:"
var question2 = "The condition in an if/else statement is enclosed within ____."
var question2 = "Arrays in JavaScropt can be used to store ____."
var question4 = "String values must be enclosed within ____ when being assigned to variables"
var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";
//Mulitple Choice Options in Arrays
var qOptions1 = ["strings", "booleans", "alerts", "numbers"];
var qOptions2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var qOptions3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var qOptions4 = ["commas", "curly brackets", "quotes", "parentheses"];
var qOptions5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];



// Change question 1 to actual question. 
var guess= document.querySelector("choices");
var response = ["0","1","2","3"];
var grader = document.querySelector("grader");
var correct = "answerC";
var wrong = "answerW";


//Enter function for indicating correct answer true/false

guess.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = grader[event.target.parentElement.id];
    shoppingCartEl.append(item);