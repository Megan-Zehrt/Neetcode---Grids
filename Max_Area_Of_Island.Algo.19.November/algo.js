// 695. Max Area of Island



// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.





/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    let max = 0

    function dfs(i, j) {
        // Boundary checks and if the cell is water
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) {
            return 0;  // Return 0 as this doesn't contribute to the area
        }

        grid[i][j] = 0  // Mark the cell as visited

        // Perform DFS in all 4 directions, accumulate the area
        let area = 1  // Count the current land cell
        area += dfs(i + 1, j)  // Down
        area += dfs(i - 1, j)  // Up
        area += dfs(i, j + 1)  // Right
        area += dfs(i, j - 1)  // Left

        return area
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                // Call DFS and calculate the area for the current island
                let m = dfs(i, j)
                max = Math.max(max, m)
            }
        }
    }

    return max
};