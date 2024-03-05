const { Node, maxDepth } = require("./maximum-depth");

// Create the binary tree:    3
//                           / \
//                          9  20
//                             / \
//                            15  7

const root = new Node(3);

root.left = new Node(9);

root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(maxDepth(root));
