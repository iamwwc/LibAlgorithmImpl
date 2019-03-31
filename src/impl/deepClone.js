function deepClone(target){
	if(typeof target !== 'object' || !target){
		return
	}

	let res = []
	for(let v in target){
		let curr = target[v]
		if(curr !== target){
			res[v] = deepClone(curr)
		}
	}

	if(Array.isArray(target)){
		return deepArray(target)
	}
	return deepObject(target)
}

function deepArray(){

}

function deepObject(target){
	let keys = Object.keys(target)
}