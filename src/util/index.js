function ListNode(x){
    this.val = x
    this.next = null
}

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



const error = console.error
const log = console.log

module.exports = {
    genLists,
    error,
    log
}