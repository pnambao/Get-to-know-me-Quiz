var questions = [
    {
        title: "What's my favourite colour:",
        choices: ["mustard", "turquiose", "magenta", "Grey"],
        answer: "mustard"
    },
    {
        title: "My favourite ice cream flavour:",
        choices: ["Vanilla", "Chocolate fudge", "Butter pecan", "Reeses"],
        answer: "Vanilla"
    },
    {
        title: "My favourite past time activity",
        choices: ["reading", "video games", "gym", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "Favourite fruit:",
        choices: ["Apple", "Grapes", "Banana", "oranges"],
        answer: "Grapes"
    },
    {
        title: "Favourite meal",
        choices: ["Breakfast", "lunch", "brunch", "dinner"],
        answer: "brunch"
    },

];
// variables
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 76;
var timeInterval = 0;
var penalty = 10;//takes away 10 from seconds
var ulCreate = document.createElement("ul");//create new element

// start timer
timer.addEventListener("click", function () {
    
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;//timer starts reducing time
            currentTime.textContent = "Time: " + secondsLeft;//displays time remaining on clock

            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // CORRECT
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "You're correct!";
          
        } else {
            // WRONG :Will deduct 10 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Oopsies! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);
    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });

}




//SIMPLE QUIZ TEST CODE

/* Question functions for quiz questions
let qOne = {
    title: 'What is my favourite fruit?',
    options: ['apple', 'orange', 'pear', 'banana'],
    rightAns: 0
  };
  // existing code
  function showQuestion(q) {
    // existing code
    let qDiv = document.getElementById("question");
    qDiv.textContent = q.question;
    
    // existing code
    let alts = document.querySelectorAll('.option');
    
    // modified code
    alts.forEach(function(element, index){
      // existing code
      element.textContent = q.options[index];
      // new code
      element.addEventListener('click', function(){
        if (q.rightAnswer == index) {
          console.log('Correct Answer!');
        } else {
          console.log('Wrong Answer!');
        }
      });
    });
  }

//Timer
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("#main");

var secondsLeft = 6;


function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      document.getElementById("Countdown").innerHTML = "Time's up!!!"  
      }
    }, 1000);
  }


  var btnEl = document.getElementById("#btn");
  //var startbuttonEl = document.querySelector("#btn")
  btnEl.addEventListener("click", startTimer);
  //startTimer();*/
  
  
  