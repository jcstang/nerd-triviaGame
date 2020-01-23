

$(document).ready(function () {

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

  start();


// ================================================
// timer from homework
// ================================================
// setTimeout(fiveSeconds, 5000);
// setTimeout(tenSeconds, 10000);
// setTimeout(timeUp, 15000);

// function fiveSeconds() {
//   // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
//   $('#time-left').append('<h2>10 seconds left...</h2>');

// }

// function tenSeconds() {
//   // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
//   // console log 5 seconds left
//   $('#time-left').append('<h2>5 seconds left...</h2>');
// }

// function timeUp() {
//   // in the element with an id of `time-left` add an h2 saying Time's Up!
//   // console log done
//   $('#time-left').append('<h2>Times up!</h2>');
//   // The following line will play the audio file above
//   audio.play();
// }

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 30;
var lap = 1;

function start() {
  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    // intervalId = setInterval(count, 1000);
    intervalId = setInterval(countDown, 1000);
    clockRunning = true;
  }
}

function countDown() {

  // DONE: increment time by 1, remember we cant use "this" here.
  // time++;
  time--;

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  console.log(time);
  console.log(converted);

  // DONE: Use the variable we just created to show the converted time in the "display" div.
  // $("#display").text(converted);
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

// ================================================
// displaying question and answers
// ================================================
  //example of object keys
  // var objKeys = Object.keys(wordGuessGame.wordsToPick);
 
  // this?
  // $('#answer-area').append('<li><button class="btn btn-secondary">button from code</button></li>');
  // vs
  // this?
  var myElement = $('<p></p>')
          .text('This is some possible answer to quetion')
          .attr('id', 'answer-a')
          .attr('class', 'btn btn-secondary');
  $('#answer-area').append(myElement);

var currQuestion = $('#question-area').text('When does a cup become a bucket?');



});

