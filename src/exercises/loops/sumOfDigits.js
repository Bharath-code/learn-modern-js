/*
1245 = 1+2+4+5 = 12
*/

/**
 * @param { number} num
 */
function sumOfDigits(num) {
  let sum = 0;
  while(num > 0){
    sum += num%10
    num = Math.floor(num/10)
  }
  return sum;
}

console.log(sumOfDigits(1287))