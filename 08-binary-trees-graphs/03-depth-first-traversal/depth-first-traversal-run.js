const { Node, depthFirstTraversal } = require("./depth-first-traversal");

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const root = new Node("a");

root.left = new Node("b");
root.left.left = new Node("d");
root.left.right = new Node("e");

root.right = new Node("c");
root.right.left = new Node("f");

// console.log(root);

const result = depthFirstTraversal(root);
console.log(result);
