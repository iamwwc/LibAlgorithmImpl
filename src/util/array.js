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

function exchangeBetween(arr1, index1, arr2,index2){
    arr1[index1] = arr1[index1] + arr2[index2]
    arr2[index2] = arr1[index1] - arr2[index2]
    arr1[index1] = arr1[index1] - arr2[index2]
    
}

function SliceArray(arr,start,end){
    return new Proxy(arr,{
        get:function(t,prop,receiver){
            if(prop === "length"){
                return end - start
            }
            prop = +prop
            if(typeof end === 'undefined'){
                end = arr.length
            }
            if(prop + start >= end){
                throw "Out of Bound"
            }
            
            return t[prop + start]
        }
    })
}

module.exports = {
    arrayIsEquals,
    exchangeBetween,
    SliceArray
}