const Stack = require("./stack");

function depthFirstTraversal(graph, start) {
    if (!graph.adjacencyList[start]) return [];

    const visited = {};
    const stack = new Stack();
    const result = [];

    stack.push(start);
    visited[start] = true;

    while (!stack.isEmpty()) {
        const currentVertex = stack.pop();
        result.push(currentVertex);

        graph.adjacencyList[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                stack.push(neighbor);
                visited[neighbor] = true;
            }
        });
    }

    return result;
}

module.exports = depthFirstTraversal;

// breadth first traversal
// function depthFirstTraversal(graph, start) {
//     if (!graph.adjacencyList[start]) return [];
//
//     const visited = {};
//     const result = [];
//
//     visited[start] = true;
//
//     function dfs(vertex) {
//         visited[vertex] = true;
//         result.push(vertex);
//         graph.adjacencyList[vertex].forEach((neighbour) => {
//             if (!visited[neighbour]) {
//                 dfs(neighbour);
//             }
//         });
//     }
//     dfs(start);
//
//     return result;
// }
