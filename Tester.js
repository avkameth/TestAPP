
const TreeNode = require('./TreeNode');

const Tree = require('./TreeTraversal');
const VerticalSum = require('./VerticalSumBinaryTree');



let tree = new Tree();

let root = new TreeNode(1);
root.setLeft(new TreeNode(2));
root.setRight(new TreeNode(3));
root.left.setLeft(new TreeNode(4));
root.left.setRight(new TreeNode(5));
root.right.setLeft(new TreeNode(6));
root.right.setRight(new TreeNode(7));


tree.root = root;
//tree.LevelOrderTraversal(root);

let x = new VerticalSum(root);

