

$(document).ready(function() {
  var wordGuessGame = {
    wordsToPick: {
      genesis: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
        preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
      },
      madonna: {
        picture: "madonna.jpg",
        song: "Material Girl",
        preview: "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c"
      }
    }

  };

    var listOfQuestions = [
      {
        id: 1,
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "he Terminator",
          c: "Waluigi, obviously"
        },
        correctAnswer: "c",
  
      }
    ];


    // console.log(listOfQuestions.question["Who is the strongest?"].answers.a);
    console.log(listOfQuestions[0].question);
    console.log(listOfQuestions[0].answers);
    console.log(listOfQuestions[0].id);
    
    var objKeys = Object.keys(wordGuessGame.wordsToPick);
    console.log(objKeys);
    console.log(objKeys[0]);
    var selectedKey = objKeys[0];
    console.log(wordGuessGame.wordsToPick[selectedKey]);
    
    
    // this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
    



});

