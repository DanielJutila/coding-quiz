var timer = document.querySelector(".timer");
var questions = document.querySelector(".question");
var startGame = document.querySelector(".start-game");


//Timer for quiz
//Add seconds to here when answer is correct
var secondsLeft = 20;

//starts game
startGame.addEventListener("click", function(){
    setTime();
    questions.textContent = "test";
    function setTime(){
        var timeInterval = setInterval(function(){
            secondsLeft--;
            timer.textContent = secondsLeft;
            //makes start game invisible after pressing
            startGame.setAttribute("style", "display:none;")
            if(secondsLeft === 0){
                clearInterval(timeInterval);
                //write code if time runs out
            }
        
        }, 1000)
        }

})

//Adds or subtracts time based on the answer
function answerResults(answer){
    if(answer){
        secondsLeft += 5;
    } else {
        secondsLeft -= 5;
    }
}

var q1 = {
    test: "apple",
    test2: "orange"
};
var q2 = {
    test: "apple",
    test2: "orange"
};
var q3 = {
    test: "apple",
    test2: "orange"
};
var q4 = {
    test: "apple",
    test2: "orange"
};