const {
    exchangeBetween
} = require('../util/array')

function quicksort(arr,left,right) {
    // 因为js的slice对于原始类型进行值copy，并不操作同一个数组
    // 所以不能比较length
    // if (arr.length < 2) {
    //     return arr
    // }

    if(right - left < 1){
        return arr
    }

    // 将right选为基准
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[right]) {
            exchangeBetween(arr,left,arr,i)
            left ++
        }
    }
    exchangeBetween(arr,left,arr,right)
    quicksort(arr,0,left - 1)
    quicksort(arr,left + 1, arr.length - 1)
    return arr
}

;
(function () {
    let {
        log,
        error
    } = require('../util/index')

    let {
        arrayIsEquals
    } = require('../util/array')
    let test = [2, 1,3]
    let res = quicksort(test,0,test.length - 1)
    log(res)
})();