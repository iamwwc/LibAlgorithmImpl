async function getNewLine(){
	var rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    var continuation;
    var getline = (() => {
        var thenable = {
            then: resolve => {
                continuation = resolve;
            }
        };
        return () => thenable;
    })();

    rl.on('line', line => continuation(line))

    rl.on('close', function () {
        console.debug('console close')
	})
	// new Promise 之后then方法将立即执行，这时，continuation获得了resolve，读取到line
	// 之后，主动resolve，await 获得结果
	// 需要自己实现一下Promise体验一下
    return await getline()
}


let res = await getNewLine()
let b = 1