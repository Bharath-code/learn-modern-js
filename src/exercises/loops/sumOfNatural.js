/**
 * @param {number} num
 */
function sumOfNaturalNumbers(num){
    /*let sum = 0
    for(let i=1;i <= num;i++){
        sum += i
    }
    return sum*/
    return num*(num+1)/2
}

console.log(sumOfNaturalNumbers(5))
console.log(sumOfNaturalNumbers(15))
console.log(sumOfNaturalNumbers(8))