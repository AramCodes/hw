const TreeNode = require("./tree-node-class");

const binaryTree = new TreeNode("a");
binaryTree.left = new TreeNode("b");
binaryTree.left.left = new TreeNode("d");
binaryTree.left.right = new TreeNode("e");
binaryTree.right = new TreeNode("c");
binaryTree.right.right = new TreeNode("f");

console.log(binaryTree);

// const a = new TreeNode('a');
// const b = new TreeNode('b');
// const c = new TreeNode('c');
// const d = new TreeNode('d');
// const e = new TreeNode('e');
// const f = new TreeNode('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
