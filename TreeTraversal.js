function Tree() {
    this.rootNode = null;
}


Tree.prototype.LevelOrderTraversal = function (root) {
    if (root == null) {
        return;
    }
    let queue = [];
    let items = [];
    queue.push(root);

    while (queue.length) {
        let node = queue.shift();
        items.push(node.data);

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }

    }
    console.log(items);
    items = [];
}


module.exports = Tree;

