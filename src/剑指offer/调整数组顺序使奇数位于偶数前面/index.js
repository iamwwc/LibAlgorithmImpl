function reOrderArray(array)
{
    let evenStart = array.length
    let len = array.length
    
    let i = 0
    while(i < len){
        if(array[i] % 2 === 0){
            let v = array[i]
            array.splice(i,1)
            array.push(v)
            i = 0
            len --
            continue
        }
        i ++
        
    }
    return array
}