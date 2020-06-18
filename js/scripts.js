//Begin Bussiness Logic
function gameBoard() {
  
}
function WinCondition() {
  winCondition = [];
}

function winCondition(cond1, cond2, cond3, cond4, cond5, cond6, cond7, cond8){
  let cond1 = [1, 2, 3];
  let cond2 = [4, 5, 6];
  let cond3 = [7, 8, 9];
  let cond4 = [1, 4, 7];
  let cond5 = [1, 5, 9];
  let cond6 = [2, 5, 8];
  let cond7 = [3, 6, 9];
  let cond8 = [3, 5, 7];
}
let winConditionX = new WinCondition();

//Begin UI Logic
$(document).ready(function() {
  $("form#one").click(function(event) {
    alert("Nice Work")
  event.preventDefault();
  });
});



