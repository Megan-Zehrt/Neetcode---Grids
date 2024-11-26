// 207. Course Schedule



// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.






/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    const preMap = new Map();
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }
    for (let [crs, pre] of prerequisites) {
        preMap.get(crs).push(pre);
    }

    // Store all courses along the current DFS path
    const visiting = new Set();

    const dfs = (crs) => {
        if (visiting.has(crs)) {
            // Cycle detected
            return false;
        }
        if (preMap.get(crs).length === 0) {
            return true;
        }

        visiting.add(crs);
        for (let pre of preMap.get(crs)) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting.delete(crs);
        preMap.set(crs, []);
        return true;
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }
    return true;
};