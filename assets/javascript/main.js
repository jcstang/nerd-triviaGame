// main.js
// playing around with different ways to solve the problem

$(document).ready(function () {

  // ================================================
  // GLOBAL VARIABLES
  // ================================================
  const TIME_LIMIT = 6; // num of seconds.
  const TIME_BETWEEN_QUESTIONS = (3 * 1000);  // 1000 = 1 second.
  var intervalId = setInterval(this.countDown, 1000);
  var clockRunning = false;
  var time = TIME_LIMIT;
  var whatQuestionAreWeOn = 0;

  //displaying questions
  var selectedQuestion;
  var currAnswers;

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
  // myQuestions[0].answers["a"]; //returns Superman
  // myQuestions[0].question; // returns "who is....etc"


  // this one works!
  // startTimer();

  function displayNextQuestion() {
    $('#question-area').empty();
    $('#answer-area').empty();

    console.log('number: ' + whatQuestionAreWeOn + ' lenght: ' + questionsForGame.length);
    if ( whatQuestionAreWeOn <= questionsForGame.length ) {
      
      selectedQuestion = questionsForGame[whatQuestionAreWeOn].question;
      console.log('selected question: ' + selectedQuestion);
      
      currAnswers = questionsForGame[whatQuestionAreWeOn].answers;
      console.log('what question are we on? ' + whatQuestionAreWeOn);
      $('#question-area').text( selectedQuestion );

      // TODO: figure out how to cycle thru a-d.
      // some questions have a,b,c some have a,b,c,d

      if ( currAnswers['a'] ) {
        console.log('has an a');
        displayAnswers( currAnswers['a'], 'a');
      }
      if ( currAnswers['b'] ) {
        console.log('has a b');
        displayAnswers('why?', 'b');
      }
      if ( currAnswers['c'] ) {
        console.log('has a c');
        displayAnswers('how?', 'c');
      }
      if ( currAnswers['d'] ) {
        console.log('has a d');
        displayAnswers('when?', 'd');
      }

      whatQuestionAreWeOn++;
    }

  }

  function displayAnswers(myQuestion, letter) {
    var myElement = $('<li></li>')
            .text(myQuestion)
            .attr('id', 'answer-' + letter)
            .attr('class', 'btn btn-secondary');
    $('#answer-area').append(myElement);
  }




  // ================================================
  // displaying question and answers
  // ================================================
  // var myElement = $('<li></li>')
  //   .text('This is some possible answer to quetion')
  //   .attr('id', 'answer-a')
  //   .attr('class', 'btn btn-secondary');
  // $('#answer-area').append(myElement);

  // var currQuestion = $('#question-area').text('When does a cup become a bucket?');
  displayNextQuestion();
  displayNextQuestion();
  // displayNextQuestion();

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
      console.log('helper function call');
      console.log(time);
    }

    // console.log(time);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    // $("#display").text(converted);
  }

  function startTimer() {
    if (!clockRunning) {
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
  }


});