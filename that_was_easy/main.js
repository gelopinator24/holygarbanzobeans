function sayThatWasEasy() {
  var thatWasEasy = new Audio("EasyWeird.mp3");
  thatWasEasy.play();
}
$("#easy").on("click", sayThatWasEasy);
$(document).keypress(delegateKeypress);
function delegateKeypress(event) {
  if (event.charCode == 32) {
    $("#easy").trigger("click");
  }
}