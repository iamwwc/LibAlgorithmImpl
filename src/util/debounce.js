module.exports = function debounce(fn,delay){
    let timer

    return function () {
        let that =this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(that,args)
        }, delay);
    }
}