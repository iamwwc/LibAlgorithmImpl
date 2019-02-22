function Power(base, exponent)
{
    if(exponent === 1){
        return base
    }

    if(exponent === 0){
        return 1
    }

    let result = 0
    let temp = base
    while(exponent !== 0){
        if((exponent & 1) === 1){
            result *= temp
        }
        exponent >>= 1
        temp *= temp
    }
    return result
}

;(function(){
    Power(10,13)
}());