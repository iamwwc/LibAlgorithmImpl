let stackIn = []
let stackOut = []

function push(node)
{
    if(!isEmpty(stackOut)){
        reverse(stackOut,stackIn)
    }
    stackIn.push(node)
    // write code here
}
function pop()
{
    reverse(stackIn,stackOut)
    return stackOut.pop()
    // write code here
}

function reverse(src, dst){
    let len = src.length
    for(let i = 0 ; i < len; i ++){
        dst.push(src.pop())
    }
}

function isEmpty(a){
    return a.length === 0
}

;;(function(){
    push(1)
    push(2)
    push(3)
    pop()
    pop()
    push(4)
    pop()
    push(5)
    pop()
    pop()
}())