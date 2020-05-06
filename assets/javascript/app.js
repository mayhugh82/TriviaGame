$(document).ready(function () {
  
  //game starts when start button clicked
  $("#start").on("click", function () {
    $("#start").remove();
    game.loadQuestion();
  })
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
      correctAnswer: "JK Rowling",
      image: "assets/images/spell.jpg",
    }];

  var game = {
      questions: questions,
      currentQuestion: 0,
      counter: 30,
      correct: 0,
      incorrect: 0,
      countdown: function(){
           game.counter--;
          $('#counter').html(game.counter);
          if(game.counter <=0){
          console.log("TIME UP!");
          game.timeUp();
          }
        },
      loadQuestion: function(){
           timer = setInterval(game.countdown,1000);
          $('#subwrapper').html('<h2>'+questions[game.currentQuestion].question+'</h2>');
           for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
           }
      },
      nextQuestion: function(){

      },
      timeUp: function(){

      },
      results: function(){

      },
      clicked: function(){

      },
      answeredCorrectly: function(){

      },
      answeredIncorrectly: function(){

      },
      reset: function(){

      }
    }

});
