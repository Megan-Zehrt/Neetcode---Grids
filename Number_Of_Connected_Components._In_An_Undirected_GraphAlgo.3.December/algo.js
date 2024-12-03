// Number of Connected Components in an Undirected Graph



// There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.

// The nodes are numbered from 0 to n - 1.

// Return the total number of connected components in that graph.





function countComponents(n, edges) {
        
    if (edges.length === 0) return n;

    // Step 1: Build adjacency list
    let adj = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u); // Undirected graph
    }

    // Step 2: Initialize visited set and count
    let visited = new Set();
    let count = 0;

    // Step 3: DFS helper function
    function dfs(node) {
        visited.add(node);
        for (let nei of adj[node]) {
            if (!visited.has(nei)) {
                dfs(nei);
            }
        }
    }

    // Step 4: Loop through all nodes
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            count++;
            dfs(i); // Start DFS for a new connected component
        }
    }

    return count;
}