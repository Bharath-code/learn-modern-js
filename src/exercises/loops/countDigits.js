/*
27868 : 5
*/

/**
 * @param {number} num
 */
function countDigits(num){
    //handle -ve number
    // using do while because even 0 has count value 1, atleast count will be one for any give number
    num = Math.abs(num)
    let count = 0
    do{
        count++
        num  = Math.floor(num/10)
    }while(num > 0)
    return count
    //return num.toString().length -one method
}

console.log(countDigits(-1120))
console.log(countDigits(-20))