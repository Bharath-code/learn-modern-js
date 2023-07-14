// what is expression
{
    let a = 9 //here 9 is expression
    let b = a // here a is expression
    let c = a + b // here a+b is expression
    // but js runtime will execute in statement if is statement let c = a +b is statement
    if(true){
        console.log('hello there')
        console.log('I\'am the saviour speaking')
    }
    const condition = Math.random() < 0.5
    //const value = if (condition) { 'HEAD'} else { 'Tail' } -> error : expression needed, because here if is a statement
    //so if the result of if statement is expression then we can use ternary operator
    const value =  condition ? 'HEAD' : 'TAIL'
    console.log(condition,value)
}

// how ternary reduces the complexity and improves readability and  eligency 
{
  // without using Math.max() implement using reduce
  /**
     * Initially, the accumulator is set to -Infinity to ensure that any value in the array will be greater than the initial value.
     * Inside the reducer function, it checks if the current value (current) is greater than the accumulator (acc).
     * If it is, it returns the current value as the new accumulator. Otherwise, it returns the accumulator unchanged.

 */
  const items = [3, 78, 54, 1, 74];
  const maxVal = items.reduce((acc, current) => {
    if (current > acc) return current;
    else return acc;
  }, -Infinity);
  console.log(maxVal);

  //method 2 using ternary
  const maxVal2 = items.reduce(
    (acc,current) => current > acc ? current : acc, -Infinity
    )
  console.log(maxVal2)
}
// destructing in ternary
{
    let weather, upper, lower, head
    upper = weather === 'warm' ? 'shirt' :'sweater'
    lower = weather === 'warm' ? 'shorts' :'jeans'
    head = weather === 'warm' ? 'caps' :'beanie'

    // @ts-ignore
    [upper, lower, head] = weather === 'warm' ? ['shirt','shorts','caps'] : ['sweater','jeans','beanie']
    console.log(upper)
}

//nested ternary
{
    /**
     * @param {number} num
     */
    function nature(num){
        return(
            num === 0 ? 'zero' // if
                : num > 0 ? 'positive' // else if
                    : 'negative' // else
        )
    }
    
    console.log(nature(5))
    console.log(nature(-5))
    console.log(nature(0))
}

// ternary has lower precedence
{
    /**
     * @param {number} value
     * @param {boolean} isPercent
     */
    function formatedDiscount(value, isPercent){
        // @ts-ignore
        return value + isPercent ? '%' : '$'
    }
    // we don't desired result since '+' operator will take precedence over ternary operator, so it will alway be true
    console.log(formatedDiscount(20,true))
    console.log(formatedDiscount(20,false))

    /**
     * @param {any} value
     * @param {any} isPercent
     */
    function formatedDiscountRight(value, isPercent) {
        //good practice to separate it to new variable
        const suffix = isPercent ? '%' : '$'
      return value + suffix;
    }
     console.log(formatedDiscountRight(20, true));
     console.log(formatedDiscountRight(20, false));
}