function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k)
{   
    if(head === null){
        return null
    }
    let arr = []
    while(true){
        arr.push(head)
        head = head.next
        if(head === null){
            break;
        }
    }
    return arr.length < k ? null : arr[arr.length - k]
}

;(function(){
    let node = new ListNode(1)
    node.next = null
    FindKthToTail(node,1)
}());