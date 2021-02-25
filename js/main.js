const BOARD = new Board();
let startTime, endTime;

$(document).ready(() => {
    BOARD.populateBoxes();
    BOARD.populateRows();
    BOARD.populateColumns();
    BOARD.populateCells();
    BOARD.drawBoard();
    BOARD.GAME = new Game();
});

$('.btn').click((e) => {
  startTime = performance.now();
  if($(e.target).attr('id') === 'ran') BOARD.GAME.assignRandomValues();
  else if($(e.target).attr('id') === 'def') BOARD.GAME.assignPredefinedValues();
  else if($(e.target).attr('id') === 'hint') BOARD.GAME.hint();
  else if($(e.target).attr('id') === 'check') alert(BOARD.GAME.check() ? 'Correct!' : 'Keep Trying!');
  else startTime = undefined;
});


function populatePredefinedList() {
  console.log(predefinedGames);
  BOARD.GAME.assignRandomValues(null, function() { populatePredefinedList(); });
}
