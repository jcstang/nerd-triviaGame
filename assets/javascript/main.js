// main.js
// playing around with different ways to solve the problem

$(document).ready(function () {

  // ================================================
  // GLOBAL VARIABLES
  // ================================================
  var TIME_LIMIT = 6;
  var TIME_BETWEEN_QUESTIONS = (3 * 1000);  // 1000 = 1 second.
  var intervalId = setInterval(this.countDown, 1000);
  var clockRunning = false;
  // 30 seconds each question
  var time = TIME_LIMIT;

  // TODO: fill out the questions more.
  // var questionsForGame = {
  //   questions: {
  //     1: {
  //       question: "Who is who?",
  //       answers: {
  //         a: "superman",
  //         b: "spiderman"
  //       },
  //       correctAnswer: "c"
  //     },
  //     2: {
  //       question: "Blah blah?",
  //       answers: {
  //         a: "blah",
  //         b: "spiderman"
  //       },
  //       correctAnswer: "b"
  //     }
  //   }
  // };



  // maybe model the quesitons after this
  // myQuestions[0].answers["a"]; //returns Superman
  // myQuestions[0].question; // returns "who is....etc"
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  console.log(questionsForGame.questions);
  

  // this one works!
  // startTimer();


  // ================================================
  // displaying question and answers
  // ================================================
  var myElement = $('<li></li>')
    .text('This is some possible answer to quetion')
    .attr('id', 'answer-a')
    .attr('class', 'btn btn-secondary');
  $('#answer-area').append(myElement);

  var currQuestion = $('#question-area').text('When does a cup become a bucket?');

  // TODO: how to go thru questionsForGame, and display 1 quesiton.

  // TODO: check if, user answered wrong, time ran out, or user answered correct.
  // TODO: if, correct, then display new question. score++.
  // TODO: if incorrect or time ran out, display correct answer (kinda new page).
  // TODO: keep track of how many the user answered correctly.

  // TODO: when is the end of the game. When it is, display results.
  // maybe reset button to play again?



  // ================================================
  // helper functions
  // ================================================
  function timesUp() {
    console.log('times up!!!');
    stopTimer();
    setTimeout(reset, TIME_BETWEEN_QUESTIONS);
  }

  function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
  }

  function countDown() {
    time--;
    if (time <= 0) {
      timesUp();
    } else {
      console.log('helper function call');
      console.log(time);
    }

    // console.log(time);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    // $("#display").text(converted);
  }

  function startTimer() {
    if (!clockRunning) {
      intervalId = setInterval(countDown, 1000);
      clockRunning = true;
    }
  }

  function displayCurrentTime() {
    currentTime = timeConverter(time);

    $('#display').text(currentTime);
  }

  function reset() {
    time = TIME_LIMIT;
    clockRunning = false;
    startTimer();
  }


});