/**
 * 树的前序，中序，后序遍历
 */


function TreeNode(v){
    this.val = v
    this.left = this.right = null
}

// 前序遍历的递归与非递归实现
function preorderThroughWhile(root){
    let result = []

    if (!root) return result

    let stack = [root]
    while(stack.length !== 0){
        let node = stack.pop()
        result.push(node.val)
        if(node.right){
            stack.push(node)
        }
        if(node.left){
            stack.push(node)
        }
    }
    return result
}

function preorderThroughRecursive(root){
    let result = []
    
    if(!root){
        return result
    }
    result.push(root.val)
    result.push(preorderThroughRecursive(root.left))
    result.push(preorderThroughRecursive(root.right))
}

// 中序遍历的递归与非递归实现
function inorderThroughWhile(root){
    if(root === null){
        return null
    }
    
    let result = []
    let stack = [root]
    while(stack.length !== 0){
        if(root !== null){
            stack.push(root)
            root = root.left
        }else{
            let node = stack.pop()
            result.push(node.val)
            root = node.right
        }
    }
    return result
}

function inorderThroughRecursive(root){
    let result = []
    
    if(root === null){
        return result
    }

    result.push(inorderThroughRecursive(root.left))
    result.push(root.val)
    result.push(inorderThroughRecursive(root.right))
}


// 后序遍历

function postThroughWhile(root){
    let result = []

    let stack = [root]
    let last = null
    while(stack.length !== 0){
        if(root !== null){
            stack.push(root)
            root = root.left
        }else{
            let top = stack[stack.length - 1]
            if(top.right !== null && top.right !== last){
                root = top.right
            }else{
                root = stack.pop()
                result.push(root.val)
                last = root
            }
        }
    }
}

function postThroughRecursive(root){
    let result = []

    if(root === null){
        return result
    }

    result.push(postThroughRecursive(root.left))
    result.push(postThroughRecursive(root.right))
    result.push(root.val)
    return result
}

function assertArrayIsEquals(arr1, arr2){
    let count = 0
    for(let i = 0 ; i < arr1.length; i ++){
        if(arr1[i] !== arr2[count++]){
            return false
        }
    }
    return true
}

// test
;(function(){
    let root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)

    // 前序
    

}());