function arrayIsEquals(a1, a2){
    if(a1.length !== a2.length){
        return false
    }
    let count = 0 , k = 0
    while(count < a1.length){
        if(a1[count ++] !== a2[k ++]){
            return false
        }
    }
    return true
}

module.exports = {
    arrayIsEquals
}