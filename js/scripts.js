// //Begin Bussiness Logic
// function gameBoard() {
  
// }

// function WinCondition(){
//   this.cond1 = [1, 2, 3];
//   this.cond2 = [4, 5, 6];
//   this.cond3 = [7, 8, 9];
//   this.cond4 = [1, 4, 7];
//   this.cond5 = [1, 5, 9];
//   this.cond6 = [2, 5, 8];
//   this.cond7 = [3, 6, 9];
//   this.cond8 = [3, 5, 7];
// }

// for (let i = 0; i > arrayWinX; i++){
//   if (arrayWinX[i} == user2) {return true}
    

// let winConditionX = new WinCondition();
// let winCondition0 = new WinCondition();

let winConditionX = [123, 456, 789, 147, 159, 259, 369, 357];
let userInput = [];

function checkScore(){
    if (winConditionX.cond1.includes([1,2,3]) ){
      console.log("Player One Wins!");
    }
  }
//Begin UI Logic
$(document).ready(function() {
  $("#one").click(function(event) {
    $("#one").text("X");
    userInput.push(1);
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#two").click(function(event) {
    $("#two").text("X");
    userInput.push(2);
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#three").click(function(event) {
    $("#three").text("X");
    userInput.push(3);
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#four").click(function(event) {
    $("#four").text("X");
    userInput.push(4);
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#five").click(function(event) {
    $("#five").text("X");
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#six").click(function(event) {
    $("#six").text("X");
    userInput.push(6);
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#seven").click(function(event) {
    $("#seven").text("X");
    userInput.push(7);
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#eight").click(function(event) {
    $("#eight").text("X");
    userInput.push(8);
  event.preventDefault();
  });
});
$(document).ready(function() {
  $("#nine").click(function(event) {
    $("#nine").text("X");
    userInput.push(9);
  event.preventDefault();
  });
});



