$(document).ready(function () {
  var number = 10;
  var intervalId;
  // players scores
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  

  const questionContainerElement = document.getElementById(
    "question-container"
  );
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  let shuffledQuestions, currentQuestionIndex;

  //game starts when start button clicked
  $("#start").on("click", function () {
    $("#start").hide();
    //Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
  });

  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
    });
  }

  const questions = [
    {
      question: "Who wrote the Harry Potter Series?",
      answers: [
        { text: "JK Rowling", correct: true },
        { text: "Stephen King", correct: false },
        { text: "R.L. Stein", correct: false },
        { text: "Barack Obama", correct: false },
      ],
    },

    {
      question: "How many Houses does Hogwarts have?",
      answers: [
        { text: "1", correct: false },
        { text: "20", correct: false },
        { text: "4", correct: true },
        { text: "0", correct: false },
      ],
    },

    {
      question: "Who killed Harry's parents?",
      answers: [
        { text: "Snape", correct: false },
        { text: "Voldemort", correct: true },
        { text: "Dumbledore", correct: false },
        { text: "Maleficent", correct: false },
      ],
    },

    {
      question: "What wizarding sport to they play on brooms?",
      answers: [
        {
          text: "Clean the pantry",
          correct: false,
        },
        { text: "Briggam", correct: false },
        { text: "Flying Tennis", correct: false },
        { text: "Quidditch", correct: true },
      ],
    },

    {
      question: "What pet animal does Harry have?",
      answers: [
        { text: "Frog", correct: false },
        { text: "Owl", correct: true },
        { text: "Elephant", correct: false },
        { text: "Rat", correct: false },
      ],
    },

    {
      question: "Who are Harry's best friends?",
      answers: [
        {
          text: "Fred and George",
          correct: false,
        },
        {
          text: "Thelma and Louise",
          correct: false,
        },
        {
          text: "He doesn't have friends",
          correct: false,
        },
        {
          text: "Ron and Hermione",
          correct: true,
        },
      ],
    },

    {
      question:
        "Which of the following is and actual spell from the wizarding world?",
      answers: [
        { text: "Abracadabra", correct: false },
        {
          text: "Wingardium Leviosa",
          correct: true,
        },
        { text: "Poof", correct: false },
        { text: "Lorem ipsum", correct: false },
      ],
    },
  ];

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
