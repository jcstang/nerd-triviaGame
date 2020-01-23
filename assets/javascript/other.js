 // ================================================
  // helper functions
  // ================================================
  // function timesUp() {
  //   console.log('times up!!!');
  //   stopTimer();
  //   setTimeout(reset, TIME_BETWEEN_QUESTIONS);
  // }

  // function stopTimer() {
  //   clearInterval(intervalId);
  //   intervalId = null;
  // }

  // function countDown() {
  //   time--;
  //   if (time <= 0) {
  //     timesUp();
  //   } else {
  //     console.log(time);
  //   }

  //   // console.log(time);
  //   // DONE: Use the variable we just created to show the converted time in the "display" div.
  //   // $("#display").text(converted);
  // }

  // function startTimer() {
  //   if (!clockRunning) {
  //     intervalId = setInterval(countDown, 1000);
  //     clockRunning = true;
  //   }
  // }

  // function displayCurrentTime() {
  //   currentTime = timeConverter(time);

  //   $('#display').text(currentTime);
  // }

  // function reset() {
  //   time = TIME_LIMIT;
  //   clockRunning = false;
  //   startTimer();
  // }


  class Timer {
    constructor(timeLimit, timeBetween) {
      this.timeLimit = timeLimit;
      this.timeBetweenQuestions = timeBetween;
      this.intervalId = null;
      this.clockRunning = false;
      this.timeLeft = timeLimit;
    }

    start() {
      if(!this.clockRunning) {
        this.intervalId = setInterval(this.countDown, 1000);
        this.clockRunning = true;
      }
    }

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    reset() {
      this.timeLeft = this.timeLimit;
      this.clockRunning = false;
      this.start();
    }

    countDown() {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.timesUp();
      } else {
        console.log(this.timeLeft);
      }
    }

    timesUp() {
      console.log('times up!!');
      this.stop();
      setTimeout(this.reset, this.timeBetweenQuestions);
    }
  };