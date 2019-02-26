module.exports = function throttle(fn, delay) {
    let timer
    let last = + new Date()
    return function () {
        let that = this,
            args = arguments,
            now = +new Date()

        // if last is undefined, it's first time to exec
        if (last && now - last < delay) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(that, args)
                last = now
            }, timeout);
        } else {
            fn.apply(that, args)
            last = now
        }

    }
}