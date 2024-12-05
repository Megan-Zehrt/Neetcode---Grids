// 684. Redundant Connection



// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.










function findRedundantConnection(edges){

    const n = edges.length
    const adj = Array.from({length : n + 1}, () => [])

    for(let [u,v] of edges){

        adj[u].push(v)
        adj[v].push(u)

        const visited = Array(n + 1).fill(false)

        if(dfs(u, -1, visited)){
            return [u,v]
        }
    }

    function dfs(node, parent, visited){

        if(visited[node]){
            return true
        }

        visited[node] = true

        for(let nei of adj[node]){

            if(nei === parent){
                continue
            }

            if(dfs(nei, node, visited)){
                return true
            }
        }

        return false
    }

    return []
}

function findRedundantConnection(edges) {
        
    const n = edges.length
    const adj = Array.from({length : n + 1}, () => [])

    for(let [u,v] of edges){

        adj[u].push(v)
        adj[v].push(u)
    }

    let visited = Array(n + 1).fill(false)
    let cycle = new Set()
    let cycleStart = -1

    function dfs(node, parent){

        if(visited[node]){
            cycleStart = node
            return true
        }

        visited[node] = true

        for(let nei of adj[node]){

            if(nei === parent){
                continue
            }

            if(dfs(nei, node)){

                if(cycleStart !== -1){
                    cycle.add(node)
                }

                if(cycleStart === node){
                    cycleStart = -1
                }

                return true
            }
        }

        return false
    }

    dfs(1, -1)

    for(let i = edges.length-1; i >= 0; i--){
        let [u, v] = edges[i]

        if(cycle.has(u) && cycle.has(v)){
            return [u, v]
        }
    }

    return []
}

function     findRedundantConnection(edges) {
        
    const n = edges.length
    const adj = Array.from({length:n+1}, () => [])
    const indegree = new Array(n + 1).fill(0)

    for(let [u, v] of edges){
        adj[u].push(v)
        adj[v].push(u)

        indegree[u]++
        indegree[v]++
    }

    const q = new Queue()

    for(let i = 1; i <= n; i++){

        if(indegree[i] === 1){
            q.push(i)
        }
    }

    while(!q.isEmpty()){

        const node = q.pop()

        indegree[node]--

        for(let nei of adj[node]){

            indegree[nei]--

            if(indegree[nei] === 1){
                q.push(nei)
            }
        }
    }

    for(let i = edges.length-1; i >= 0; i--){

        const [u, v] = edges[i]

        if(indegree[u] === 2 && indegree[v] === 2){
            return [u, v]
        }
    }

    return []
}