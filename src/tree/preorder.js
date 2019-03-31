// https://leetcode.com/problems/binary-tree-preorder-traversal
! function () {
	// root left right
	function TreeNode(val) {
		this.val = val
		this.left = this.right = null
	}

	function preOrderTraversal(root) {
		if (!root) {
			return []
		}
		let result = []
		let stack = [ root ]
		while (stack.length > 0) {
			let node = stack.pop()
			result.push(node.val)
			if(node.right){
				stack.push(node.right)
			}
			if(node.left){
				stack.push(node.left)
			}
		}
		return result
	}
}()