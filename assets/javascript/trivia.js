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
    correctAnswer: 'd'
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

  // $('.answer').on('click', function() {
  //   console.log('answer log');
  //   console.log(event);
  // });



  // ===============================================
  // HELPER FUNCTIONS
  // ==============================================

  function answerHandler(event) {
    // console.log(event);
    console.log('you chose: ' + event.target.classList[3]);
    console.log('curr corect answer: ' + questionsForGame[whatQuestion].correctAnswer);
  }

  // function answerHandler(letter) {
  //   var theCorrectAnswer = questionsForGame[whatQuestion].correctAnswer;
  //   console.log('you chose: ' + letter + ' correct answer: ' + theCorrectAnswer);

  //   if ( theCorrectAnswer === letter) {
  //     console.log('winner!');
  //   } else {
  //     console.log('loser!');
  //   }

  // }

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
    console.log('whatQuestion line 101: ' + whatQuestion);
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

