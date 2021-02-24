const BOARD = new Board();
let startTime, endTime;
$(document).ready(() => {
    BOARD.populateBoxes();
    BOARD.populateRows();
    BOARD.populateColumns();
    BOARD.populateCells();
    BOARD.drawBoard();
    BOARD.GAME = new Game();
    startTime = performance.now();
    BOARD.GAME.placeRandomValues();
});
