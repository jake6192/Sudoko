const predefinedGames = [[1,2,3,4,6,5,9,8,7,9,5,4,3,8,7,2,1,6,8,6,7,2,1,9,3,4,5,5,9,6,1,3,8,4,7,2,3,7,8,9,4,2,5,6,1,2,4,1,5,7,6,8,3,9,6,1,9,8,2,3,7,5,4,4,3,5,7,9,1,6,2,8,7,8,2,6,5,4,1,9,3],[1,2,4,8,9,3,6,7,5,8,7,9,6,5,4,2,3,1,6,3,5,1,7,2,4,9,8,9,5,3,4,6,1,7,8,2,7,6,8,9,2,5,3,1,4,2,4,1,3,8,7,5,6,9,5,9,7,2,3,8,1,4,6,4,8,2,7,1,6,9,5,3,3,1,6,5,4,9,8,2,7],[1,2,7,9,6,3,5,4,8,5,9,8,2,1,4,6,7,3,4,6,3,7,5,8,2,1,9,6,7,1,3,2,9,8,5,4,2,3,4,1,8,5,7,9,6,8,5,9,6,4,7,3,2,1,3,8,5,4,7,1,9,6,2,7,1,6,8,9,2,4,3,5,9,4,2,5,3,6,1,8,7],[1,3,7,4,8,5,9,2,6,6,2,4,1,3,9,8,5,7,8,5,9,6,7,2,1,4,3,9,1,3,5,4,6,2,7,8,2,6,8,3,9,7,4,1,5,4,7,5,2,1,8,3,6,9,7,8,2,9,5,1,6,3,4,3,9,6,7,2,4,5,8,1,5,4,1,8,6,3,7,9,2],[1,3,7,8,6,2,9,4,5,2,8,4,3,9,5,1,7,6,5,9,6,7,4,1,3,8,2,8,2,3,4,5,9,6,1,7,7,6,1,2,3,8,4,5,9,4,5,9,6,1,7,8,2,3,9,4,5,1,7,6,2,3,8,3,7,2,9,8,4,5,6,1,6,1,8,5,2,3,7,9,4],[1,3,9,4,6,5,8,2,7,2,4,7,3,9,8,6,1,5,5,6,8,2,1,7,9,3,4,3,9,2,7,5,1,4,8,6,6,7,4,8,2,9,1,5,3,8,5,1,6,3,4,2,7,9,4,2,5,9,8,3,7,6,1,7,1,6,5,4,2,3,9,8,9,8,3,1,7,6,5,4,2],[1,9,7,4,6,3,8,5,2,6,5,3,7,2,8,9,4,1,8,2,4,5,1,9,6,7,3,2,6,5,9,4,7,1,3,8,3,8,9,1,5,2,7,6,4,4,7,1,8,3,6,5,2,9,5,1,8,3,7,4,2,9,6,9,4,6,2,8,5,3,1,7,7,3,2,6,9,1,4,8,5],[2,8,7,5,1,4,3,9,6,6,4,9,3,7,8,5,2,1,3,5,1,6,9,2,7,4,8,5,6,3,2,4,9,8,1,7,1,7,4,8,5,6,2,3,9,8,9,2,7,3,1,6,5,4,7,1,6,9,2,3,4,8,5,4,3,5,1,8,7,9,6,2,9,2,8,4,6,5,1,7,3],[2,9,1,6,8,7,4,3,5,8,7,5,3,2,4,6,9,1,3,6,4,9,5,1,7,8,2,5,3,2,1,6,8,9,4,7,9,1,6,7,4,2,3,5,8,4,8,7,5,9,3,2,1,6,1,4,3,2,7,5,8,6,9,7,5,9,8,3,6,1,2,4,6,2,8,4,1,9,5,7,3],[2,9,3,7,1,5,6,4,8,8,7,5,6,9,4,2,3,1,1,6,4,2,3,8,9,5,7,9,4,8,3,5,6,7,1,2,5,3,7,9,2,1,8,6,4,6,2,1,8,4,7,3,9,5,7,5,6,1,8,9,4,2,3,4,8,2,5,6,3,1,7,9,3,1,9,4,7,2,5,8,6],[2,9,7,8,4,3,6,5,1,3,8,5,9,1,6,4,7,2,1,4,6,2,5,7,8,9,3,6,3,8,4,7,2,9,1,5,7,2,1,5,6,9,3,4,8,4,5,9,1,3,8,7,2,6,8,7,2,6,9,1,5,3,4,9,1,4,3,8,5,2,6,7,5,6,3,7,2,4,1,8,9],[3,2,8,1,7,4,6,5,9,5,9,1,3,6,2,8,7,4,7,4,6,9,8,5,2,1,3,8,3,9,5,4,1,7,2,6,4,5,2,6,9,7,3,8,1,6,1,7,2,3,8,9,4,5,9,7,4,8,5,3,1,6,2,2,6,5,7,1,9,4,3,8,1,8,3,4,2,6,5,9,7],[3,2,8,5,1,4,7,9,6,7,6,1,2,9,8,3,4,5,9,5,4,7,6,3,1,2,8,2,9,3,6,4,5,8,7,1,1,7,5,8,3,2,9,6,4,4,8,6,1,7,9,5,3,2,6,1,2,3,5,7,4,8,9,8,3,9,4,2,1,6,5,7,5,4,7,9,8,6,2,1,3],[3,9,7,5,1,8,6,2,4,2,6,1,9,4,7,8,5,3,8,4,5,2,6,3,7,9,1,4,5,3,6,9,1,2,7,8,9,1,8,7,3,2,5,4,6,7,2,6,8,5,4,1,3,9,1,8,9,3,7,5,4,6,2,6,7,2,4,8,9,3,1,5,5,3,4,1,2,6,9,8,7],[3,9,7,8,5,4,2,1,6,8,1,6,7,9,2,3,5,4,4,5,2,3,1,6,9,7,8,9,6,4,2,3,5,7,8,1,7,8,5,1,6,9,4,3,2,1,2,3,4,8,7,6,9,5,6,3,8,9,4,1,5,2,7,5,7,9,6,2,8,1,4,3,2,4,1,5,7,3,8,6,9],[4,1,2,6,8,7,9,5,3,3,5,6,2,9,4,8,7,1,8,7,9,3,5,1,4,6,2,5,4,3,7,1,8,2,9,6,9,6,8,5,2,3,1,4,7,1,2,7,9,4,6,3,8,5,6,8,4,1,7,2,5,3,9,7,9,1,8,3,5,6,2,4,2,3,5,4,6,9,7,1,8],[4,1,3,8,7,6,5,2,9,2,5,9,4,3,1,6,8,7,7,6,8,5,2,9,3,4,1,8,7,1,2,5,4,9,6,3,5,4,2,9,6,3,1,7,8,9,3,6,7,1,8,4,5,2,1,8,7,6,9,5,2,3,4,3,2,5,1,4,7,8,9,6,6,9,4,3,8,2,7,1,5],[4,7,6,2,5,9,8,3,1,8,2,9,3,4,1,7,6,5,3,5,1,7,8,6,4,2,9,5,9,3,6,1,4,2,7,8,1,6,2,8,3,7,5,9,4,7,8,4,5,9,2,3,1,6,6,3,8,1,7,5,9,4,2,9,1,5,4,2,3,6,8,7,2,4,7,9,6,8,1,5,3],[5,1,4,6,2,8,7,3,9,7,8,3,5,9,4,2,1,6,9,2,6,7,3,1,4,8,5,2,9,5,1,7,6,3,4,8,4,3,1,9,8,5,6,2,7,6,7,8,2,4,3,9,5,1,8,4,7,3,1,9,5,6,2,1,6,9,4,5,2,8,7,3,3,5,2,8,6,7,1,9,4],[5,1,9,6,7,3,8,2,4,4,7,8,5,9,2,6,3,1,2,6,3,4,8,1,9,5,7,8,4,5,9,2,6,1,7,3,3,9,6,1,4,7,2,8,5,1,2,7,8,3,5,4,6,9,7,3,4,2,1,8,5,9,6,9,5,2,7,6,4,3,1,8,6,8,1,3,5,9,7,4,2],[5,7,3,9,6,2,4,1,8,2,6,8,1,3,4,7,5,9,9,4,1,5,8,7,6,2,3,7,5,6,2,1,9,8,3,4,1,8,4,6,7,3,5,9,2,3,9,2,8,4,5,1,7,6,8,3,5,4,9,1,2,6,7,6,2,9,7,5,8,3,4,1,4,1,7,3,2,6,9,8,5],[5,8,6,9,3,1,2,7,4,3,2,4,5,6,7,8,9,1,1,9,7,2,4,8,3,6,5,4,1,3,6,8,5,9,2,7,7,6,2,1,9,4,5,8,3,9,5,8,3,7,2,4,1,6,2,3,1,8,5,6,7,4,9,8,4,9,7,1,3,6,5,2,6,7,5,4,2,9,1,3,8],[6,2,3,4,8,5,1,9,7,1,7,9,2,6,3,4,8,5,4,5,8,7,1,9,3,6,2,8,4,1,5,2,7,6,3,9,9,3,2,1,4,6,7,5,8,5,6,7,3,9,8,2,4,1,2,9,5,6,3,1,8,7,4,7,1,6,8,5,4,9,2,3,3,8,4,9,7,2,5,1,6],[6,3,9,7,8,5,2,1,4,7,4,2,1,3,6,5,8,9,1,8,5,9,4,2,6,7,3,3,2,6,5,7,1,9,4,8,4,5,7,3,9,8,1,6,2,8,9,1,2,6,4,7,3,5,9,7,4,6,2,3,8,5,1,5,6,3,8,1,9,4,2,7,2,1,8,4,5,7,3,9,6],[6,4,2,5,3,7,1,8,9,7,5,1,9,6,8,3,2,4,9,8,3,1,4,2,6,7,5,4,1,6,3,8,5,7,9,2,3,7,8,2,9,1,5,4,6,2,9,5,6,7,4,8,3,1,8,3,9,4,1,6,2,5,7,5,6,4,7,2,3,9,1,8,1,2,7,8,5,9,4,6,3],[6,4,9,8,7,3,5,1,2,3,5,8,9,2,1,4,7,6,7,2,1,5,6,4,3,9,8,2,8,5,3,1,9,6,4,7,4,1,7,6,5,2,8,3,9,9,6,3,7,4,8,1,2,5,8,3,6,4,9,7,2,5,1,5,9,2,1,3,6,7,8,4,1,7,4,2,8,5,9,6,3],[6,8,2,1,3,7,5,4,9,3,4,9,2,5,8,1,6,7,1,7,5,9,4,6,2,3,8,2,6,1,8,7,3,9,5,4,7,5,8,4,1,9,3,2,6,4,9,3,5,6,2,7,8,1,8,3,6,7,9,5,4,1,2,5,1,7,6,2,4,8,9,3,9,2,4,3,8,1,6,7,5],[7,1,4,2,6,3,9,5,8,9,8,2,4,5,7,1,3,6,6,5,3,8,1,9,4,2,7,8,4,6,5,9,2,3,7,1,5,9,1,3,7,6,8,4,2,2,3,7,1,8,4,5,6,9,4,7,5,9,2,1,6,8,3,1,2,8,6,3,5,7,9,4,3,6,9,7,4,8,2,1,5],[7,3,6,8,9,5,2,4,1,5,9,4,6,1,2,7,3,8,2,1,8,4,7,3,9,6,5,1,4,9,3,5,6,8,7,2,8,7,3,1,2,4,6,5,9,6,5,2,9,8,7,3,1,4,4,2,7,5,6,9,1,8,3,9,8,5,7,3,1,4,2,6,3,6,1,2,4,8,5,9,7],[7,5,3,6,9,4,1,8,2,4,6,8,1,2,5,9,7,3,9,1,2,7,8,3,5,4,6,8,2,6,4,1,9,3,5,7,3,4,7,2,5,8,6,1,9,1,9,5,3,7,6,8,2,4,6,7,9,8,4,1,2,3,5,2,3,1,5,6,7,4,9,8,5,8,4,9,3,2,7,6,1],[7,5,4,8,1,9,6,3,2,3,6,1,7,2,5,9,4,8,2,8,9,6,4,3,7,5,1,5,7,6,9,8,1,4,2,3,4,2,3,5,6,7,1,8,9,9,1,8,4,3,2,5,6,7,8,3,5,1,7,4,2,9,6,6,4,7,2,9,8,3,1,5,1,9,2,3,5,6,8,7,4],[7,5,9,8,6,3,4,2,1,6,4,3,1,9,2,7,5,8,8,1,2,5,7,4,3,9,6,9,6,7,2,1,5,8,4,3,3,2,5,4,8,7,6,1,9,4,8,1,6,3,9,2,7,5,2,9,4,3,5,8,1,6,7,1,7,8,9,2,6,5,3,4,5,3,6,7,4,1,9,8,2],[7,8,1,2,5,3,4,9,6,9,5,2,4,6,8,7,3,1,4,6,3,7,1,9,8,2,5,8,1,6,9,4,2,5,7,3,2,9,7,1,3,5,6,4,8,5,3,4,6,8,7,2,1,9,1,4,5,3,7,6,9,8,2,6,7,9,8,2,1,3,5,4,3,2,8,5,9,4,1,6,7],[7,8,5,2,9,1,4,6,3,4,2,1,6,3,5,8,7,9,6,3,9,8,7,4,1,5,2,5,4,7,9,1,6,2,3,8,2,9,8,3,5,7,6,1,4,3,1,6,4,8,2,5,9,7,9,6,3,5,2,8,7,4,1,1,5,2,7,4,9,3,8,6,8,7,4,1,6,3,9,2,5],[7,9,5,3,2,8,1,4,6,1,4,3,7,6,5,2,8,9,8,6,2,1,9,4,7,3,5,6,8,1,9,3,2,4,5,7,4,3,7,5,8,6,9,1,2,2,5,9,4,1,7,8,6,3,3,7,8,2,5,1,6,9,4,9,2,6,8,4,3,5,7,1,5,1,4,6,7,9,3,2,8],[8,3,4,1,6,9,5,2,7,5,2,6,8,7,3,1,9,4,7,1,9,5,2,4,3,8,6,3,4,1,6,9,8,7,5,2,2,9,7,3,1,5,4,6,8,6,5,8,7,4,2,9,3,1,1,7,3,2,5,6,8,4,9,9,6,5,4,8,7,2,1,3,4,8,2,9,3,1,6,7,5],[8,3,5,7,2,6,1,9,4,4,2,1,5,9,8,7,6,3,7,9,6,4,1,3,2,8,5,2,1,9,6,4,7,5,3,8,5,6,8,1,3,2,9,4,7,3,4,7,8,5,9,6,2,1,9,7,4,2,8,1,3,5,6,1,8,3,9,6,5,4,7,2,6,5,2,3,7,4,8,1,9],[8,3,9,6,5,4,1,2,7,1,2,4,8,7,9,3,5,6,7,5,6,1,3,2,8,9,4,6,9,1,5,2,3,4,7,8,3,8,5,4,1,7,2,6,9,4,7,2,9,6,8,5,3,1,2,6,3,7,8,1,9,4,5,9,1,7,3,4,5,6,8,2,5,4,8,2,9,6,7,1,3],[9,4,8,3,2,1,7,5,6,1,7,3,4,5,6,2,9,8,2,5,6,8,9,7,4,1,3,6,9,2,5,1,3,8,7,4,3,1,7,2,8,4,9,6,5,5,8,4,7,6,9,1,3,2,7,3,9,6,4,8,5,2,1,8,2,1,9,3,5,6,4,7,4,6,5,1,7,2,3,8,9],[9,5,7,1,3,8,6,2,4,6,4,8,2,7,9,3,1,5,3,1,2,5,4,6,9,8,7,1,6,3,8,2,7,5,4,9,7,8,5,9,6,4,1,3,2,4,2,9,3,5,1,8,7,6,5,3,6,7,1,2,4,9,8,2,9,4,6,8,3,7,5,1,8,7,1,4,9,5,2,6,3]];

class Game {
  constructor() {
    this.assignPredefinedValues = (gameNumber) => {
      this.clearValues();
      let RAN = (Math.floor(Math.random() * predefinedGames.length) + 1)-1;
      for(var i = 0; i < 81; i++) {
        let cell = BOARD.cells[i];
        cell.value = predefinedGames[gameNumber ?? RAN][i];
        cell.valueIsHidden = !1;
        cell.drawValue();
        $('.info').text(`Loaded game #${(gameNumber ?? RAN)+1}`);
      }
      BOARD.startingDigits = BOARD.SDArr[$('input[type="range"]').val()-1];
      BOARD.GAME.hideValues();
      setTimeout(function() { refreshHighlightEventListener(); }, 1500);
    };

    /********************************************************
    // Generate random boards until a valid game is found. //
    ********************************************************/
    this.randomGenerator = new RandomGenerator();
    this.assignRandomValues = (populatePDfList) => {
      this.clearValues();
      startTime = performance.now();
      let values = this.randomGenerator.start();
      for(var i = 0; i < 81; i++) {
        let cell = BOARD.cells[i];
        cell.value = values[i];
        cell.valueIsHidden = !1;
        cell.drawValue();
      }
      BOARD.startingDigits = BOARD.SDArr[$('input[type="range"]').val()-1];
      BOARD.GAME.hideValues();
      endTime = performance.now(); // Mark end time for successful game generation. //
      let str = `%cSuccess! %cGeneration took %c${((endTime-startTime)/1000).toFixed(5)} seconds.`; // String formatted for logging + style. //
      console.log(str, 'color:#0f0;font-weight:600','','font-size:13px;text-decoration:underline'); // Log str with addittional stylings. //
      $('.info').text(str.split('%c').join('')); // Display str on page with format corrected. //
      setTimeout(function() { refreshHighlightEventListener(); }, 1500);
      if(populatePDfList) { // populatePDfList - Development tool to generate random games to fill predefinedGames[[]] with. //
        predefinedGames.push(BOARD.GAME.saveValuesToJSON());
        predefinedGames.sort((a, b) => a[0]-b[0]===0?a[1]-b[1]===0?a[2]-b[2]===0?a[3]-b[3]:a[2]-b[2]:a[1]-b[1]:a[0]-b[0]); // Sort numerically by first 4 digits in array. //
        populatePDfList(((endTime-startTime)/1000).toFixed(5));
      }
    };

    this.hideValues = () => {
      for(let i = 0; i < (81-BOARD.startingDigits); i++) {
        let interval = setInterval(function() {
          let RAN = Math.floor(Math.random() * 81) + 1;
          if(!BOARD.cells[RAN-1].valueIsHidden) {
            BOARD.cells[RAN-1].hideValue();
            clearInterval(interval);
          }
        }, 1);
      }
    };

    this.saveValuesToJSON = () => {
      let arr = [];
      for(var i = 0; i < 81; i++) arr.push(BOARD.cells[i].value);
      return arr;
    };

    this.clearValues = () => {
      $('.cell').val('').attr('readonly', !0).parent().attr('notes', '');
      for(let i = 0; i < 81; i++) {
        BOARD.cells[i].value = undefined;
        BOARD.cells[i].valueIsHidden = !1;
      }
    };

    this.hint = () => {
      let interval = setInterval(function() {
        let RAN = Math.floor(Math.random() * 81) + 1, cell = BOARD.cells[RAN-1];
        if(cell.valueIsHidden && $(`.cell[cellid="${cell.cellID}"]`).val() === '') {
          cell.showHint();
          clearInterval(interval);
        }
      }, 1);
    };

    this.check = () =>  ($('.cell').toArray().sort((a, b) => $(a).attr('cellid') - $(b).attr('cellid')).map((e) => +$(e).val()).toString() === BOARD.GAME.saveValuesToJSON().toString());
  }
}


class Board {
  constructor() {
    this.boxes   = [];
    this.rows    = [];
    this.columns = [];
    this.cells   = [];
    this.SDArr   = [30,28,26,24,22,20,18,15,10,5];
    this.startingDigits;

    this.populateBoxes   = () => { for(let i = 0; i < 9; i++) this.boxes.push(new Box(i+1)); };
    this.populateRows    = () => { for(let i = 0; i < 9; i++) this.rows.push(new Row(i+1)); };
    this.populateColumns = () => { for(let i = 0; i < 9; i++) this.columns.push(new Column(i+1)); };
    this.populateCells = () => {
      for(let i = 0; i < 81; i++) {
        let cell = new Cell(i+1);
        this.cells.push(cell);
        this.boxes[cell.box.boxNumber-1].cells.push(cell);
        this.rows[cell.row.rowNumber-1].cells.push(cell);
        this.columns[cell.column.columnNumber-1].cells.push(cell);
      }
    };

    this.drawBoard = () => {
      $('#container').html('');
      for(let i = 0; i < 9; i++) {
        $('#container').append(`<div class="box" boxID="${i+1}"></div>`);
        for(let j = 0; j < 9; j++) {
          let cell = this.boxes[i].cells[j];
          $(`#container > .box[boxID="${i+1}"]`).append(`<div notes="" class="cellContainer"><input readonly type="text" class="cell" cellID="${cell.cellID}" row="${cell.row.rowNumber}" column="${cell.column.columnNumber}" /></div>`);
        }
      }
    };
  }
}


class Box {
  constructor(boxNumber) {
    this.boxNumber = boxNumber;
    this.cells = [];

    this.getEmptyCells = () => this.cells.filter((e) => e.value === undefined);
    this.containsValue = (value) => (this.cells.filter((e) => e.value === value).length > 0);
  }
}


class Row {
  constructor(rowNumber) {
    this.rowNumber = rowNumber;
    this.cells = [];

    this.containsValue = (value) => (this.cells.filter((e) => e.value === value).length > 0);
  }
}



class Column {
  constructor(columnNumber) {
    this.columnNumber = columnNumber;
    this.cells = [];

    this.containsValue = (value) => (this.cells.filter((e) => e.value === value).length > 0);
  }
}


class Cell {
  constructor(cellID) {
    this.value;
    this.cellID = cellID;
    // Calculate Row. //
    this.row = BOARD.rows[Math.floor((this.cellID+8)/9)-1];
    // Calculate Column. //
    for(let i = 0, a = [9,8,7,6,5,4,3,2,1]; i < 9; i++)
      if((this.cellID+i)%9 === 0) this.column = BOARD.columns[a[i]-1];
    // Calculate Box. //
    let r3 = this.row.rowNumber > 3, r6 = this.row.rowNumber > 6, c3 = this.column.columnNumber > 3, c6 = this.column.columnNumber > 6;
    this.box = BOARD.boxes[(c3 ? (c6 ? ( r3 ? ( r6 ? 9 : 6 ) : 3 ) : ( r3 ? ( r6 ? 8 : 5 ) : 2 )) : ( r3 ? (r6 ? 7 : 4) : 1 ))-1];

    this.drawValue = () => { $(`.cell[cellID="${this.cellID}"]`).val(`${this.value}`); };

    this.showHint = () => {
      $(`.cell[cellID="${this.cellID}"]`).val(this.value).attr('readonly', !0);
      this.valueIsHidden = !1;
      refreshHighlightEventListener();
    };

    this.hideValue = () => {
      $(`.cell[cellID="${this.cellID}"]`).val('').removeAttr('readonly');
      this.valueIsHidden = !0;
    };
  }
}



class RandomGenerator {
  constructor() {
    this.cells = [];

    this.makeRows = function(row) {
      var puzzle = [];
      for(let i = 0; i < row.length; i++) puzzle.push(row.slice());
      return puzzle;
    };

    this.permuteRow = function(row, p) {
      for(let i = 0; i < p; i++)
        row.push(row.shift());
      return row;
    };

    this.permutePuzzle = function(puzzle, perms) {
      for(var i=0; i<perms.length; i++)
        puzzle[i + 1] = this.permuteRow(puzzle[i + 1], perms[i]);
      return puzzle;
    };

    this.linearSearch = function(array, item) {
      for(var i = 0; i < array.length; i++)
        if(array[i] == item)
          return true;
      return false;
    };

    this.checkColumn = function(puzzle, j) {
      let x = puzzle.map(() => false);
      for(let i = 0; i < puzzle.length; i++) x[i] = this.linearSearch(puzzle.map((e) => e[j-1]), i+1);
      return x.filter((e) => e===false).length === 0;
    };

    this.colCheck = function(puzzle) {
      for(let i = 0; i < puzzle.length; i++)
        for(let j = 0; j < puzzle[i].length; j++) if(!this.checkColumn(puzzle, j+1)) return false;
      return true;
    };

    this.makeGrid = function(puzzle, row1, row3, col1, col3) {
      var array = [];
      for (var i = row1; i <= row3; i++)
        for (var j = col1; j <= col3; j++)
          array.push(puzzle[i][j]);
      return array;
    };

    this.checkGrid = function(puzzle, row1, row3, col1, col3) {
      let x = puzzle.map(() => false), subgrid = this.makeGrid(puzzle, row1, row3, col1, col3);
      for(let i = 0; i < subgrid.length; i++) x[i] = this.linearSearch(subgrid, i+1);
      return x.filter((e) => e===false).length === 0;
    };

    this.checkGrids = function(puzzle) {
      for(let i = 0; i < puzzle[0].length; i++){
        let x;
        switch(i) {
          case 0: x = [0, 2, 0, 2]; break;
          case 1: x = [0, 2, 3, 5]; break;
          case 2: x = [0, 2, 6, 8]; break;
          case 3: x = [3, 5, 0, 2]; break;
          case 4: x = [3, 5, 3, 5]; break;
          case 5: x = [3, 5, 6, 8]; break;
          case 6: x = [6, 8, 0, 2]; break;
          case 7: x = [6, 8, 3, 5]; break;
          case 8: x = [6, 8, 6, 8]; break;
        }
        if(!this.checkGrid(puzzle, x[0], x[1], x[2], x[3])) return false;
      }
      return true;
    };

    this.makeSolution = function(row) {
      let puzzle = this.permutePuzzle(this.makeRows(row), [3, 6, 5, 2, 8, 7, 4, 1]);
      if(this.colCheck(puzzle) && this.checkGrids(puzzle)) return puzzle;
      return false;
    };

    this.genPuzzle = (row) => this.makeSolution(row);

    this.start = () => {
      let startingRow = this.shuffle([1,2,3,4,5,6,7,8,9]);
      this.genPuzzle(startingRow).map((e) => this.cells.push(...e));
      return this.cells
    };

    this.shuffle = function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
  }
}
