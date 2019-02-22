
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function ReverseList(pHead) {
    if(pHead === null){
        return null
    }
    let tail = clone(pHead)
    tail.next = null
    let head = tail
    while (true) {
        pHead = pHead.next
        if (pHead === null) {
            break;
        }
        head = clone(pHead)
        head.next = tail
        tail = head
    }
    return head
}

function clone(node) {
    let n = new ListNode(node.val)
    n.next = node.next
    return n
}