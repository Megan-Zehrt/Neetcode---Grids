// 994. Rotting Orange



// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.







/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    

    let ROWS = grid.length
    let COLS = grid[0].length
    let visited = new Set()
    let q = new Queue()

    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c] === 2){
                visited.add(r + ',' + c)
                q.push([r,c])
            }
        }
    }

    function addCells(r, c){

        if(Math.min(r, c) < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0 || visited.has(r + ',' + c)){
            return
        }

        visited.add(r + ',' + c)
        q.push([r , c])

    }

    let mins = 0
    let isRotten = false

    while(!q.isEmpty()){


        for(let i = q.size(); i > 0; i--){

            let [r,c] = q.pop()

            if(grid[r][c] === 1){
                grid[r][c] = 2
                isRotten = true
            }

            addCells(r + 1, c)
            addCells(r - 1, c)
            addCells(r, c + 1)
            addCells(r, c - 1)
        }

        if(isRotten === true){
            mins += 1
        }

        isRotten = false
    }

    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c] === 1){
                return -1
            }
        }
    }

    return mins
};