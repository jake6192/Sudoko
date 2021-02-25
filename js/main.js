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

function addHighlight(e) {
  removeHighlight();
  let _value = e.originalEvent.key;
  if((_value>0 && _value<=9) || (`${$(e.target).val()}`.length > 0)) try {
    let valuesToHighlight = (_value ?? $(e.target).val()), rowToHighlight = +$(e.target).attr('row'), columnToHighlight = +$(e.target).attr('column');
    $('.cell').toArray().filter((f) => +$(f).val() === +valuesToHighlight).map((f) => $(f).addClass('highlight3'));
    $(`.box[boxid="${$(e.target).parent().attr('boxid')}"] .cell`).addClass('highlight1');
    $(`.cell[row="${rowToHighlight}"]`).addClass('highlight2');
    $(`.cell[column="${columnToHighlight}"]`).addClass('highlight2');
  } catch(f) { console.log(f); }
}
function removeHighlight() { $('.highlight1, .highlight2, .highlight3').removeClass('highlight1').removeClass('highlight2').removeClass('highlight3'); }
function toggleHighlight(e, dis) {
  if((dis && `${$(e.target).val()}`.length > 0) || (!dis && `${$(this).val()}`.length > 0)) addHighlight(e);
  else removeHighlight();
}

function refreshHighlightEventListener() {
  $($('input.cell').toArray().filter((x) => !$(x).attr('readonly'))).focus(addHighlight).blur(removeHighlight).keyup(toggleHighlight);
  $($('input.cell').toArray().filter((x) =>  $(x).attr('readonly'))).mousedown((e) => { toggleHighlight(e, !0); });
}

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
