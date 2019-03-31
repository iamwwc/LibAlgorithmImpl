// https://leetcode.com/problems/binary-tree-postorder-traversal/

function postorderTraversalRecursive(root) {
	let result = []
	if (!root) {
		return result
	}

	result = result.concat(postorderTraversal(root.left))
	result = result.concat(postorderTraversal(root.right))
	result.push(root.val)
	return result
}

function postorderTraversal(root) {
	let result = []
	let stack = []
	let node = root
	while (node || stack.length > 0) {
		if (node) {
			result.push(node.val)
			stack.push(node)
			node = node.right
		} else {
			node = stack.pop()
			node = node.left
		}
	}
	return result.reverse()
}

// test
;
(function () {

}());