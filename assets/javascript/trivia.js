// Trivia.js
// Jacob Stanger
// Jan 2020

// TODO: fill out the questions more.
let questionsForGame = [
  {
    question: "Who is gandalf?",
    answers: {
      a: "one of the hobbit guys",
      b: 'a wizard',
      c: 'Say what?...',
      d: 'idk, something Lord of The Rings'
    },
    correctAnswer: 'b'
  },
  {
    question: "Where did Harry Potter live outside of school?",
    answers: {
      a: 'hogwarts',
      b: 'some island',
      c: 'Say what?...',
      d: 'with the Durselys'
    },
    correctAnswer: 'd'
  },
  {
    question: "Who is my 3 year old daughter's favorite Doctor?",
    answers: {
      a: 'Peter Capaldi',
      b: 'Matt Smith',
      c: 'David Tennant',
      d: 'Jodie Whittaker'
    },
    correctAnswer: 'c'
  },
  {
    question: "In Star Wars, What powers ligthsabers?",
    answers: {
      a: 'Midichlorians',
      b: 'kyber crystals',
      c: 'the force',
      d: 'force crystals',
    },
    correctAnswer: 'b'
  }
];

// smaller test version
// let questionsForGame = [
//   {
//     question: "Who is gandalf?",
//     answers: {
//       a: "one of the hobbit guys",
//       b: 'a wizard',
//       c: 'Say what?...',
//       d: 'idk, something Lord of The Rings'
//     },
//     correctAnswer: 'b'
//   },
//   {
//     question: "Where did Harry Potter live outside of school?",
//     answers: {
//       a: 'hogwarts',
//       b: 'some island',
//       c: 'Say what?...',
//       d: 'with the Durselys'
//     },
//     correctAnswer: 'd'
//   }
// ];

var userScore = 0;
var whatQuestion = 0;
var currListOfAnswers = [];
var isQuestionAnswered = false;
var divBeforeDelete = $('#main-container');
var saveThisDiv;

//timer stuff
var intervalId = null;
var time = 11;

$(document).ready(function () {

  // ===============================================
  // GAME START
  // ===============================================
  startTriviaGame();


  // ===============================================
  // EVENTS
  // ===============================================
  function setClickEvents() {
    $('.a').on('click', function (event) {
      // answerHandler('a');
      answerHandler(event);
    });

    $('.b').on('click', function (event) {
      // answerHandler('b');
      answerHandler(event);
    });

    $('.c').on('click', function (event) {
      // answerHandler('c');
      answerHandler(event);
    });

    $('.d').on('click', function (event) {
      // answerHandler('d');
      answerHandler(event);
    });

  }

  // ===============================================
  // TIMER LOGIC
  // ===============================================
  function count() {
    time--;
    displayCurrentTime();

    if (time < 1) {
      console.log('Out of time, I guess...');
      prependNewMessage('alert-danger', 'OUT OF TIME!!!!');
      stopTimer();
      setTimeout(nextQuestion, 1.2 * 1000);
    }
  }

  function displayCurrentTime() {
    $('.timer').text(time);
  }


  function startTimer() {
    // var oneSecondInMilliseconds = 1000;
    // not sure what this means
    // var clockIsNotRunning = intervalId === null;

    // if (clockIsNotRunning) {
    //   intervalId = setInterval(function () {
    //     count();
    //   }, oneSecondInMilliseconds);
    // }

    intervalId = setInterval(count, 1 * 1000);

      console.log('time created', intervalId)


  }

  function stopTimer() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }

  function resetTimer() {
    time = 11;
    stopTimer()
    startTimer();
  }




  // ===============================================
  // HELPER FUNCTIONS
  // ===============================================

  function answerHandler(event) {
    if (!isQuestionAnswered) {
      isQuestionAnswered = true;
      stopTimer();
      console.log('you chose: ' + event.target.classList[5] + ' curr corect answer: ' + questionsForGame[whatQuestion].correctAnswer);
      var correctAnswer = questionsForGame[whatQuestion].correctAnswer;
      var chosenAnswer = event.target.classList[5];

      if (correctAnswer === chosenAnswer) {
        console.log('winner!');
        userScore++;
        console.log('user score: ' + userScore);
        prependNewMessage('alert-success', 'Yay! you win!');
        setTimeout(nextQuestion, 1.2 * 1000);
        // resetTimer();

      } else {
        console.log('looooooooser!');
        prependNewMessage('alert-danger', 'NOPE! correct answer: ' + questionsForGame[whatQuestion].correctAnswer);
        setTimeout(nextQuestion, 1.2 * 1000);
        resetTimer();

      }
    }
  }




  function prependNewMessage(type, message) {
    var myMessage = $('<div>');
    myMessage.addClass('alert ' + type + ' alert-dismissible fade show')
      .text(message)
      .append('<button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button>');

    $('.message').prepend(myMessage);
  }

  function startTriviaGame() {
    console.log('startTriviaGame()');
    userScore = 0;
    whatQuestion = 0;
    currListOfAnswers = [];
    isQuestionAnswered = false;

    createButton('a');
    createButton('b');
    createButton('c');
    createButton('d');
    loadQuestionAndAnswers();
    // TODO: start the timer
    startTimer();
  }

  function nextQuestion() {
    //TODO: auto dismiss alert
    $('.alert').alert('close');

    isQuestionAnswered = false;
    whatQuestion++;

    resetTimer(); // 1.

    console.log('what question: ' + whatQuestion + ' < ' + questionsForGame.length);
    if (whatQuestion < questionsForGame.length) {
      clearGameArea();
      loadQuestionAndAnswers();
    } else {
      endOfGameHandler();
    }
  }


  function endOfGameHandler() {
    stopTimer()
    // clear questions and answers
    // display reset button.
    // display results of game. score, etc.
    console.log("I'm the end of game handler.");
    //TODO: clear the div and replace with end of game div
    var endOfGameDiv = $('<div>');
    endOfGameDiv.addClass('container').attr('id', 'end-div');
    var scoreH1 = $('<h1 class="end-game-div" > Game over! you scored: ' + userScore + ' out of ' + questionsForGame.length + '</h1>');
    endOfGameDiv.append(scoreH1);
    // $('#main-container').empty();
    saveThisDiv = $('#save-div').detach();
    console.log('saveThisDiv');
    console.log(saveThisDiv);
    $('#main-container').append(endOfGameDiv);

    var resetBtn = $('<button>')
      .addClass('btn btn-outline-info')
      .attr('type', 'button')
      .attr('id', 'reset-game')
      .text('Reset Game?');
    endOfGameDiv.append(resetBtn);
    //TODO: connect logic to reset button
    $('#reset-game').on('click', function () {
      console.log('reset-game button pressed');
      createDiv();

     // window.location = window.location refreshes the page content without doing a hard reload
     // this is the 'wokring' solution to resetting the game
     // now that the timer issue is fixed, there are some game reset issues that appear
    // e.g. questions array has 2x questions, win conditions are doubly appended, etc. 
       window.location = window.location
      startTriviaGame();
    });
  }

  function createDiv() {

    // THIS is really cool. I should have used this to clear out the main div
    var endGameDiv = $('#end-div').detach();
    console.log(endGameDiv);


    divBeforeDelete.addClass('container main').attr('id', 'main-container');
    var jumboDiv = $('<div>').addClass('jumbotron');
    var qAreah1 = $('<h1>').addClass('display-3').attr('id', 'question-area');
    var ansAreaDiv = $('<div>').attr('id', 'answer-area');

    //connecting puzzle piecies
    jumboDiv.append(qAreah1);
    jumboDiv.append(ansAreaDiv);
    divBeforeDelete.append(jumboDiv);

    $('.game-body').append(divBeforeDelete);

  }


  function loadQuestionAndAnswers() {
    setClickEvents();
    var currentQuestion = questionsForGame[whatQuestion];
    // console.log(currentQuestion);

    $('#question-area').text(currentQuestion.question);

    // checking if available answers go a-d or a-c
    var listOfAnswers = currentQuestion.answers;
    if (listOfAnswers['a']) {
      changeText('a', listOfAnswers['a']);
    }
    if (listOfAnswers['b']) {
      changeText('b', listOfAnswers['b']);
    }
    if (listOfAnswers['c']) {
      changeText('c', listOfAnswers['c']);
    }
    if (listOfAnswers['d']) {
      changeText('d', listOfAnswers['d']);
    }

  }

  function changeText(letter, theAnswer) {
    $('.' + letter).text();
    $('.' + letter).text(letter + '. ' + theAnswer);

  }


  function createButton(letter) {
    var newAnswer = $('<p>').addClass('btn btn-secondary answer btn-lg btn-block ' + letter)
      .attr('id', letter);
    $('#answer-area').append(newAnswer);

  }


  function clearGameArea() {
    $('#question-area').empty();
    $('.progress').empty();

  }



  // end of document.ready
});
