// TODO: fill out the questions more.

let questionsForGame = [
  {
    question: "Who is gandalf?",
    answers: {
      a: "one of the hobbit guys.",
      b: 'a wizard',
      c: 'Say what?...'
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
    // console.log('you chose: ' + event.target.classList[3]);
    console.log('you chose: ' + event.target.classList[3] + ' curr corect answer: ' + questionsForGame[whatQuestion].correctAnswer);
    var correctAnswer = questionsForGame[whatQuestion].correctAnswer;
    var chosenAnswer = event.target.classList[3];

    if ( correctAnswer === chosenAnswer) {
      console.log('winner!');
      // var myMessage = $('<div>');
      // // myMessage.addClass('alert alert-success').text('Yay!! you win!!!');
      // // $('.message').prepend( myMessage );
      // // $('.message').alert();

      // // dismissable
      // myMessage.addClass('alert alert-success alert-dismissible fade show')
      //   .text('Yay! that is correct!')
      //   .append('<button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button>');
      
      // $('.message').prepend(myMessage);

      prependNewMessage('alert-success', 'Yay! you win!');
      

    } else {
      console.log('looooooooser!');
      prependNewMessage('alert-danger', 'Thats going to be a NOPE!');
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
    // start the timer
  }

  function nextQuestion() {
    whatQuestion++;
    // console.log('whatQuestion: ' + whatQuestion);
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
    var newAnswer = $('<p>').addClass('btn btn-secondary answer ' + letter);
    $('#answer-area').append(newAnswer);
  }

  // function displayAnswer(letter, theAnswer) {
  //   var newAnswer = $('<p>')
  //       .text(letter + '. ' + theAnswer)
  //       .attr('id', letter)
  //       .addClass('btn btn-secondary answer ' + letter);
  //     $('#answer-area').append(newAnswer);

  // }
  
  function clearGameArea() {
    // FIXME: 2nd question not clickable
    $('#question-area').empty();
    // $('#answer-area').empty();
    // $('#answer-area').detach();
    // $('.answer').detach();
  }




});

