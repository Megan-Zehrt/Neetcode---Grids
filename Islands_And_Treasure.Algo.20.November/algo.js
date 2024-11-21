// Islands and Treasure



// You are given a 
// m
// ×
// n
// m×n 2D grid initialized with these three possible values:

// -1 - A water cell that can not be traversed.
// 0 - A treasure chest.
// INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
// Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest than the value should remain INF.

// Assume the grid can only be traversed up, down, left, or right.








class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        let ROWS = grid.length
        let COLS = grid[0].length
        let visited = new Set()
        let q = new Queue()

        function addCell(r, c){

            if(Math.min(r,c) < 0 || r === ROWS || c === COLS || visited.has(r + ',' + c) || grid[r][c] === -1){
                return
            }

            visited.add(r + ',' + c)
            q.push([r,c])
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){

                if(grid[r][c] === 0){
                    visited.add(r + ',' + c)
                    q.push([r , c])
                }
            }
        }

        let dist = 0
        
        while(!q.isEmpty()){

            for(let i = q.size(); i > 0 ; i--){

                let [r,c] = q.pop()
                grid[r][c] = dist

                addCell(r + 1, c)
                addCell(r - 1, c)
                addCell(r, c + 1)
                addCell(r, c - 1)
            }

            dist += 1
        }
        
    }
}
