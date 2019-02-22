function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k)
{   
    if(head === null || k === 0){
        return null
    }
    let count = 1
    let start = head
    while(true){
        count ++
        
        head = head.next
        if(head === null){
            if(count <= k){
                return null
            }
            break;
        }
        if( count > k){
            start = start.next
            ready = true
        }
    }
    return start
}


;(function(){
    let log = console.log
    let error = console.error
    function genLists(len){
        let count = 1
        let node = new ListNode(count)
        let src = node
        while(-- len){
            node.next = new ListNode(++ count)
            node = node.next
        }
        return src
    }

    let root = genLists(5)

    let res = FindKthToTail(root,5)

    res = FindKthToTail(root,6)
    res === null ? '' : error('expect null but not')
    log(res)
})();