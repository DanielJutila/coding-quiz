var timer = document.querySelector(".timer");
var questionGame = document.getElementById("questions");
var startGame = document.querySelector(".startGame");
var answer = document.querySelectorAll(".answer");
var qArray = [
    document.querySelector(".q1"),
    document.querySelector(".q2"),
    document.querySelector(".q3"),
    document.querySelector(".q4"),
    document.querySelector(".q5"),
    document.querySelector(".q6")
];
var correctButtons = document.querySelectorAll(".correct");
var wrongButtons = document.querySelectorAll(".wrong");

//Timer for quiz
//Add seconds to here when answer is correct
var secondsLeft =30;
var questionOrder = 0;

//starts game
startGame.addEventListener("click", function () {
    console.log("start game pressed");
    secondsLeft = 30;
    clearInterval(timeInterval);
    setTime();
    startGame.setAttribute("style", "display:none;");
    qArray[questionOrder].setAttribute("style", "display: block;");
    timer.setAttribute("style", "display: inline;");

    });

function loopingThourgh(){
    console.log("LOOPED");
    answer.forEach(function (button) {
        button.addEventListener("click", function (event) {
            handleAnswer(event.target.classList.contains("correct"));
        })
    })
};

var timeInterval;

function setTime() {
        timeInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = secondsLeft;
            if (secondsLeft == 0) {
                clearInterval(timeInterval);
                endGame();
            }
        }, 1000);
}

function handleAnswer(isCorrect) {
    
    qArray[questionOrder].setAttribute("style", "display: none;");
    questionOrder++;
    if (isCorrect) {
        secondsLeft += 10;
    } else {
        secondsLeft -= 10;
    }
    if (questionOrder < qArray.length) {
        qArray[questionOrder].setAttribute("style", "display: block;");
    } else {
        endGame();
    }
};

//end game function
function endGame() {
    console.log("end game function " + secondsLeft);
    clearInterval(timeInterval);
    questionOrder = 0;
    timer.setAttribute("style", "display: none;");
    startGame.setAttribute("style", "display: inline;");
};

loopingThourgh();