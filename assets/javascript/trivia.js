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

var userScore = 0;
var whatQuestion = 0;
var currListOfAnswers = [];


$(document).ready(function () {

  // ===============================================
  // GAME START
  // ===============================================
  startTriviaGame();


  // ===============================================
  // EVENTS
  // ===============================================
  $('#start-game').on('click', function() {
    nextQuestion();
  });

  $('.a').on('click', function(event) {
    // answerHandler('a');
    answerHandler(event);
  });

  $('.b').on('click', function(event) {
    // answerHandler('b');
    answerHandler(event);
  });

  $('.c').on('click', function(event) {
    // answerHandler('c');
    answerHandler(event);
  });

  $('.d').on('click', function(event) {
    // answerHandler('d');
    answerHandler(event);
  });



  // ===============================================
  // HELPER FUNCTIONS
  // ==============================================

  function answerHandler(event) {
    // console.log(event);
    console.log('you chose: ' + event.target.classList[5] + ' curr corect answer: ' + questionsForGame[whatQuestion].correctAnswer);
    var correctAnswer = questionsForGame[whatQuestion].correctAnswer;
    //FIXME: it's pulling up btn-lg instead of 'a'
    // var chosenAnswer = event.target.classList[3];
    var chosenAnswer = event.target.classList[5];

    if ( correctAnswer === chosenAnswer) {
      console.log('winner!');
      userScore++;
      console.log('user score: ' + userScore);
      prependNewMessage('alert-success', 'Yay! you win!');
      setTimeout(nextQuestion, 1000);
      
    } else {
      console.log('looooooooser!');
      prependNewMessage('alert-danger', 'Thats going to be a NOPE!');
      setTimeout(nextQuestion, 1000);

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
    createButton('a');
    createButton('b');
    createButton('c');
    createButton('d');
    loadQuestionAndAnswers();
    // TODO: start the timer
  }

  function nextQuestion() {
    whatQuestion++;
    console.log('what question: ' + whatQuestion + ' < ' + questionsForGame.length);
    if (whatQuestion < questionsForGame.length) {
      clearGameArea();
      loadQuestionAndAnswers();
    } else {
      // console.log('end of game?');
      endOfGameHandler();
    }
  }

  
  function endOfGameHandler() {
    // clear questions and answers
    // display reset button.
    // display results of game. score, etc.
    console.log("I'm the end of game handler.");
    //TODO: clear the div and replace with end of game div
    $('#main-container')
  }


  function loadQuestionAndAnswers() {
    // clearGameArea();

    var currentQuestion = questionsForGame[whatQuestion];
    // console.log(currentQuestion);

    $('#question-area').text(currentQuestion.question);

    // checking if available answers go a-d or a-c
    var listOfAnswers = currentQuestion.answers;
    if (listOfAnswers['a']) {
      // displayAnswer('a', listOfAnswers['a']);
      changeText('a', listOfAnswers['a']);
    }
    if (listOfAnswers['b']) {
      // displayAnswer('b', listOfAnswers['b']);
      changeText('b', listOfAnswers['b']);
    }
    if (listOfAnswers['c']) {
      // displayAnswer('c', listOfAnswers['c']);
      changeText('c', listOfAnswers['c']);
    }
    if (listOfAnswers['d']) {
      // displayAnswer('d', listOfAnswers['d']);
      changeText('d', listOfAnswers['d']);
    }

    //keeps track of where we are at in the array. 
    // whatQuestion++;
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
  }




});

