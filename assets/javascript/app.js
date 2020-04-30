$(document).ready(function () {
  var number = 10;
  var intervalId;
  const questionContainerElement = document.getElementById(
    "question-container"
  );
  const questionElement = document.getElementById('question')
  const answerButtonsElement = document.getElementById('answer-buttons')
  let shuffledQuestions, currentQuestionIndex
  const questions = [
    {
      question: "Who wrote the Harry Potter Series?",
      answers: [
          {text: 'JK Rowling', correct: true},
          {text: 'Stephen King', correct: false},
      ]
    },
  ];

  //game starts when start button clicked
  $("#start").on("click", function () {
    $("#start").hide();
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    //Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  });

  function setNextQuestion() {
      showQuestion(shuffledQuestions[currentQuestionIndex])
  }

  function showQuestion(question) {
      questionElement.innerText = question.question

  }

  function selectAnswer() {}

  function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #time-left tag.
    $("#time-left").html("<h2>" + "Time Remaining " + number + "</h2>");
    //  Once number hits zero...
    if (number === 0) {
      //  ...run the stop function.
      stop();
      $("#time-left").append("<h2>Time's Up!</h2>");
    }
  }

  function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }
});
