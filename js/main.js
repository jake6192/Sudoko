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
  else startTime = undefined;
});
