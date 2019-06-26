
function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;

    this.setData = function (data) {
        this.data = data;
    }
    this.setLeft = function (node) {
        this.left = node;
    }
    this.setRight = function (node) {
        this.right = node;
    }
    this.setNode = function (leftNode, rightNode) {
        this.SetLeft(leftNode);
        this.SetRight(rightNode);

    }

}


module.exports = TreeNode;