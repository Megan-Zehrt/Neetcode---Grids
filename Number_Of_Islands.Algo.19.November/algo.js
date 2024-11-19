// 200. Number of Islands



// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.







/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;

    function dfs(i, j) {
        // Boundary check and check if current cell is land
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") {
            return;
        }

        // Mark the cell as visited by setting it to "0"
        grid[i][j] = "0";

        // Run DFS in all four directions
        dfs(i + 1, j); // Down
        dfs(i - 1, j); // Up
        dfs(i, j + 1); // Right
        dfs(i, j - 1); // Left
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // If we find an unvisited land cell, we have found a new island
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j); // Start DFS to mark the whole island as visited
            }
        }
    }

    return count;
};