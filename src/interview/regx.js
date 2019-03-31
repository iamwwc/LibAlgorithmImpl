/* 特定语法匹配替换
 * 说明：匹配字符串中形如 =g文字文字= 的语法，并将相应部分转化为对应的标签<g>文字文字</g>
 * 示例：
 *   transform('=g1.18 进入开发=');  // <g>1.18 进入开发</g>
 *   transform('=g1.23 联调(-1)=，=g1.25 发布(+1)=')；//  <g>1.23 联调(-1)</g>，<g>1.25 发布(+1)</g>
 *   transform('1.25 发布')； // 1.25 发布
 */

;(function(){
    const match = /(=g[^=]*=)*/g
    function transform(s) {
      let res = s.match(match)
      return Object.keys(res).reduce((prev,next) => {
         let curr = res[next]
         if(curr){
             prev.push(`<g>${curr.substring(2,curr.length - 1)}</g>`)
         }
         return prev
      },[]) 
    }

    let b = transform('=g1.23 联调(-1)=，=g1.25 发布(+1)=')
    
})();