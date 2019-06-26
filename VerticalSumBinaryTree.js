function VerticalSum(root) {

    if (root == null) {
        return 0;
    }

    let map = new Map();
    VSumRecursive(root, 0, map);

    if (map.size > 0) {
        let a = [...map.values()].reduce((a, c, i, arr) => {
            return a + c;
        }, 0);

        for(let m of map.entries())
        console.log(m);
    }
  




}


function VSumRecursive(node, distance, map) {
    if (node == null)
        return;
    VSumRecursive(node.left, distance - 1, map);
    let prevSum = map.get(distance) == undefined ? 0 : map.get(distance);
    map.set(distance,prevSum+ node.data);
    VSumRecursive(node.right, distance + 1, map);
}





module.exports = VerticalSum;