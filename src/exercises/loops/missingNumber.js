// @ts-nocheck
function missingNumber(nums){
    return nums.length * (nums.length+1)/2 - nums.reduce((acc,curr) => acc+curr,0)
}

console.log(missingNumber([0,1,2,3]))
console.log(missingNumber([0,1,2,3,9,7,4,6,5]))