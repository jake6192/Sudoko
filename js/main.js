/******************************
***   Game Initialisation   ***
******************************/

const BOARD = new Board();
let startTime, endTime;

$(document).ready(() => {
  BOARD.populateBoxes();
  BOARD.populateRows();
  BOARD.populateColumns();
  BOARD.populateCells();
  BOARD.drawBoard();
  BOARD.GAME = new Game();

  $('#extraHighlight').attr('checked', false);
});


/*********************
***   DOM Events   ***
*********************/

$('.btn').click((e) => {
  startTime = performance.now();
  if($(e.target).attr('id') === 'note') toggleNotes();
  else if($(e.target).attr('id') === 'ran') BOARD.GAME.assignRandomValues();
  else if($(e.target).attr('id') === 'def') BOARD.GAME.assignPredefinedValues();
  else if($(e.target).attr('id') === 'hint') BOARD.GAME.hint();
  else if($(e.target).attr('id') === 'check') alert(BOARD.GAME.check() ? 'Correct!' : 'Keep Trying!');
  else startTime = undefined;
});

function toggleNotes() {
  if($('#note').hasClass('active')) {
    $('#note').removeClass('active')
    $('input.cell').off('keydown');
    refreshHighlightEventListener();
  } else {
    $('#note').addClass('active')
    $('input.cell').off('keyup');
    $($('input.cell').toArray().filter((x) => !$(x).attr('readonly'))).keydown(function(e) {
      e.preventDefault();
      let noteStr = $(this).parent().attr('notes');
      let valueToNote = +e.originalEvent.key;
      if(e.originalEvent.key == "Backspace") {
        let tmp = noteStr.split(' ');
        tmp.pop()
        noteStr = (tmp.length>1 ? tmp.join(' ') : (tmp.length===1 ? tmp[0] : ''));
      } else if(!isNaN(valueToNote)) noteStr += (noteStr.length>0 ? ' ' : '')+valueToNote;
      else return;
      $(this).parent().attr('notes', noteStr);
      toggleHighlight(e, !0);
    });
  }
}


/****************************
***   Cell Highlighting   ***
****************************/

function refreshHighlightEventListener() {
  $($('input.cell').toArray().filter((x) => !$(x).attr('readonly'))).focus(addHighlight).blur(removeHighlight).keyup(toggleHighlight);
  $($('input.cell').toArray().filter((x) =>  $(x).attr('readonly'))).mousedown((e) => { toggleHighlight(e, !0); });
}

function addHighlight(e) {
  removeHighlight();
  let _value = e.originalEvent.key;
  if((_value>0 && _value<=9) || (`${$(e.target).val()}`.length > 0)) try {
    let valuesToHighlight = (_value ?? $(e.target).val()), rowToHighlight = +$(e.target).attr('row'), columnToHighlight = +$(e.target).attr('column');
    let highlightExtraAreas = ($('#extraHighlight').is(':checked') === true), xRowsToHighlight = [], xColumnsToHighlight = [], xBoxesToHighlight = [];
    $('.cell').toArray().filter((f) => +$(f).val() === +valuesToHighlight).map((f) => {
      $(f).addClass('highlight3');
      xRowsToHighlight.push(+$(f).attr('row'));
      xColumnsToHighlight.push(+$(f).attr('column'));
      xBoxesToHighlight.push(+$(f).parent().parent().attr('boxid'));
    });
    $(`.box[boxid="${$(e.target).parent().parent().attr('boxid')}"] .cell`).addClass('highlight1');
    $(`.cell[row="${rowToHighlight}"]`).addClass('highlight2');
    $(`.cell[column="${columnToHighlight}"]`).addClass('highlight2');
    if(highlightExtraAreas) {
      xBoxesToHighlight.map((f) => $(`.box[boxid="${f}"] .cell`).addClass('highlight1'));
      xRowsToHighlight.map((f) => $(`.cell[row="${f}"]`).addClass('highlight2'));
      xColumnsToHighlight.map((f) => $(`.cell[column="${f}"]`).addClass('highlight2'));
    }
  } catch(f) { console.log(f); }
}
function removeHighlight() { $('.highlight1, .highlight2, .highlight3').removeClass('highlight1').removeClass('highlight2').removeClass('highlight3'); }
function toggleHighlight(e, dis) {
  if(e.type === "mousedown" || e.originalEvent.key === 'Backspace' || !isNaN(e.originalEvent.key)) {
    if((dis && `${$(e.target).val()}`.length > 0) || (!dis && `${$(this).val()}`.length > 0)) addHighlight(e);
    else removeHighlight();
  }
}


/****************************
***   Development Tools   ***
****************************/

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
