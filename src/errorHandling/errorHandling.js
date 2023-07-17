const basicError = new Error("Somthing bad happened");
console.log(basicError.message);
console.log(basicError.stack);
console.log(basicError.name);

const rangeErrorHandle = new RangeError("wrong number");
console.log(rangeErrorHandle.message);
console.log(rangeErrorHandle.stack);
console.log(rangeErrorHandle.name);

// find instances
console.log(basicError instanceof Error);
console.log(rangeErrorHandle instanceof RangeError);
// this return true because RangeError inherits Error class , so object child is also instance of parent class
console.log(rangeErrorHandle instanceof Error);
console.log(basicError instanceof RangeError);

// try catch
{
  try {
    // @ts-ignore
    callUndeclaredFunction();
  } catch (err) {
    console.log("----instance-----");
    console.log(err instanceof Error);
    console.log("-----message-----");
    // @ts-ignore
    console.log(err.message);
    console.log("----stack----");
    // @ts-ignore
    console.log(err.stack);
  }
  console.log("yay we made it!!");
}

// check if parameter are numbers for sum of two numbers
{
  /**
   * @param {number} a
   * @param {string} b
   */
  function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Parameters should be numbers");
    }
    return a + b;
  }

  sum(100, "110");
}
