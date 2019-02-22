function quicksort(arr, left, right) {
    if (left > right) {
        return arr
    }

    let base = arr[left]

    let i = left,
        j = right

    while (i !== j) {
        while (arr[j] >= base && j > i) {
            j--
        }

        while (arr[i] <= base && j > i) {
            i ++
        }
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }

    let temp = arr[left]
    arr[left] = arr[i]
    arr[i] = temp

    quicksort(arr, left, i - 1)
    quicksort(arr, i + 1, right)
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
    let test = [2, 4, -1, 5, 0, 0, 6]
    let res = quicksort(test, 0, test.length - 1)
    log(res)
})();
