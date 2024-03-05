const { Node, isValidBST } = require("./validate-bst");

// Create the binary tree:
//       8
//      / \
//     4   10
//    / \
//   2   6

const root = new Node(8);

root.left = new Node(4);
root.left.left = new Node(2);
root.left.right = new Node(6);

root.right = new Node(10);

console.log(isValidBST(root));
