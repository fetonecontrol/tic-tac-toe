//Begin Bussiness Logic
function gameBoard() {
  
}

function WinCondition(){
  this.cond1 = [1, 2, 3];
  this.cond2 = [4, 5, 6];
  this.cond3 = [7, 8, 9];
  this.cond4 = [1, 4, 7];
  this.cond5 = [1, 5, 9];
  this.cond6 = [2, 5, 8];
  this.cond7 = [3, 6, 9];
  this.cond8 = [3, 5, 7];
}

let winConditionX = new WinCondition();

//Begin UI Logic
$(document).ready(function() {
  $("#one").click(function(event) {
    $("#one").text("X");
    alert("Nice Work")
  event.preventDefault();
  });
});



