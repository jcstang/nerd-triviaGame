

$(document).ready(function () {


  // ================================================
  // GLOBAL VARIABLES
  // ================================================
  var TIME_LIMIT = 5;
  var TIME_BETWEEN_QUESTIONS = (3 * 1000);  // 1000 = 1 second.
  var intervalId = setInterval(this.countDown, 1000);
  var clockRunning = false;
  // 30 seconds each question
  var time = TIME_LIMIT;

  // TODO: fill out the questions more.
  var questionsForGame = {
    questions: {
      1: {
        question: "Who is who?",
        answers: {
          a: "superman",
          b: "spiderman"
        },
        correctAnswer: "c"
      },
      2: {
        question: "Blah blah?",
        answers: {
          a: "blah",
          b: "spiderman"
        },
        correctAnswer: "b"
      }
    }
  };



  // ================================================
  // START OF GAME
  // ================================================
  startTimer();



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