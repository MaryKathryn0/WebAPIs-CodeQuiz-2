
//Questions Defined ** check classification? unsure
// var question1 = "Commonly used data types DO NOT include:"
// var question2 = "The condition in an if/else statement is enclosed within ____."
// var question3 = "Arrays in JavaScropt can be used to store ____."
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
var correct = document.getElementById("answerC");
var wrong = document.getElementById("answerW");
var guide = document.querySelector(".guide");
var start = document.getElementById("start");
var qBox = document.querySelector(".qBox");
var finish = document.querySelector(".finish");
var content = document.getElementById("content");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var choices = document.querySelector(".choices");
// var q1Length = qOptions1.length;

// var end = document - last question???

// Make Guide disappear on click of start and Question 1 appear
//Guide to Q1
start.addEventListener("click", function () {
    content.removeChild(guide);
    qBox.style.display="block";
    question1()
})
function question1() {
    setQuestion(0);
    for (let i = 0; i < qOptions1.length; i++) {
        choice1.innerText = qOptions1[0];
        choice2.innerText = qOptions1[1];
        choice3.innerText = qOptions1[2];
        choice4.innerText = qOptions1[3];

    }
}
choices.addEventListener("click", function() {
    if(allQuestions[0]&& this.data-index===3){
correct.style.display = "block"
question2()
    }
    else if(allQuestions[0]&& this.data-index !==3) {
wrong.style.display = "block"
question2()
    }

})


// Make Question 1 removed and for Question 2 appear
function question2() {
    setQuestion(1);
    for (let i = 0; i < qOptions1.length; i++) {
        choice1.innerText = qOptions2[0];
        choice2.innerText = qOptions2[1];
        choice3.innerText = qOptions2[2];
        choice4.innerText = qOptions2[3];
    }
}
choices.addEventListener("click", function() {
    if(allQuestions[0]&& this.data-index===3) {
        correct.style.display = "block"
        question3()
    }
    else if(allQuestions[0]&& this.data-index !==3) {
        wrong.style.display = "block"
        question3()
    }
})
// Question 3
function question3() {
    setQuestion(2);
    for (let i = 0; i < qOptions1.length; i++) {
        choice1.innerText = qOptions3[0];
        choice2.innerText = qOptions3[1];
        choice3.innerText = qOptions3[2];
        choice4.innerText = qOptions3[3];
    }
}
choices.addEventListener("click", function() {
    if(allQuestions[0]&& this.data-index ===1) {
        correct.style.display = "block"
        question4()
    }
    else if(allQuestions[0]&& this.data-index !==1) {
        wrong.style.display = "block"
        question4()
    }
})
    
// Question 4
function question4() {
    setQuestion(3);
    for (let i = 0; i < qOptions1.length; i++) {
        choice1.innerText = qOptions4[0];
        choice2.innerText = qOptions4[1];
        choice3.innerText = qOptions4[2];
        choice4.innerText = qOptions4[3];
    }
}
choices.addEventListener("click", function () {
    if(allQuestions[0]&& this.data-index ===3) {
        correct.style.display = "block"
        question5()
    }
    else if(allQuestions[0]&& this.data-index !==3) {
        wrong.style.display = "block"
        question5()
    }
})
// Question 5
function question5() {
    setQuestion(4);
    for (let i = 0; i < qOptions1.length; i++) {
        choice1.innerText = qOptions5[0];
        choice2.innerText = qOptions5[1];
        choice3.innerText = qOptions5[2];
        choice4.innerText = qOptions5[3];
    }
}
    choices.addEventListener("click", function () {
        if(allQuestions[0]&& this.data-index ===4) {
            correct.style.display = "block"
            
        }
        else if(allQuestions[0]&& this.data-index !==4) {
            wrong.style.display = "block"
            
        }
})


// Make qBox go away on click of last question *** DO WHAT I DID FOR qBox***
choice4.addEventListener("click", function() {
    content.removeChild(qBox);
    finish.style.display="block";
    console.log("click");
})