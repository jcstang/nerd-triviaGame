// the original stab at the problem

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
  var playerScore = 0;

  //displaying questions
  var whatQuestionAreWeOn = 0;
  var selectedQuestion;
  var currAnswers;
  var currCorrectAnswer;

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



  // ================================================
  // START OF GAME
  // ================================================
  // 1 & 2.
  $('#start-game').on('click', function() {
    startTimer();
  });



  // ================================================
  // displaying question and answers
  // ================================================

  // TODO: pseudo code
  // EVENT 
  // 1a.
  // want to start game? click start button
  // 1b. 
  // display a question, and answers
  // 2. 
  // start timer to count down

  // EVENT
  // 3. time ran out, click of answer
  // reset timer??
  // on click of an answer
    // is it the right answer?
    // if yes, display correct answer and say good job. score++
    // if incorrect, display correct answer and say too bad. 

  // EVENT
  // 4. cooldown timer runs out. 
  // DISPLAY new question. if more quesitons in array.
  // if no more questions, display end of game page.

  // EVENT
  // 5. end of game, cool cool cool
  // reset button to restart game?


  // ================================================
  // EVENTS
  // ================================================
  // add events here


  // ================================================
  // HELPER FUNCTIONS
  // ================================================

  function timesUp() {
    //TODO: if wrong, or timer ran out. show correct answer
    // if answer wrong display wrong message
    // if answer correct display good message
    // if clicked answer === questionsForGame[0].correctAnswer
    

    console.log('times up!!!');
    // stopTimer();
    // // TODO: check for end of game
    // if (whatQuestionAreWeOn < questionsForGame.length) {
    //   setInterval(reset, TIME_BETWEEN_QUESTIONS);
    // }
  }

  function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
  }

  function countDown() {
    time--;
    if (time < 0) {
      timesUp();
    } else {
      console.log(time);
      $('#timer-area').text('game timer: ' + time);
    }

  }

  function startTimer() {
    // $('#question-area').text()
    // TODO: check for end of array
    if ( whatQuestionAreWeOn < questionsForGame.length) {
      displayNextQuestion();
    }

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

  function displayAnswers(myQuestion, letter) {
    var myElement = $('<li></li>')
            .text(myQuestion)
            .attr('id', 'answer-' + letter)
            .attr('class', 'btn btn-secondary');
    $('#answer-area').append(myElement);
  }

  function displayNextQuestion() {
    $('#question-area').empty();
    $('#answer-area').empty();
    console.log('number: ' + whatQuestionAreWeOn + ' length: ' + questionsForGame.length);

    if ( whatQuestionAreWeOn <= questionsForGame.length ) {
      
      currCorrectAnswer = questionsForGame[whatQuestionAreWeOn].correctAnswer;
      console.log('here is currCorrectAnswer: ' + currCorrectAnswer);

      selectedQuestion = questionsForGame[whatQuestionAreWeOn].question;
      console.log('selected question: ' + selectedQuestion);
      
      currAnswers = questionsForGame[whatQuestionAreWeOn].answers;
      console.log('what question are we on? ' + whatQuestionAreWeOn);
      $('#question-area').text( selectedQuestion );

      // some questions have a,b,c some have a,b,c,d
      if ( currAnswers['a'] ) {
        // console.log('has an a');
        displayAnswers( currAnswers['a'], 'a');
      }
      if ( currAnswers['b'] ) {
        // console.log('has a b');
        displayAnswers( currAnswers['b'], 'b');
      }
      if ( currAnswers['c'] ) {
        // console.log('has a c');
        displayAnswers( currAnswers['c'], 'c');
      }
      if ( currAnswers['d'] ) {
        // console.log('has a d');
        displayAnswers( currAnswers['d'], 'd');
      }

      whatQuestionAreWeOn++;
    }
  }

  function startNewGame(){
    // resetScore()
    // setTimer(5, 3000)
    // getPlayerNames()
    // etc....
}


});