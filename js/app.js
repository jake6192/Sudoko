class Game {
  constructor() {
    this.placeRandomValues = () => {
      let currentBox = 1, digitToPlace = 1, failureCount = 0, _continue = true;
      this.clearValues();
      let interval = setInterval(function() {
        let emptyCells = BOARD.boxes[currentBox-1].getEmptyCells();
        let RAN = Math.floor(Math.random() * emptyCells.length) + 1;
        let cell = emptyCells[RAN-1];
        if( cell.value == undefined
        && !cell.box.containsValue(digitToPlace)
        && !cell.row.containsValue(digitToPlace)
        && !cell.column.containsValue(digitToPlace)) {
          cell.value = digitToPlace;
          cell.drawValue();
          failureCount = 0;
          if(currentBox < 9) currentBox++;
          else {
            currentBox = 1;
            if(digitToPlace < 9) digitToPlace++;
            else _continue = false;
          }
        } else failureCount++;
        if(!_continue) clearInterval(interval);
        else if(failureCount > 100) {
          console.log('failed');
          failureCount = 0;
          clearInterval(interval);
          BOARD.GAME.placeRandomValues();
        }
      }, 5);
    };

    this.clearValues = () => {
      $('.cell').text('');
      for(let i = 0; i < 81; i++) BOARD.cells[i].value = undefined;
    };
  }
}


class Board {
  constructor() {
    this.boxes   = [];
    this.rows    = [];
    this.columns = [];
    this.cells   = [];
    this.startingDigits = 10;

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
          $(`#container > .box[boxID="${i+1}"]`).append(`<div class="cell" cellID="${cell.cellID}" row="${cell.row.rowNumber}" column="${cell.column.columnNumber}"></div>`);
        }
      }
    };
  }
}


class Box {
  constructor(boxNumber) {
    this.boxNumber = boxNumber;
    this.cells = [];

    this.containsValue = (value) => {
      for(let i = 0; i < 9; i++) if(this.cells[i].value === value) return true;
      return false;
    };

    this.getEmptyCells = () => this.cells.filter((e) => e.value === undefined);
  }
}


class Row {
  constructor(rowNumber) {
    this.rowNumber = rowNumber;
    this.cells = [];

    this.containsValue = (value) => {
      for(let i = 0; i < 9; i++) if(this.cells[i].value === value) return true;
      return false;
    };
  }
}



class Column {
  constructor(columnNumber) {
    this.columnNumber = columnNumber;
    this.cells = [];

    this.containsValue = (value) => {
      for(let i = 0; i < 9; i++) if(this.cells[i].value === value) return true;
      return false;
    };
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
    if(this.row.rowNumber <= 3)
      this.box = BOARD.boxes[(this.column.columnNumber<=3 ? 1 : (this.column.columnNumber<=6 ? 2 : 3))-1];
    else if(this.row.rowNumber <= 6)
      this.box = BOARD.boxes[(this.column.columnNumber<=3 ? 4 : (this.column.columnNumber<=6 ? 5 : 6))-1];
    else
      this.box = BOARD.boxes[(this.column.columnNumber<=3 ? 7 : (this.column.columnNumber<=6 ? 8 : 9))-1];

    this.drawValue = () => { $(`.cell[cellID="${this.cellID}"]`).text(this.value); };
  }
}
