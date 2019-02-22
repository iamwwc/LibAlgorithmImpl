function ListNode(x) {
    this.val = x;
    this.next = null;
}

function ReverseList(pHead) {
    if(pHead === null){
        return null
    }

    let tail = pHead
    pHead = pHead.next
    tail.next = null
    let head = tail
    while(pHead){
        head = pHead
        pHead = pHead.next
        head.next = tail
        tail = head
    }
    return head
}



;
(function () {
    const {
        genLists,
        log
    } = require('../../util/index')

    let root = genLists(5)
    let head = ReverseList(root)
    log(head)
})();