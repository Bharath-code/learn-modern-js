function allocate() {
  const result = [];
  for (let i = 0; i < 2500; i++) {
    result.push({ heavy: new Array(100_000).fill("1") });
  }
  return result;
}

{
  let result = allocate();
  console.log(result.length);
  /*
    let another1 = allocate()
    console.log(another1.length)
    let another2 = allocate()
    console.log(another2.length)
    let another3 = allocate()
    console.log(another3.length)
*/
  // reuse the variable with let and var with same variable name, so JS will automatically garbage collect the memory

  /* result = allocate()
    console.log(result.length)
    result = allocate();
    console.log(result.length);
    result = allocate();
    console.log(result.length);
    result = allocate();
    console.log(result.length);
    result = allocate();
    console.log(result.length);*/
}

// closure
{
  /**
   * @param {string | any[]} value
   */
  function closure(value) {
    const getLength = () => value.length;
    return getLength;
  }

  /* const fn1 = closure(allocate());
    console.log(fn1());
    const fn2 = closure(allocate());
    console.log(fn2());
    const fn3 = closure(allocate());
    console.log(fn3());*/

  //This memory leak is caused because the closure function returns the value.length
  // value is big value array with length 2500
  // so return function will hold of that value again giving burden to the system

  // so store the expensive value.length in a variable and return a function with that variable , so it won't hold up to that value from allocate()
  /**
   * @param {string | any[]} value
   */
  function closureCorrect(value) {
    const length = value.length;
    const getLength = () => length;
    return getLength;
  }

  /*const fn1 = closureCorrect(allocate());
    console.log(fn1());
    const fn2 = closureCorrect(allocate());
    console.log(fn2());
    const fn3 = closureCorrect(allocate());
    console.log(fn3());*/
}
