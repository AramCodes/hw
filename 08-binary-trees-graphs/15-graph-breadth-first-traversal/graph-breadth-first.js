const Queue = require("./queue");

function breadthFirstTraversal(graph, start) {
    if (!graph.adjacencyList[start]) return [];

    const visited = {};
    const queue = new Queue();
    const result = [];

    queue.enqueue(start);
    visited[start] = true;

    while (!queue.isEmpty()) {
        const currentVertex = queue.dequeue();
        result.push(currentVertex);

        graph.adjacencyList[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                queue.enqueue(neighbor);
                visited[neighbor] = true;
            }
        });
    }

    return result;
}

module.exports = breadthFirstTraversal;

// function breadthFirstTraversal(graph, startingVertex) {
//   const visited = new Set();
//   const result = [];
//   const queue = new Queue();
//   queue.enqueue(startingVertex);
//   visited.add(startingVertex);
//   while (!queue.isEmpty()) {
//     const currentVertex = queue.dequeue();
//     result.push(currentVertex);
//     for (const neighbor of graph.adjacencyList[currentVertex]) {
//       if (!visited.has(neighbor)) {
//         queue.enqueue(neighbor);
//         visited.add(neighbor);
//       }
//     }
//   }
//   return result;
// }
