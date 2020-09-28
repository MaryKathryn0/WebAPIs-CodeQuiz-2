
//Questions Defined ** check classification? unsure
// var question1 = "Commonly used data types DO NOT include:"
// var question2 = "The condition in an if/else statement is enclosed within ____."
// var question2 = "Arrays in JavaScropt can be used to store ____."
// var question4 = "String values must be enclosed within ____ when being assigned to variables"
// var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";

// Questions as array
var questions = document.getElementById("questions")
var allQuestions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed within ____.", "Arrays in JavaScropt can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is:"];

function setQuestion(index) = {
    questions.innerText = allQuestions[index]
    }

//Mulitple Choice Options in Arrays  ** check classification? unsure

var qOptions1 = ["strings", "booleans", "alerts", "numbers"];
var qOptions2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
var qOptions3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var qOptions4 = ["commas", "curly brackets", "quotes", "parentheses"];
var qOptions5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];

// Change guide to actual question. 
var guess= document.querySelector("choices");
// targetDiv.textsContent = qOptions1
var response = ["4"]; // for end at bottom
var grader = document.querySelector(".grader");
var correct = "answerC";
var wrong = "answerW";
var guide = document.querySelector(".guide");
var start = document.getElementById("start");
var qBox = document.querySelector(".qBox");
var finish = document.querySelector(".finish");
var content = document.getElementById("content");
// var end = document - last question???



// Make Guide disappear on click of start
start.addEventListener("click", function() {
    content.removeChild(guide);
    content.appendChild(qBox);
    setQuestion(0);

    console.log("click");
})


//Populate Questions and response options in container for buttons
function questions() {
    var allQuestions = [0]
}
// Need to link this back to choices(parentnode of the buttons (childElement?) to populate the buttons with arrays... ahhhhhhhhhh )
function buttons() {
    var qOptions1 = [0]
}
//Create function for true false match 


//Enter function for indicating match - correct answer true/false

// Make qBox go away on click of last question
end.addEventListener("click", function() {
    content.removeChild(qBox);
    content.appendChild(finish);
    console.log("click");
})