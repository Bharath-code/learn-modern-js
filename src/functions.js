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
  console.log(sum(1, 2));

  sum = (a = 0, b = 0, c = 0) => a + b + c;
  console.log(sum(1, 2));
  console.log(sum(1, undefined, 4));
}

// call by value is default in js
{
  /**
   * @param {number} input
   */
  function tryToReassignPrimitive(input) {
    console.log(input);
    input = 4;
    console.log(input);
  }
  let primitive = 3;
  tryToReassignPrimitive(primitive);
  console.log(primitive);

  /**
   * @param {{ name: string; }} input
   */
  function tryToReassignObjects(input) {
    input = { name: "victor" };
    console.log(input);
  }

  let obj = { name: "john" };
  tryToReassignObjects(obj);
  console.log(obj);
}

// mental model for call by value and call by reference
/**
 * Once the original object is assigned to new obj, the new one will reference to the old one
 * Once we reassign the new obj with new value , it's reference will be detached
 * original obj value is unchanged
 */

/**
 * Two types -> reassigning and mutating the properties
 * Reassigning values will not affect the original obj
 * mutating the properties will affect the original obj
 */

{
  //like we do in variable assignment

  // Here we are not mutating the original obj properties like name
  // but we reassgining a new obj value to person dettaching from the object1
  let object1 = { name: "vivo" };
  let person = object1;
  console.log(person);

  person = { name: "nico" };
  console.log(person);
  console.log(object1.name);

  /**
   * @param {{ name: string; }} person
   */
  function reassignObject(person) {
    person = { name: "pete" };
    console.log(person.name);
  }
  reassignObject(object1);
  console.log(object1.name);

  // here we are mutating the properties of the object
  let object2 = { name: "salvo" };
  let person2 = object2;
  person2.name = "dormamo";
  console.log(object2.name);

  /**
   * @param {{ name: any; }} person
   */
  function mutatePerson(person) {
    person.name = "smith";
  }
  mutatePerson(person2);
  console.log(object2);
}
//pure and impure functions
{
  // impure function -> has side effect
  /**
   * @type {number}
   */
  /*let count;
  function incrementImpure(){
    count++
  }
  count = 0
  incrementImpure()
  console.log(count) */

  let count = 0;
  /**
   * @param {number} value
   */
  function incrementPure(value) {
    return value + 1;
  }
  count = incrementPure(count);
  console.log(count);
}

// destructing objects in functions
{
  // @ts-ignore
  function ranged({ value, min, max }) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }

  const finalValue = ranged({ value: 100, min: 45, max: 56 });
  console.log(finalValue);
  const { value, min, max } = { value: 100, min: 45, max: 56 };
}
// closure
{
  // normal

  var alpha = 0;
  function incrementAlpha() {
    alpha++;
  }
  incrementAlpha();
  console.log(alpha);
  incrementAlpha();
  console.log(alpha);

  function counter() {
    let count = 0;
    return function () {
      return count++;
    };
  }
  const inc = counter();
  console.log(inc());
  console.log(inc());
  console.log(inc());
}
// factory method - first class method
{
  function createCounter(initial = 0) {
    let count = initial;
    return {
      inc: () => count++,
      dec: () => count--,
      value: () => count,
      reset: (/** @type {number} */ value) => (count = value),
    };
  }
  const counter = createCounter();
  console.log(counter.value());
  counter.inc();
  console.log(counter.value());
  counter.reset(10);
  console.log(counter.value());
}

// object method declaration
{
  // both are same , no function difference here speak is key and function is value
  let catDog;
  catDog = {
    speak : () => {
      console.log("Meow");
      console.log("Woof")
    }
  }
  catDog = {
    speak() {
      console.log("Meow");
      console.log("Woof");
    },
  };
  catDog.speak()
}
// getters and setters 
{
    // @ts-ignore
    function createdRange({value, min, max}){
      return{
        get value(){
          return value
        },
        set value(newValue){
          value = Math.max(min, Math.min(max,newValue))
        }
      }
    }
    const ranged = createdRange({value:1, min:0, max: 10})
    console.log(ranged.value)
    ranged.value = 23;
    console.log(ranged.value)
}