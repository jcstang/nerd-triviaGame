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

  // GAME START
  loadQuestionAndAnswers();


  // ===============================================
  // HELPER FUNCTIONS
  // ===============================================
  function startTriviaGame() {
    // load the question
    // load the answers
    // start the timer
  }


  function loadQuestionAndAnswers() {
    clearGameArea();

    var currentQuestion = questionsForGame[whatQuestion];

    $('#question-area').text(currentQuestion.question);

    if (currentQuestion.answers['a']) {
      //display answer a
      // $('#answer-area').append('A. a frog.');
      var newAnswer = $('<li>')
        .text('A. ' + currentQuestion.answers['a'])
        .attr('id', 'answer-a')
        .addClass('btn btn-secondary');
      $('#answer-area').append(newAnswer);
    }

    //keeps track of where we are at in the array. 
    whatQuestion++;
  }

  
  function clearGameArea() {
    $('#question-area').empty();
    $('#answer-area').empty();
  }

});

