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

function arr_diff(a1, a2) {
  let a = [], diff = [];
  for(let i = 0; i < a1.length; i++) a[a1[i]] = true;
  for(let i = 0; i < a2.length; i++) {
    if(a[a2[i]]) delete a[a2[i]];
    else a[a2[i]] = true;
  }
  for(let k in a) diff.push(k);
  return diff;
}
