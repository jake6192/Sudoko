const predefinedGames = [
  [1, 3, 9, 4, 6, 5, 8, 2, 7, 2, 4, 7, 3, 9, 8, 6, 1, 5, 5, 6, 8, 2, 1, 7, 9, 3, 4, 3, 9, 2, 7, 5, 1, 4, 8, 6, 6, 7, 4, 8, 2, 9, 1, 5, 3, 8, 5, 1, 6, 3, 4, 2, 7, 9, 4, 2, 5, 9, 8, 3, 7, 6, 1, 7, 1, 6, 5, 4, 2, 3, 9, 8, 9, 8, 3, 1, 7, 6, 5, 4, 2],
  [1, 9, 7, 4, 6, 3, 8, 5, 2, 6, 5, 3, 7, 2, 8, 9, 4, 1, 8, 2, 4, 5, 1, 9, 6, 7, 3, 2, 6, 5, 9, 4, 7, 1, 3, 8, 3, 8, 9, 1, 5, 2, 7, 6, 4, 4, 7, 1, 8, 3, 6, 5, 2, 9, 5, 1, 8, 3, 7, 4, 2, 9, 6, 9, 4, 6, 2, 8, 5, 3, 1, 7, 7, 3, 2, 6, 9, 1, 4, 8, 5],
  [2, 9, 1, 6, 8, 7, 4, 3, 5, 8, 7, 5, 3, 2, 4, 6, 9, 1, 3, 6, 4, 9, 5, 1, 7, 8, 2, 5, 3, 2, 1, 6, 8, 9, 4, 7, 9, 1, 6, 7, 4, 2, 3, 5, 8, 4, 8, 7, 5, 9, 3, 2, 1, 6, 1, 4, 3, 2, 7, 5, 8, 6, 9, 7, 5, 9, 8, 3, 6, 1, 2, 4, 6, 2, 8, 4, 1, 9, 5, 7, 3],
  [3, 9, 7, 5, 1, 8, 6, 2, 4, 2, 6, 1, 9, 4, 7, 8, 5, 3, 8, 4, 5, 2, 6, 3, 7, 9, 1, 4, 5, 3, 6, 9, 1, 2, 7, 8, 9, 1, 8, 7, 3, 2, 5, 4, 6, 7, 2, 6, 8, 5, 4, 1, 3, 9, 1, 8, 9, 3, 7, 5, 4, 6, 2, 6, 7, 2, 4, 8, 9, 3, 1, 5, 5, 3, 4, 1, 2, 6, 9, 8, 7],
  [4, 7, 6, 2, 5, 9, 8, 3, 1, 8, 2, 9, 3, 4, 1, 7, 6, 5, 3, 5, 1, 7, 8, 6, 4, 2, 9, 5, 9, 3, 6, 1, 4, 2, 7, 8, 1, 6, 2, 8, 3, 7, 5, 9, 4, 7, 8, 4, 5, 9, 2, 3, 1, 6, 6, 3, 8, 1, 7, 5, 9, 4, 2, 9, 1, 5, 4, 2, 3, 6, 8, 7, 2, 4, 7, 9, 6, 8, 1, 5, 3],
  [5, 1, 9, 6, 7, 3, 8, 2, 4, 4, 7, 8, 5, 9, 2, 6, 3, 1, 2, 6, 3, 4, 8, 1, 9, 5, 7, 8, 4, 5, 9, 2, 6, 1, 7, 3, 3, 9, 6, 1, 4, 7, 2, 8, 5, 1, 2, 7, 8, 3, 5, 4, 6, 9, 7, 3, 4, 2, 1, 8, 5, 9, 6, 9, 5, 2, 7, 6, 4, 3, 1, 8, 6, 8, 1, 3, 5, 9, 7, 4, 2],
  [6, 2, 3, 4, 8, 5, 1, 9, 7, 1, 7, 9, 2, 6, 3, 4, 8, 5, 4, 5, 8, 7, 1, 9, 3, 6, 2, 8, 4, 1, 5, 2, 7, 6, 3, 9, 9, 3, 2, 1, 4, 6, 7, 5, 8, 5, 6, 7, 3, 9, 8, 2, 4, 1, 2, 9, 5, 6, 3, 1, 8, 7, 4, 7, 1, 6, 8, 5, 4, 9, 2, 3, 3, 8, 4, 9, 7, 2, 5, 1, 6],
  [6, 4, 2, 5, 3, 7, 1, 8, 9, 7, 5, 1, 9, 6, 8, 3, 2, 4, 9, 8, 3, 1, 4, 2, 6, 7, 5, 4, 1, 6, 3, 8, 5, 7, 9, 2, 3, 7, 8, 2, 9, 1, 5, 4, 6, 2, 9, 5, 6, 7, 4, 8, 3, 1, 8, 3, 9, 4, 1, 6, 2, 5, 7, 5, 6, 4, 7, 2, 3, 9, 1, 8, 1, 2, 7, 8, 5, 9, 4, 6, 3],
  [7, 8, 5, 2, 9, 1, 4, 6, 3, 4, 2, 1, 6, 3, 5, 8, 7, 9, 6, 3, 9, 8, 7, 4, 1, 5, 2, 5, 4, 7, 9, 1, 6, 2, 3, 8, 2, 9, 8, 3, 5, 7, 6, 1, 4, 3, 1, 6, 4, 8, 2, 5, 9, 7, 9, 6, 3, 5, 2, 8, 7, 4, 1, 1, 5, 2, 7, 4, 9, 3, 8, 6, 8, 7, 4, 1, 6, 3, 9, 2, 5],
  [7, 9, 5, 3, 2, 8, 1, 4, 6, 1, 4, 3, 7, 6, 5, 2, 8, 9, 8, 6, 2, 1, 9, 4, 7, 3, 5, 6, 8, 1, 9, 3, 2, 4, 5, 7, 4, 3, 7, 5, 8, 6, 9, 1, 2, 2, 5, 9, 4, 1, 7, 8, 6, 3, 3, 7, 8, 2, 5, 1, 6, 9, 4, 9, 2, 6, 8, 4, 3, 5, 7, 1, 5, 1, 4, 6, 7, 9, 3, 2, 8],
  [8, 3, 5, 7, 2, 6, 1, 9, 4, 4, 2, 1, 5, 9, 8, 7, 6, 3, 7, 9, 6, 4, 1, 3, 2, 8, 5, 2, 1, 9, 6, 4, 7, 5, 3, 8, 5, 6, 8, 1, 3, 2, 9, 4, 7, 3, 4, 7, 8, 5, 9, 6, 2, 1, 9, 7, 4, 2, 8, 1, 3, 5, 6, 1, 8, 3, 9, 6, 5, 4, 7, 2, 6, 5, 2, 3, 7, 4, 8, 1, 9],
  [8, 3, 9, 6, 5, 4, 1, 2, 7, 1, 2, 4, 8, 7, 9, 3, 5, 6, 7, 5, 6, 1, 3, 2, 8, 9, 4, 6, 9, 1, 5, 2, 3, 4, 7, 8, 3, 8, 5, 4, 1, 7, 2, 6, 9, 4, 7, 2, 9, 6, 8, 5, 3, 1, 2, 6, 3, 7, 8, 1, 9, 4, 5, 9, 1, 7, 3, 4, 5, 6, 8, 2, 5, 4, 8, 2, 9, 6, 7, 1, 3],
  [9, 5, 7, 1, 3, 8, 6, 2, 4, 6, 4, 8, 2, 7, 9, 3, 1, 5, 3, 1, 2, 5, 4, 6, 9, 8, 7, 1, 6, 3, 8, 2, 7, 5, 4, 9, 7, 8, 5, 9, 6, 4, 1, 3, 2, 4, 2, 9, 3, 5, 1, 8, 7, 6, 5, 3, 6, 7, 1, 2, 4, 9, 8, 2, 9, 4, 6, 8, 3, 7, 5, 1, 8, 7, 1, 4, 9, 5, 2, 6, 3]
];

class Game {
  constructor() {
    this.assignPredefinedValues = () => {
      this.clearValues();
      let RAN = Math.floor(Math.random() * predefinedGames.length-1) + 1;
      for(var i = 0; i < 81; i++) {
        let cell = BOARD.cells[i];
        cell.value = predefinedGames[RAN][i];
        cell.drawValue();
        $('.info').text(`Loaded game #${RAN+1}`);
      }
    };

    this.assignRandomValues = (fC) => {
      let currentBox = 1, digitToPlace = 1, failureCount = (fC ?? 0), _continue = true;
      this.clearValues();
      let interval = setInterval(function() {
        let openCells = BOARD.boxes[currentBox-1].getEmptyCells();
        while(openCells.length > 0) {
          let RAN = Math.floor(Math.random() * openCells.length) + 1;
          let cell = openCells[RAN-1];
          if( cell.value == undefined
          && !cell.box.containsValue(digitToPlace)
          && !cell.row.containsValue(digitToPlace)
          && !cell.column.containsValue(digitToPlace)) {
            cell.value = digitToPlace;
            cell.drawValue();
            if(currentBox < 9) currentBox++;
            else {
              currentBox = 1;
              if(digitToPlace < 9) digitToPlace++;
              else {
                endTime = performance.now();
                let str = `Success! Generation took ${((endTime-startTime)/1000).toFixed(1)} seconds.`;
                console.log(str);
                $('.info').text(str);
                _continue = false;
                break;
              }
            }
            break; // Break out of while loop. //
          } else openCells.splice(RAN-1, 1);
        }
        if(!_continue) clearInterval(interval);
        if(openCells.length === 0 && BOARD.boxes[currentBox-2].getEmptyCells().length !== 0) {
          failureCount += 1;
          let str = 'Order invalid. Retrying...';
          console.log(str);
          $('.info').text(`#${failureCount} - ${str}`);
          clearInterval(interval);
          BOARD.GAME.assignRandomValues(failureCount);
        }
      }, 1);
    };

    this.saveValuesToJSON = () => {
      let arr = [];
      for(var i = 0; i < 81; i++) arr.push(BOARD.cells[i].value);
      console.log(arr);
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
