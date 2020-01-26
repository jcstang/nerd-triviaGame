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
  $('#answer-a').on('click', function(event) {
    answerHandler('a');
  });

  $('#answer-b').on('click', function(event) {
    answerHandler('b');
  });

  $('#answer-c').on('click', function(event) {
    answerHandler('c');
  });

  $('#answer-d').on('click', function(event) {
    answerHandler('d');
  });



  // ===============================================
  // HELPER FUNCTIONS
  // ===============================================
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
    // load the question
    // load the answers
    // start the timer
    loadQuestionAndAnswers();
  }


  function loadQuestionAndAnswers() {
    clearGameArea();

    var currentQuestion = questionsForGame[whatQuestion];

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
    var newAnswer = $('<li>')
        .text(letter + '. ' + theAnswer)
        .attr('id', 'answer-' + letter)
        .addClass('btn btn-secondary ' + letter);
      $('#answer-area').append(newAnswer);
  }

  function nextQuestion() {
    whatQuestion++;
    loadQuestionAndAnswers();
  }

  
  function clearGameArea() {
    $('#question-area').empty();
    $('#answer-area').empty();
  }




});

