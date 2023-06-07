var click = 0;
var currentNumber = 1;
var num1 = null;
var num2 = null;

var $screen = $("#screen");
var $number = $(".number");


$number.on('click', function() {
  click++;
  if (click > 10){
   return;
  }
  var numberPressed = $(this).html();
  $screen.append(numberPressed);
  $("#clear").css('background-color', '#add8e6');

  if (currentNumber == 1) {
 
   if (num1 == null) {
    num1 = numberPressed;
   } else {
    num1 = num1 + numberPressed;
   }
   }
  if (currentNumber == 2) {
 
   if (num2 == null) {
    num2 = numberPressed;
   } else {
    num2 = num2 + numberPressed;
   }
   $("#equals").css('background-color', '#add8e6');
}
});

function more(){
 if (click > 10){
  click = click - 5;
 }
 if (currentNumber == 2) {
  findAnswer();
  $screen.empty();
  $screen.append(num1);
 }
 currentNumber = 2;
}
$("#plus").on('click', function()
     {
     if(num1 != null) {
      more();
      $screen.append("+");
      op = "+";
      /* currentNumber++; */
     }
     return;
     });
$("#minus").on('click', function()
     {
     if(num1 != null) {
      more();
      $screen.append("-");
      op = "-";
      /* currentNumber++; */
     }
     return;
     });
$("#times").on('click', function()
     {
     if(num1 != null) {
      more();
      $screen.append("x");
      op = "x";
      /* currentNumber++; */
     }
     return;
     });
$("#divide").on('click', function()
     {
     if(num1 != null) {
      more();
      $screen.append("/");
      op = "/";
      /* currentNumber++; */
     }
     return;
     });

$("#clear").on('click', function()
     {
     $screen.empty();
     num1 = null;
     num2 = null;
     currentNumber = 1;
     click = 0;
     $("#clear").css('background-color', '#316a7c');
     $("#equal").css('background-color', '#316a7c');
     });

function findAnswer() {
 num1 = parseInt(num1);
 num2 = parseInt(num2);
  if (op == "+") {
   answer = num1 + num2;
  }
  if (op == "-") {
   answer = num1 - num2;
  }
  if (op == "x") {
   answer = num1 * num2;
  }
  if (op == "/") {
   answer = num1 / num2;
  }
  num1 = answer;
  num2 = null;
  currentNumber = 1;
}
$("#equals").on('click', function()
     {
    var element = document.getElementById('equals');
    var style = window.getComputedStyle(element);     
    var backgroundColor = "background-color";
    var buttonColor = element.style.backgroundColor;
    if(buttonColor == 'gray') {
     return;
    }

     $screen.append("=");
     findAnswer();
     if (click > 10){
      $screen.empty();
      var answerLength = answer.toString();
      click = answerLength.length;
     }
     $screen.append(answer);
     });