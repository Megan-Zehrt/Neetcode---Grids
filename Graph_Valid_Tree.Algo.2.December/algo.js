// Graph Valid Tree



// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.









if (edges.length > n - 1) {
    return false;
}

const adj = Array.from({ length: n }, () => []);
for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
}

const visit = new Set();
const dfs = (node, parent) => {
    if (visit.has(node)) {
        return false;
    }

    visit.add(node);
    for (const nei of adj[node]) {
        if (nei === parent) {
            continue;
        }
        if (!dfs(nei, node)) {
            return false;
        }
    }
    return true;
};

return dfs(0, -1) && visit.size === n;