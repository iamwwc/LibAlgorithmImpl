/**
 * 
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
 * 则重建二叉树并返回
 * https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&tqId=11157&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
 */


function TreeNode(x){
    this.val = x
    this.left = null
    this.right = null
}

function reConstructBinaryTree(pre,vin){
    if(pre.length === 0  || vin.length === 0){
        return null
    }
    
    let absoluteRoot = pre[0]

    let root = new TreeNode(absoluteRoot)

    // find rootIndex in vin
    let i = 0
    for( ; i < vin.length; i ++){
        if(absoluteRoot === vin[i]) break;
    }

    let preorderLen = i

    // 分别从前序和中序的结果中得到下一次递归的前序和中序
    let leftTreesPreorder = pre.slice(1, 1 + preorderLen)
    let leftTreeInorder = vin.slice(0,i)

    let rightTreesPreorder = pre.slice(1 + preorderLen)
    let rightTreesInorder = vin.slice(i + 1)

    root.left = reConstructBinaryTree(leftTreesPreorder, leftTreeInorder)
    root.right = reConstructBinaryTree(rightTreesPreorder,rightTreesInorder)
    
    return root
}

;(function(){
    let left = [1,2,3,4,5,6,7]
    let right = [3,2,4,1,6,5,7]
    let root = reConstructBinaryTree(left,right)
})();