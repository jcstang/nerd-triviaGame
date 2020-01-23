

$(document).ready(function () {


  // ================================================
  // GLOBAL VARIABLES
  // ================================================
  var TIME_LIMIT = 5;
  var TIME_BETWEEN_QUESTIONS = (3 * 1000);  // 1000 = 1 second.
  var intervalId;
  var clockRunning = false;
  // 30 seconds each question
  var time = TIME_LIMIT;

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

  startTimer();

// ================================================
// displaying question and answers
// ================================================
  // TODO: which one to stick with? Option 1 or Option 2
  // 
  // $('#answer-area').append('<li id="answer-a" class="btn btn-secondary">This is some possible answer to question</li>');
  // vs
  // this?
  var myElement = $('<li></li>')
          .text('This is some possible answer to quetion')
          .attr('id', 'answer-a')
          .attr('class', 'btn btn-secondary');
  $('#answer-area').append(myElement);

var currQuestion = $('#question-area').text('When does a cup become a bucket?');



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
  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    // intervalId = setInterval(count, 1000);
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
  // displayCurrentTime();
  // $('#laps').empty();
}

// function timeConverter(t) {

//   var minutes = Math.floor(t / 60);
//   var seconds = t - (minutes * 60);

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   if (minutes === 0) {
//     minutes = "00";
//   }
//   else if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   return minutes + ":" + seconds;
// }



});

