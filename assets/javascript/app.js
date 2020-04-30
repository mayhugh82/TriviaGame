$(document).ready(function() {

var number = 10
var intervalId;

//game starts when start button clicked
$("#start").on("click", function () {
$("#start").hide();


clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);





});

function decrement() {
  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#time-left").html("<h2>" +"Time Remaining "+ number + "</h2>");

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
