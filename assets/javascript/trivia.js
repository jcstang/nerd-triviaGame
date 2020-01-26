// TODO: fill out the questions more.

let questionsForGame = [
  {
    question: "Who is gandalf?",
    answers: {
      a: "one of the hobbit guys.",
      b: 'a wizard',
      c: 'Say what?...'
    },
    answersLength: 3,
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
    answersLength: 4,
    correctAnswer: 'b'
  }
];

var userScore = 0;
var whatQuestion = 0;
var currListOfAnswers = [];


$(document).ready(function () {
  // run the stuff here. 
  // load questions

  // ===============================================
  // GAME START
  // ===============================================
  startTriviaGame();


  // ===============================================
  // EVENTS
  // ===============================================
  // FIXME: event listener disappers on load of 2nd question
  $('#start-game').on('click', function() {
    nextQuestion();
  });

  // FIXME: might need to change back to ids
  $('#a').on('click', function(event) {
    answerHandler('a');
  });

  $('#b').on('click', function(event) {
    answerHandler('b');
  });

  $('#c').on('click', function(event) {
    answerHandler('c');
  });

  $('#d').on('click', function(event) {
    answerHandler('d');
  });

  $('.answer').on('click', function() {
    console.log('answer log');
    console.log(event);
  });



  // ===============================================
  // HELPER FUNCTIONS
  // ==============================================

  function answerHandler(letter) {
    var theCorrectAnswer = questionsForGame[whatQuestion].correctAnswer;
    console.log('you chose: ' + letter + ' correct answer: ' + theCorrectAnswer);

    if ( theCorrectAnswer === letter) {
      console.log('winner!');
    } else {
      console.log('loser!');
    }

  }

  function startTriviaGame() {
    loadQuestionAndAnswers();
    // start the timer
  }

  function nextQuestion() {
    whatQuestion++;
    clearGameArea();
    loadQuestionAndAnswers();
  }


  function loadQuestionAndAnswers() {
    // clearGameArea();

    var currentQuestion = questionsForGame[whatQuestion];
    console.log(currentQuestion);
    

    $('#question-area').text(currentQuestion.question);

    var listOfAnswers = currentQuestion.answers;
    if (listOfAnswers['a']) {
      displayAnswer('a', listOfAnswers['a']);
    }
    if (listOfAnswers['b']) {
      displayAnswer('b', listOfAnswers['b']);
    }
    if (listOfAnswers['c']) {
      displayAnswer('c', listOfAnswers['c']);
    }
    if (listOfAnswers['d']) {
      displayAnswer('d', listOfAnswers['d']);
    }

    //keeps track of where we are at in the array. 
    // whatQuestion++;
  }

  function displayAnswer(letter, theAnswer) {
    var newAnswer = $('<p>')
        .text(letter + '. ' + theAnswer)
        .attr('id', letter)
        .addClass('btn btn-secondary answer ' + letter);
      $('#answer-area').append(newAnswer);

  }
  
  function clearGameArea() {
    // FIXME: 2nd question not clickable
    $('#question-area').empty();
    // $('#answer-area').empty();
    // $('#answer-area').detach();
    $('.answer').detach();
  }




});

