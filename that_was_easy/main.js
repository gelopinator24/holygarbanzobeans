function sayThatWasEasy() {
  var thatWasEasy = new Audio("EasyWeird.mp3");
  thatWasEasy.play();
}
function sayThatWasHard() {
  var thatWasEasy = new Audio("boos3.mp3");
  thatWasEasy.play();
}
$("#easy").on("click", sayThatWasEasy);
$("#hard").on("click", sayThatWasHard);
$(document).keypress(delegateKeypress);
function delegateKeypress(event) {
  if (event.charCode == 32) {
    $("#easy").trigger("click");
  }
}