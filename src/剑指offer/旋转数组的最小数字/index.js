/**
 * 
 * https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=13&tqId=11159&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
 */

function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length === 0){
        return 0
    }
    let len = rotateArray.length
    for(let i = 0 ; i < len; i ++){
        if(rotateArray[i] > rotateArray[i + 1]){
            return rotateArray[i + 1]
        }
    }
}

;(function(){
    let error = console.error
    let arr = [5,6,7,4,1,2,3]
    let min = minNumberInRotateArray(arr)
    min === 4 ? '': error(`${min} is not max value` )
}());