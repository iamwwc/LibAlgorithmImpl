/** 
 * 函数组合运行
 * 说明：实现一个方法，可将多个函数方法按从左到右的方式组合运行。
 *   如`composeFunctions(fn1,fn2,fn3,fn4)`等价于`fn4(fn3(fn2(fn1))`。
 * 示例：
 *  const add = x => x + 1;
 *  const multiply = (x, y) => x * y;
 *  const multiplyAdd = composeFunctions(multiply, add);
 *  multiplyAdd(3, 4) // 返回 13
 */

;(function(){
    let composeFunctions = (...fns) => (...args) => fns.reduce((prev,next) => next.apply(null,Array.isArray(prev) ? prev : [prev]),args)

    // 展开

    function anotherComposeFunctions(...fns){
        return function(...args){
            return fns.reduce((prev,next) => {
                return next.apply(null,Array.isArray(prev) ? prev : [prev])
            },args)
        }
    }


    //我当时的实现
    function MyComposeFunctions(...fns) {
        let curr 
        function recall(...args){
            curr = args
            for(let i = 0 ;i < fns.length ; i ++){
                curr = fns[i].apply(null,Array.isArray(curr) ? curr: [curr])
            }
            return curr
        }
       return recall
    }

    // ------------------test

    const add = x => x + 1;
    const multiply = (x, y) => x * y;
    const multiplyAdd = composeFunctions(multiply, add);
    // composeFunctions()
    let v = multiplyAdd(2,3)
}());