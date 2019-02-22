module.exports = function throttle(fn, delay){
    let timer

    return function () {
        let that = this, args = arguments, last = + new Date()
        return function () {
            let now = + new Date()

            // if last is undefined, it's first time to exec
            if(last && now - last < delay){
                clearTimeout(timer)
                timer = setTimeout(() => {
                    fn.apply(that,args)
                    last = now
                }, timeout);
            }else{
                fn.apply(that,args)
                last = now
            }
        }
    }
}