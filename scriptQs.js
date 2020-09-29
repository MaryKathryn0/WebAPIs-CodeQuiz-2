
//Questions Defined ** check classification? unsure
// var question1 = "Commonly used data types DO NOT include:"
// var question2 = "The condition in an if/else statement is enclosed within ____."
// var question2 = "Arrays in JavaScropt can be used to store ____."
// var question4 = "String values must be enclosed within ____ when being assigned to variables"
// var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";

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
//function choice1(index) {
// choices.textContent = qOptions1[index];
//}

// Change guide to actual question. 
var guess = document.querySelector("choices");
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
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
// var q1Length = qOptions1.length;

// var end = document - last question???

// Make Guide disappear on click of start and Question 1 appear
start.addEventListener("click", function () {
    content.removeChild(guide);
    content.appendChild(qBox);
    setQuestion(0);

    for (let i = 0; i < qOptions1.length; i++) {
        choice1.innerText = qOptions1[0];
        choice2.innerText = qOptions1[1];
        choice3.innerText = qOptions1[2];
        choice4.innerText = qOptions1[3];
    }

    console.log("click");
})
// Make Question 1 removed and for Question 2 appear
choice3.addEventListener("click", function () {
    content.appendChild(correct);
    // HOW TO MOVE TO NEXT QUESTION??
    setQuestion(1);
    for (let i = 0; i < qOptions1.length; i++) {
        choice1.innerText = qOptions2[0];
        choice2.innerText = qOptions2[1];
        choice3.innerText = qOptions2[2];
        choice4.innerText = qOptions2[3];
    }

    // when correct answer is chosen for 1 (choice3.innerText = qOptions1[2];)
    //and correct pops up
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
// end.addEventListener("click", function() {
    // content.removeChild(qBox);
    // content.appendChild(finish);
    // console.log("click");
// })