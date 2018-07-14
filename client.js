$(document).ready(function() {
  console.log('JQ loaded');
  $('#redBtn').on('click', red);
  $('#blueBtn').on('click', blue);
  $('#greenBtn').on('click', green);
  $('#yellowBtn').on('click', yellow);
  $('#red').on('click', removeRed);
  $('#blue').on('click', removeBlue);
  $('#green').on('click', removeGreen);
  $('#yellow').on('click', removeYellow);
  $('#squares').on('click', '#red', removeRed);
  $('#squares').on('click', '#blue', removeBlue);
  $('#squares').on('click', '#green', removeGreen);
  $('#squares').on('click', '#yellow', removeYellow);
  initialCounts();
});

var redCount = 1;
var blueCount = 1;
var greenCount = 1;
var yellowCount = 1;

function red() {
  $('#squares').append('<div id="red"></div>');
  redCount += 1;
  $('#redPara').text(redCount);
}
function blue() {
  $('#squares').append('<div id="blue"></div>');
  blueCount += 1;
  $('#bluePara').text(blueCount);
}
function green() {
  $('#squares').append('<div id="green"></div>');
  greenCount += 1;
  $('#greenPara').text(greenCount);
}
function yellow() {
  $('#squares').append('<div id="yellow"></div>');
  yellowCount += 1;
  $('#yellowPara').text(yellowCount);
}
function removeRed() {
 $('#red').remove('#red');
  redCount -= 1;
  $('#redPara').text(redCount);
}
function removeBlue() {
  $('#blue').remove('#blue');
   blueCount -= 1;
   $('#bluePara').text(blueCount);
}
function removeGreen() {
  $('#green').remove('#green');
   greenCount -= 1;
   $('#greenPara').text(greenCount);
}
function removeYellow() {
  $('#yellow').remove('#yellow');
   yellowCount -= 1;
   $('#yellowPara').text(yellowCount);
}
function initialCounts() {
  $('#redPara').text(redCount);
  $('#bluePara').text(blueCount);
  $('#greenPara').text(greenCount);
  $('#yellowPara').text(yellowCount);
};