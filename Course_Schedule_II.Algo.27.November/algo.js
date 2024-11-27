// 210. Course Schedule II



// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.











/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {

    const preMap = new Map()

    for(let [crs, pre] of prerequisites){

        if(!preMap.has(crs)){
            preMap.set(crs, [])
        }
        preMap.get(crs).push(pre)
        
    }

    let output = []
    let visit = new Set()
    let cycle = new Set()

    function dfs(crs){

        if(cycle.has(crs)) return false

        if(visit.has(crs)) return true

        cycle.add(crs)
        for(let pre of preMap.get(crs) || []){
            if(!dfs(pre)){
                return false
            }
        }

        cycle.delete(crs)
        visit.add(crs)
        output.push(crs)

        return true
    }

    for(let c = 0; c < numCourses; c++){
        if(!dfs(c)){
            return []
        }
    }

    return output
};