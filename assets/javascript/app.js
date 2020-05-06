$(document).ready(function () {
  //game starts when start button clicked
  $("#start").on("click", function () {
    $("#start").remove();
    game.loadQuestion();
  });

  $(document).on("click", ".answer-button", function (e) {
    game.clicked(e);
  });

  $(document).on("click", "#reset", function (e) {
    game.reset();
  });

  var questions = [
    {
      question: "Who wrote the Harry Potter Series?",
      answers: ["JK Rowling", "Stephen King", "R.L. Stein", "Barack Obama"],
      correctAnswer: "JK Rowling",
      image: "assets/images/jk.jpg",
    },

    {
      question: "How many Houses does Hogwarts have?",
      answers: ["1", "20", "4", "0"],
      correctAnswer: "4",
      image: "assets/images/houses.webp",
    },

    {
      question: "Who killed Harry's parents?",
      answers: ["Snape", "Voldemort", "Dumbledore", "Maleficent"],
      correctAnswer: "Voldemort",
      image: "assets/images/voldemort.webp",
    },

    {
      question: "What wizarding sport is played on brooms?",
      answers: ["Clean the pantry", "Briggam", "Flying Tennis", "Quidditch"],
      correctAnswer: "Quidditch",
      image: "assets/images/quidditch.jpg",
    },

    {
      question: "What pet animal does Harry have?",
      answers: ["Frog", "Owl", "Elephant", "Rat"],
      correctAnswer: "Owl",
      image: "assets/images/hedwig.jpg",
    },

    {
      question: "Who are Harry's best friends?",
      answers: [
        "Fred and George",
        "Thelma and Louise",
        "He doesn't have friends",
        "Ron and Hermione",
      ],
      correctAnswer: "Ron and Hermione",
      image: "assets/images/friends.jpg",
    },

    {
      question:
        "Which of the following is and actual spell from the wizarding world?",
      answers: ["Abracadabra", "Wingardium Leviosa", "Poof", "Lorem ipsum"],
      correctAnswer: "Wingardium Leviosa",
      image: "assets/images/spell.jpg",
    },
  ];

  var timer;

  var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 5,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function () {
      game.counter--;
      $("#counter").html(game.counter);
      if (game.counter <= 0) {
        console.log("TIME UP!");
        game.timeUp();
      }
    },
    loadQuestion: function () {
      timer = setInterval(game.countdown, 1000);
      $("#subwrapper").html("<h2>TIME REMAINING <span id='counter'>30</span> Seconds</h2>");
      $("#subwrapper").append(
        "<h2>" + questions[game.currentQuestion].question + "</h2>"
      );
      for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
        $("#subwrapper").append(
          '<button class="answer-button" id="button-' +
            i +
            '" data-name="' +
            questions[game.currentQuestion].answers[i] +
            '">' +
            questions[game.currentQuestion].answers[i] +
            "</button>"
        );
      }
    },
    nextQuestion: function () {
      game.counter = 30;
      $("#counter").html(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
    },
    timeUp: function () {
      clearInterval(timer);
      game.unanswered++;
      $("#subwrapper").html(
        "<h2>OUT OF TIME! Where's Hermione's time turner when you need it?!</h2>"
      );
      $("#subwrapper").append(
        "<h3>The Correct Answer Was: " +
          questions[game.currentQuestion].correctAnswer +
          "</h3>"
      );
      if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 5 * 1000);
      } else {
        setTimeout(game.nextQuestion, 5 * 1000);
      }
    },
    results: function () {
        clearInterval(timer);
        $('#subwrapper').html("<h2>MISCHIEF MANAGED!</h2>");
        $('#subwrapper').append("<h3>Correct: " +game.correct+"</h3>");
        $("#subwrapper").append("<h3>Incorrect: " + game.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + game.unanswered+ "</h3>");
        $("#subwrapper").append("<button id='reset'>RESET</button>");
    },
    clicked: function (e) {
      clearInterval(timer);
      if (
        $(e.target).data("name") ==
        questions[game.currentQuestion].correctAnswer
      ) {
        game.answeredCorrectly();
      } else {
        game.answeredIncorrectly();
      }
    },
    answeredCorrectly: function () {
      console.log("you got it");
      clearInterval(timer);
      game.correct++;
      $("#subwrapper").html("<h2>YOU GOT IT! 1 Point for GRYFFINDOR!</h2>");
      if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 5 * 1000);
      } else {
        setTimeout(game.nextQuestion, 5 * 1000);
      }
    },
    answeredIncorrectly: function () {
      console.log("wrong");
      clearInterval(timer);
      game.incorrect++;
      $("#subwrapper").html("<h2>WRONG! You must be a MUGGLE!</h2>");
      $("#subwrapper").append(
        "<h3>The Correct Answer Was: " +
          questions[game.currentQuestion].correctAnswer +
          "</h3>"
      );
      if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 5 * 1000);
      } else {
        setTimeout(game.nextQuestion, 5 * 1000);
      }
    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 0;
        game. correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
  }
});
