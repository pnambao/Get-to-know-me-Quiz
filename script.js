// Question functions for quiz questions
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
  //startTimer();
  
  
  