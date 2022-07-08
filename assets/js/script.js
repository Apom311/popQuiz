//defining the variables
var startWindow = document.getElementById("start-window");
var startQuiz = document.getElementById("start-button");
var quizWindow = document.getElementById("quiz");
var header = document.getElementById("lead");
//time&score
var timer = document.getElementById("time-left");
var secondsLeft = 30;
var scoreBtn = document.getElementById("scoreBtn");
var scoreWindow = document.getElementById("endOfGame");
var scoreTime = document.querySelector(".hideMe");
var savedScores = document.getElementById("savedScores");
//answers
var answerBtn = document.querySelectorAll(".answerBtn");
var answerA = document.getElementById("answer1");
var answerB = document.getElementById("answer2");
var answerC = document.getElementById("answer3");
var answerD = document.getElementById("answer4");
var question = document.getElementById("question");
var correctAnswer = document.getElementById("rightWrong");
var incorrectAnswer = document.getElementById("rightWrong");
var currentQuestion = 0;
//questions
var questions = [
    {
        question : "What does HTML stand for?",
        answerA : "Huge Troll Meetup in London",
        answerB : "Hyper Text Markup Language",
        answerC : "Happy Tigger Makes Lunch",
        answerD : "Home Tool for Marking Luggage",
        correct : "Hyper Text Markup Language"
    
    },{
        question : "Which of these terms can be used to identify a variable?",
        answerA : "'const'",
        answerB : "'var'",
        answerC : "'let'",
        answerD : "All of the Above",
        correct : "All of the Above"
    
    },{
        question : "What is the method used to draft out your code before implementing it?",
        answerA : "psuedo code",
        answerB : "Hyper Text Markup Language",
        answerC : "google drive",
        answerD : "Panic and Pray",
        correct : "psuedo code"
    
    },{
        question : "Pick a number.",
        answerA : "'15'",
        answerB : "fifty-six",
        answerC : "12",
        answerD : "Stephen King",
        correct : "12"
    
    },{
        question : "No really, pick a number..",
        answerA : "No",
        answerB : "You can't make me",
        answerC : "1",
        answerD : "Ur a number",
        correct : "1"
    
    },
];
console.log(questions);

//defining my functions
//game function
function startGame() {
    quizWindow.setAttribute("style", "display: block");
    startWindow.setAttribute("style", "display: none");
    timer.setAttribute("style", "display: contents");
    scoreTime.setAttribute("style", "display: none");
    header.setAttribute("style", "display: none");
    scoreWindow.setAttribute("style", "display: none");
    savedScores.setAttribute("style", "display: none");
    firstQuestion();
    setTime();
}

function showScore() {
  quizWindow.setAttribute("style", "display: none");
  startWindow.setAttribute("style", "display: none");
  timer.setAttribute("style", "display: none");
  scoreTime.setAttribute("style", "display: none");
  header.setAttribute("style", "display: block");
  scoreWindow.setAttribute("style", "display: block");
  savedScores.setAttribute("style", "display: inline-block")

}
//clock function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizWindow.setAttribute("style", "display: none");
            header.setAttribute("style", "display: block");
            startQuiz.setAttribute("style", "display: none");
            } else if (currentQuestion === 5) {
              clearInterval(timerInterval);
              console.log(secondsLeft);
              quizWindow.setAttribute("style", "display: none");
              header.setAttribute("style", "display: block");
              startQuiz.setAttribute("style", "display: none");
            }
 
    }, 1000);
}

//quiz functin
function firstQuestion() {
    var quest = questions[currentQuestion];
    question.textContent = quest.question;
    answerA.textContent = quest.answerA;
    answerB.textContent = quest.answerB;
    answerC.textContent = quest.answerC;
    answerD.textContent = quest.answerD;
  }

  // Event listener for buttons and q/a
  for (var i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener("click", function userAnswer(event) {
      event.stopPropagation();
      console.log("ohai");
      if (event.currentTarget.innerText === questions[currentQuestion].correct){
      correctAnswer.textContent = "Correct + 5 sec";
      correctAnswer.setAttribute("style", "color: red");
      secondsLeft = secondsLeft + 5;
      console.log("correct");
    } else {
      incorrectAnswer.textContent = "Incorrect - 5 sec";
      incorrectAnswer.setAttribute("style", "color: red");
      secondsLeft = secondsLeft - 5;
      console.log("Incorrect minus 5 seconds");
    }
    console.log(currentQuestion);
    currentQuestion++;
  
  
    if (currentQuestion < 5) {
      firstQuestion();
    }
  });
  }
//calling my funcitons
startQuiz.addEventListener("click", startGame);
console.log(scoreBtn);
scoreBtn.addEventListener("click", showScore);