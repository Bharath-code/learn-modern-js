/**
 * @param {number} value
 * @param {number} percentDiscount
 */

function calculateDiscountedValue(value, percentDiscount) {
  const result = value - (value * percentDiscount) / 100;
  return result;
}
// functions are hoisted , so you can call the function before it's implementation

let discountedValue;

discountedValue = calculateDiscountedValue(100, 10);
console.log(discountedValue);

discountedValue = calculateDiscountedValue(2000, 12);
console.log(discountedValue);

/* discountedValue = calculateDiscountedValue(456,23,"op")
console.log(discountedValue) */ // even if three para passed function won't give any error

{
  /**
   * @param {number} a
   * @param {number} b
   */
  function sum(a, b) {
    const sum = a + b;
  }
  // use return statement
  const result = sum(12, 78);
  console.log(result);
}

{
  console.log(Math.max(12, 77, 90));
  const numbers = [34, 67, 36];
  console.log(Math.max(numbers[0], numbers[1], numbers[2]));
  // so spread op comes in
  console.log(Math.max(...numbers));

  /**
   * @param {string} a
   * @param {undefined} [b]
   */
  function example(a, b) {
    console.log(`a:${a} b:${b}`);
  }
  const message = ["hello", "world"];
  // @ts-ignore
  example(...message);
}

// function expression
{
  let hello = function example() {
    console.log("three...");
  };
  //example(); can't access example but we can access hello
  // function expressions are not hoisted
  hello();

  //ananomys function
  hello = function () {
    return "hello world";
  };
  console.log(hello());
}

//IIFE (Immediately Invoked Function Expression)
{
  (function () {
    console.log("hellow");
  })();
}

//callback
{
  /**
   * @param {{ (): void; (): void; }} callback
   */
  function runTwice(callback) {
    callback();
    callback();
  }
  runTwice(function () {
    console.log("hello callback");
  });

  setTimeout(function () {
    console.log("one second has passed");
  }, 1000);
  setTimeout(function () {
    console.log("Two second have passed");
  }, 2000);
}

// arrow-function
{
  // @ts-ignore
  const sum = (a, b) => {
    return a + b;
  };
  sum(10, 23);
  // @ts-ignore
  const minus = (a, b) => a - b;
  // @ts-ignore
  const plus10 = (x) => x + 10;
}
// build similar function of console.log()
{
  /**
   * @param {any[]} allPara
   */
  // without spread operator we will be getting array
  function log(...allPara) {
    console.log(...allPara); //spread op
  }
  //log(1,2)
  //log(1)
  //log(1,2,3)
  log(1, 2, 3, 4);
  log("bhaf", "dhjkjs", "djjdj");

  /**
   * @param {any[]} rest
   * @param {string} prefix
   */
  // rest parameter should be last
  function next(prefix, ...rest) {
    console.log("~~~~~" + prefix + "~~~~~");
    console.log(...rest);
  }
  next("incoming", "hello", "world");
}
// default values
{
  let sum;
  // @ts-ignore
  sum = (a, b, c) => a + b + c;
  console.log(sum(1, 2, 3));
  console.log(sum(1,2))

  sum = (a=0, b=0, c=0) => a+b+c;
  console.log(sum(1,2))
  console.log(sum(1, undefined, 4))
}
