// @ts-nocheck
function expandedForm(num) {
  // Your code here
  let newArr = [];
  while(num>0){
    const numLength = num.toString().length;
    const findBase10 = 10 ** (numLength - 1);
    console.log(numLength, findBase10);
    let quo = Math.floor(num / findBase10);
    let remainder = num % 10;
    let findWhole = quo * findBase10
    let wholeNum = num - findWhole;
    console.log(`Quotient : ${quo}, Remainder : ${remainder} \n`);
    console.log(num,findWhole,wholeNum);
    newArr.push(findWhole);
    num = wholeNum
    
  }
  console.log(newArr)
  return newArr.join('+')
}
console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304));