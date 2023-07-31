/*
121 === 121
-121 !== 121-
*/

/**
 * @param {number} num
 */
function palindrome(num){
    let reverseNum = 0
    let numCopy = num
    while (numCopy > 0) {
        const lastDigit = numCopy%10
        reverseNum = reverseNum *10 + lastDigit
        numCopy = Math.floor(numCopy/10)
    }
   return num === reverseNum
}

console.log(palindrome(121))



/**
 * @param {number} num
 */
/* Easy method
function palindrome(num){
    
    const reverseNum = num.toString().split('').reverse().join('')
    console.log(reverseNum)
    return num.toString() === reverseNum
}

console.log(palindrome(10))
*/