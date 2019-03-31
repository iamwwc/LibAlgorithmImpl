// https://leetcode.com/problems/lfu-cache/
! function () {
	function Node(count,lfu){
		this.count = count
		this.lfu = lfu
		this.set = new Set()
		this.prev = this.next = null
	}
	
	Node.prototype.add = function(key){
		this.set.add(key)
	}
	
	Node.prototype.pop = function() {
		let array = [...this.set]
		let key = array[0]
		this.remove(key)
		delete this.lfu.k_v_map[key]
		delete this.lfu.k_count_map[key]
		return key
	}
	
	Node.prototype.remove = function(key){
		this.set.delete(key)
		let curr = this
		if(this.set.size === 0){
			curr = this.prev
			this.lfu.deleteNode(this)   
		}
		return curr
	}
	
	/**
	 * @param {number} capacity
	 */
	var LFUCache = function(capacity) {
		this.capacity = capacity
		this.count = 0
		this.count_node_map = Object.create(null)
		this.k_v_map = Object.create(null)
		this.k_count_map = Object.create(null)
		this.head = new Node(-1,this)
		this.tail = new Node(-1,this)
		this.head.prev = this.tail.next = null
		this.head.next = this.tail
		this.tail.prev = this.head
	};
	
	/** 
	 * @param {number} key
	 * @return {number}
	 */
	LFUCache.prototype.get = function(key) {
		let newValue = arguments[1]
		if(typeof newValue !== 'undefined'){
			this.k_v_map[key] = newValue
		}
		let v = this.k_v_map[key]
		if(typeof v === 'undefined'){
			return -1
		}
		this.increaseCount(key)
		
		return v
	};
	
	LFUCache.prototype.increaseCount = function(key){
		let count = this.k_count_map[key] ++
		let currNode = this.count_node_map[count]
		currNode = currNode.remove(key)
		let nextNode = this.count_node_map[count + 1]
		if(!nextNode){
			this.count_node_map[ count + 1] = nextNode = new Node(count + 1,this)
			this.nodeInsert(currNode, nextNode)
		}
		nextNode.add(key)
	}
	
	/** 
	 * @param {number} key 
	 * @param {number} value
	 * @return {void}
	 */
	LFUCache.prototype.put = function(key, value) {
		let curr = this.k_v_map[key]
		if(this.capacity === 0){
			return
		}
		if(!curr && this.count >= this.capacity){
			this.head.next.pop()
			this.count --
		}
		if(!curr){
			this.count ++
			this.k_v_map[key] = value
			this.k_count_map[key] = 1
			let firstNode = this.count_node_map[1]
			if(!firstNode){
				firstNode = this.count_node_map[1] = new Node(1,this)
				this.nodeInsert(this.head, firstNode)
			}
			firstNode.add(key)
			return
		}
		this.get(key,value)
	};
	
	LFUCache.prototype.nodeInsert = function(prevNode, nextNode) {
		let old = prevNode.next
		if(old){
			nextNode.next = old
			old.prev = nextNode
		}
		prevNode.next = nextNode
		nextNode.prev = prevNode
	}
	
	LFUCache.prototype.deleteNode = function(node){
		node.prev.next = node.next
		node.next.prev = node.prev
		node.prev = node.next = null
		delete this.count_node_map[node.count]
	}
	
	/** 
	 * Your LFUCache object will be instantiated and called as such:
	 * var obj = new LFUCache(capacity)
	 * var param_1 = obj.get(key)
	 * obj.put(key,value)
	 */
	// -------------------------------------------------------------

	let cache = new LFUCache(1 /* capacity */ );
	cache.put(0,0);
	cache.get(0);
	
}()