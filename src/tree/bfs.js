// 二叉树层次遍历
// 使用队列记录顺序
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// https://leetcode.com/problems/binary-tree-level-order-traversal/
function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

function treeLevelTravel(root){
    if (root === null){
        return []
    }
    let queue = [root]
    let res = []
    while(queue.length > 0){
        let node = queue.shift()
        res.push(node.val)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
    return res
}

;(function(){
    let node = new TreeNode(1)
    node.left = new TreeNode(2)
    node.right = new TreeNode(3)
    node.right.left = new TreeNode(4)
    node.right.right = new TreeNode(5)
    let res = treeLevelTravel(node)
    console.log(res)
}());