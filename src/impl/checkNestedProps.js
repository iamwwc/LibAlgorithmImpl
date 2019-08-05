// https://stackoverflow.com/questions/2631001/test-for-existence-of-nested-javascript-object-key

!function() {
  const checkNestedAreNotFalsy = (target, level, ...args) => {
    if (typeof target === 'undefined') return [false, undefined]
    if (args.length === 0 && target.hasOwnProperty(level)) return [true, target[level]]
    return checkNestedAreNotFalsy(target[level], ...args)
  }
  
  let o = {
    change:{
      application:{
        meta_schema:{
          runtimeEnv: "java"
        }
      }
    }
  }
  
  var [exist, runtimeEnv] = checkNestedAreNotFalsy(o, 'change', 'application', 'meta_schema', 'runtimeEnv')
  console.log(exist)
  console.log(runtimeEnv)
  var [exist, no] = checkNestedAreNotFalsy(o, 'change', 'application', 'meta_schema', 'no')

  console.log(exist)
  console.log(no)

  //true
  //java
  //false
  //undefined
}()