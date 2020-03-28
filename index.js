// Detecting Button press

var numberOfButtons = document.querySelectorAll(".bn").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".bn")[i].addEventListener("click", function(event) {

    let classes = event.target.classList;


    // Playing sounds

    if (classes.contains("happy")) {
      var hap = new Audio("sounds/hap.mp3");
      hap.play();
    } //  break;

    if (classes.contains("sad")) {
      var sad = new Audio("sounds/sad.mp3");
      sad.play();
    } //  break;

    if (classes.contains("ooh")) {
      var ooh = new Audio("sounds/ooh.mp3");
      ooh.play();
    } //  break;

    if (classes.contains("sohot")) {
      var sohot = new Audio("sounds/sohot.mp3");
      sohot.play();
    } //  break;

    if (classes.contains("yes")) {
      var yes = new Audio("sounds/yes.mp3");
      yes.play();
    } //  break;

    if (classes.contains("hey")) {
      var hey = new Audio("sounds/hey.mp3");
      hey.play();
    } //  break;

    if (classes.contains("bye")) {
      var bye = new Audio("sounds/bye.mp3");
      bye.play();
    } //  break;

    if (classes.contains("omg")) {
      var omg = new Audio("sounds/omg.mp3");
      omg.play();
    } //  break;


  });
}
