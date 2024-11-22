// 417. Pacific Atlantic Water Flow



// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.








/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {

    let ROWS = heights.length, COLS = heights[0].length;
    let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

    function dfs(r, c, ocean){
        ocean[r][c] = true;
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [dr, dc] of directions) {
            let nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                dfs(nr, nc, ocean);
            }
        }
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac);
        dfs(ROWS - 1, c, atl);
    }
    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac);
        dfs(r, COLS - 1, atl);
    }

    let res = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (pac[r][c] && atl[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
};