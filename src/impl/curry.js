// 函数柯里化
// 没有按照 lodash 的实现
// 所以自己理解实现的可能会有bug
function curry(fn){
  let tmp = []
  let length= fn.length, count = 0, self = this;
  let slice = Array.prototype.slice
  function step (...args) {
      tmp.push(...args)
      count += args.length
      if(count >= length){
          return fn.apply(self, tmp.slice(0,length))
      }
      return step
  }
  return step
 }

!function(fn) { 

  function test1(n1,n2,n3) {
   return n1 + n2 + n3
  }

  let res = curry(test1)(1)
  res = res(2)(3)

}()