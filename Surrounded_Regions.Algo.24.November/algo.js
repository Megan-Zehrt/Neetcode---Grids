//  130. Surrounded Regions



// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.









/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {

    let ROWS = board.length, COLS = board[0].length;

    function capture (r, c)  {
        if (r < 0 || c < 0 || r == ROWS ||
            c == COLS || board[r][c] !== 'O') {
            return;
        }
        board[r][c] = 'T';
        capture(r + 1, c);
        capture(r - 1, c);
        capture(r, c + 1);
        capture(r, c - 1);
    }

    for (let r = 0; r < ROWS; r++) {
        if (board[r][0] === 'O') capture(r, 0);
        if (board[r][COLS - 1] === 'O') capture(r, COLS - 1);
    }

    for (let c = 0; c < COLS; c++) {
        if (board[0][c] === 'O') capture(0, c);
        if (board[ROWS - 1][c] === 'O') capture(ROWS - 1, c);
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === 'O') board[r][c] = 'X';
            else if (board[r][c] === 'T') board[r][c] = 'O';
        }
    }
};