const Queue = require("./queue");

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function breadthFirstTraversal(root) {
    if (!root) return [];

    const result = [];
    const queue = [];

    queue.push(root);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        result.push(currentNode.data);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return result;
}

module.exports = {
    Node,
    breadthFirstTraversal,
};
