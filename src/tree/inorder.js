// https://leetcode.com/problems/binary-tree-inorder-traversal/
function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

function inorderTravelRecursive(root){
    let result = []
    if(!root){
        return result
    }
    // 注意这里，concat会返回新的数组
    result = result.concat(inorderTravelRecursive(root.left))
    result.push(root.val)
    result = result.concat(inorderTravelRecursive(root.right))
    return result
}

function inorderTravel(root){
    let result = []
    let stack = []
    let node = root
    while(node !== null || stack.length > 0){
        while(node){
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        result.push(node.val)
        node = node.right
    }
    return result
}

;(function(){
    let root = new TreeNode(1)
    root.right = new TreeNode(2)
    root.right.left = new TreeNode(3)
    let res = inorderTravelRecursive(root)
    console.log(res)
    res = inorderTravel(root)
}());