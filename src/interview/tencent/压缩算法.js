// 题目描述
// 小Q想要给他的朋友发送一个神秘字符串，但是他发现字符串的过于长了，于是小Q发明了一种压缩算法对字符串中重复的部分进行了压缩，对于字符串中连续的m个相同字符串S将会压缩为[m|S](m为一个整数且1<=m<=100)，例如字符串ABCABCABC将会被压缩为[3|ABC]，现在小Q的同学收到了小Q发送过来的字符串，你能帮助他进行解压缩么？ 

// 输入描述:
// 输入第一行包含一个字符串s，代表压缩后的字符串。
// S的长度<=1000;
// S仅包含大写字母、[、]、|;
// 解压后的字符串长度不超过100000;
// 压缩递归层数不超过10层;
// 输出描述:
// 输出一个字符串，代表解压后的字符串。
// 示例1输入输出示例仅供调试，后台判题数据一般不包含示例
// 输入
// 复制
// HG[3|B[2|CA]]F
// 输出
// 复制
// HGBCACABCACABCACAF
// 说明
// HG[3|B[2|CA]]F−>HG[3|BCACA]F−>HGBCACABCACABCACAF

function go(sz) {
  if ( typeof sz === 'undefined' || sz === '') {
    return ''
  }
  let stack = []
  let regexp = /(\[(\d+)\|.+\])/
  // (\[\d+\|\w+\])
  while(true) {
    let res = regexp.exec(sz)
    if (!res) {
      break;
    }
    let sub = res[0]
    let pre = sz.split(sub)[0]
    let next = sz.split(sub)[1]
    let count = Number.parseInt(res[2])
    let indexOf = sub.indexOf('|')
    sz = sub.substr( indexOf+ 1,sub.length - indexOf - 2)
    stack.push({
      pre,
      next,
      sub,
      count
    })
  }
  return stack.reverse().reduce((prev, next,index, all) => {
    let r = /\[(\d+)\|(.+)]/
    let obj = r.exec(next.sub)
    let num = Number.parseInt(obj[1])
    let chars = !!prev ? prev : obj[2]
    let tmp = ''
    for(let i = 0 ; i < num ; i ++ ){
      tmp += chars
    }
    return next.pre + tmp + next.next
  },'')
}

const test= 'HG[3|B[2|CA]]F'

let result = go(test)
debugger