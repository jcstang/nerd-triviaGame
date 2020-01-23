

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
  // var intervalThingy;

  var myGameTimer = class GameTime{
    timeLimit = 30;
    timeBetween = 10;
    constructor(timeLimit, timeBetween) {
      this.timeLimit = timeLimit;
      this.timeBetweenQuestions = timeBetween;
      this.intervalId = null;
      this.clockRunning = false;
      this.timeLeft = 30;
    }
    start() {
      if(!this.clockRunning) {
        //this.intervalId = setInterval(this.countDown, 1000);
        this.intervalId = setInterval(this.countDown, 1000);
        this.clockRunning = true;
      }
    }

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    reset() {
      this.timeLeft = this.timeLimit;
      this.clockRunning = false;
      this.start();
    }

    countDown() {
      console.log('countDown');
      console.log(this.timeLeft);


      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.timesUp();
      } else {
        console.log(this.timeLeft);
      }
    }

    timesUp() {
      console.log('times up!!');
      this.stop();
      setTimeout(this.reset, this.timeBetweenQuestions);
    }
  };

  var todaysGame = new myGameTimer(30,10);
  console.log(todaysGame);

  // class call
  // var todaysGame = new myGameTimer(30, 10);
  // todaysGame.start();
  myGameTimer.constructor();
  console.log('hey');

  // timer class
  class Timer {
    timeLimit;
    timeBetweenQuestions;
    intervalId;
    clockRunning;
    timeLeft;
    constructor(timeLimit, timeBetween) {
      this.timeLimit = timeLimit;
      this.timeBetweenQuestions = timeBetween;
      this.intervalId = null;
      this.clockRunning = false;
      this.timeLeft = 30;
    }

    start() {
      if(!this.clockRunning) {
        this.intervalId = setInterval(this.countDown, 1000);
        //intervalThingy = setInterval(this.countDown, 1000);
        // this.intervalId = setInterval(function() {
        //   console.log('countDown');
        //   console.log(this.timeLeft);
        //   this.timeLeft--;
        //   if (this.timeLeft <= 0) {
        //     this.timesUp();
        //   } else {
        //     console.log(this.timeLeft);
        //   }
        // }, 1000);

        // setTimeThing(this);
        this.clockRunning = true;
      }
    }

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    reset() {
      this.timeLeft = this.timeLimit;
      this.clockRunning = false;
      this.start();
    }

    countDown() {
      console.log('countDown');
      console.log(this.timeLeft);
      
      
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.timesUp();
      } else {
        console.log(this.timeLeft);
      }
    }

    timesUp() {
      console.log('times up!!');
      this.stop();
      setTimeout(this.reset, this.timeBetweenQuestions);
    }
  };

  // function Run(){
  //   var self = this;
  //
  //   self.start = function(){
  //     self.interval = setInterval(function() { self.draw(); },1000);
  //   };
  //
  //   self.draw = function(){
  //     //some code
  //   };
  // }

 // var run = new Run();

  //run.start();


  // var myGameTimer = new Timer(30, 5);
  // console.log('my object');
  // console.log(myGameTimer);
  // myGameTimer.start();
  //
  // console.log();


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

  // var gameTimer = {
  //   timeLimit: 30,
  //   timeBetweenQuestions: 3000,
  //   intervalId: null,
  //   clockRunning: false,
  //   timerTime: 30,
  //
  //   start: function () {
  //     if (!this.clockRunning) {
  //       this.intervalId = setInterval(this.countDown, 1000);
  //       this.clockRunning = true;
  //     }
  //
  //     console.log('timerTime');
  //     console.log(this.timerTime);
  //
  //
  //   },
  //   stop: function () {
  //     clearInterval(this.intervalId);
  //     this.intervalId = null;
  //   },
  //   reset: function () {
  //     this.timerTime = this.timeLimit;
  //     this.clockRunning = false;
  //     this.start();
  //   },
  //   countDown: function () {
  //     this.timerTime--;
  //     console.log('count down');
  //
  //     if (this.timerTime <= 0) {
  //       this.timesUp();
  //     } else {
  //       console.log(this.timerTime);
  //     }
  //   },
  //   timesUp: function () {
  //     console.log('times up!!!');
  //     this.stop();
  //     setTimeout(this.reset, this.timeBetweenQuestions);
  //   }
  //
  // };

  // startTimer();

  // gameTimer.start();

  

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
  function setTimeThing(obj) {
    // this.intervalId = setInterval(function() {
    //   console.log('countDown');
    //   console.log(this.timeLeft);
    //   this.timeLeft--;
    //   if (this.timeLeft <= 0) {
    //     this.timesUp();
    //   } else {
    //     console.log(this.timeLeft);
    //   }
    // }
    // obj.intervalId = setInterval(obj.countDown, 1000);
    obj.intervalId = setInterval(function(){ obj.countDown();}, 1000);
    console.log('blah');



  }
  // function timesUp() {
  //   console.log('times up!!!');
  //   stopTimer();
  //   setTimeout(reset, TIME_BETWEEN_QUESTIONS);
  // }

  // function stopTimer() {
  //   clearInterval(intervalId);
  //   intervalId = null;
  // }

  // function countDown() {
  //   time--;
  //   if (time <= 0) {
  //     timesUp();
  //   } else {
  //     console.log(time);
  //   }

  //   // console.log(time);
  //   // DONE: Use the variable we just created to show the converted time in the "display" div.
  //   // $("#display").text(converted);
  // }

  // function startTimer() {
  //   if (!clockRunning) {
  //     intervalId = setInterval(countDown, 1000);
  //     clockRunning = true;
  //   }
  // }

  // function displayCurrentTime() {
  //   currentTime = timeConverter(time);

  //   $('#display').text(currentTime);
  // }

  // function reset() {
  //   time = TIME_LIMIT;
  //   clockRunning = false;
  //   startTimer();
  // }


});

