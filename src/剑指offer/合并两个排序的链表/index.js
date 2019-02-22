
function ListNode(node){
    this.val = node
    this.next = null
}

function Merge(pHead1, pHead2){
    let src, dst
    if(pHead1.val >= pHead2.val){
        src = pHead1
        dst = pHead2
    }else{
        src = pHead2
        dst = pHead1
    }

    while(dst.next || dst){
        if(dst.val <= src.val){
            src = insert(dst,src)
        }
        dst = dst.next
        if(src === null){
            
        }
    }
}

function insert(head,node){
    let temp = node.next
    node.next = head.next
    head.next = node
    return temp
}