function generateRandNumBewteen(start,end){
    return Math.floor(Math.random() * (end - start)) + start
}

module.exports = {
    generateRandNumBewteen
}