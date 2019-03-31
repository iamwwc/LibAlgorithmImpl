// https://leetcode.com/problems/lru-cache/

! function () {
	function Node (k, v) {
		this.v = v
		this.k = k
		this.prev = this.next = null
	}
	
	/**
	 * @param {number} capacity
	 */
	var LRUCache = function(capacity) {
		this.capacity = capacity
		this.count = 0
		this.map = Object.create(null)
		this.head = new Node()
		this.tail = new Node()
		this.head.next = this.tail
		this.tail.prev = this.head
	};
	
	LRUCache.prototype.addNode = function(node){
		let after = this.head.next
		this.head.next = node
		node.prev = this.head
		node.next = after
		after.prev = node
		this.count ++
		this.map[node.k] = node
	}
	
	LRUCache.prototype.removeNode = function(node) {
		let after = node.next
		let before = node.prev
		before.next = after
		after.prev = before
		node.prev = next = null
		this.count --
		delete this.map[node.k]
	}
	
	/** 
	 * @param {number} key
	 * @return {number}
	 */
	LRUCache.prototype.get = function(key) {
		let node = this.map[key]
		if(typeof node === 'undefined'){
			return -1
		}
		this.moveToHead(node)
		return node.v
	};
	
	
	
	LRUCache.prototype.popTail = function() {
		this.removeNode(this.tail.prev)
	}
	
	LRUCache.prototype.moveToHead = function(node) {
		this.removeNode(node)
		this.addNode(node)
	}
	
	/** 
	 * @param {number} key 
	 * @param {number} value
	 * @return {void}
	 */
	LRUCache.prototype.put = function(key, value) {
		let node = this.map[key]
		if(typeof node === 'undefined'){
			if(this.count >= this.capacity){
				this.popTail()
			}
			this.addNode(new Node(key,value))
		}else{
			node.v = value
			this.moveToHead(node)
		}
	};
	
	/** 
	 * Your LRUCache object will be instantiated and called as such:
	 * var obj = new LRUCache(capacity)
	 * var param_1 = obj.get(key)
	 * obj.put(key,value)
	 */

	 !function(){
		let cache = new LRUCache( 2 /* capacity */ );

		cache.put(2, 1);
		cache.put(2, 2);
		cache.get(2);       // returns 1
		cache.put(3, 3);    // evicts key 2
		cache.get(2);       // returns -1 (not found)
		cache.put(4, 4);    // evicts key 1
		cache.get(1);       // returns -1 (not found)
		cache.get(3);       // returns 3
		cache.get(4);       // returns 4
	 }()
}()