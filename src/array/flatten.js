;
(function () {
	// 数组的扁平化
	function flatten(input){
		let stack = [...input]
		let result = []

		while(stack.length > 0 ){
			let curr = stack.pop()
			if(Array.isArray(curr)){
				stack.push(...curr)
			}else{
				result.push(curr)
			}
		}
		return result.reverse()
	}

	let test = [1,2,[3,4,[5,6,[7,8,[9,10],11],12],13],14]
	console.table(flatten(test))
}());