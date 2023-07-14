//if elseif and else

{
  /**
   * @param {number} num
   */
  function nature(num) {
    let result;
    if (num >= 0) {
      result = "positive";
    } else {
      result = "negative";
    }
    return result;
  }
  console.log(nature(5));
  console.log(nature(-5));

  //method 2
  /**
   * @param {number} num
   */
  function nature2(num) {
    if (num >= 0) {
      return "positive";
    }
    return "negative";
  }
  console.log(nature2(5));
  console.log(nature2(-5));

  //method 3
  /**
   * @param {number} num
   */
  function nature3(num) {
    if (num === 0) {
      return "zero";
    } else if (num > 0) {
      return "positive";
    } else {
      return "negative";
    }
  }
  console.log(nature3(5));
  console.log(nature3(-5));
  console.log(nature3(0));

  //method 4 -> if its single line inside the if else block then no need for braces
  /**
   * @param {number} num
   */
  function nature4(num) {
    if (num === 0) return "zero";
    else if (num > 0) return "positive";
    else return "negative";
  }
  console.log(nature4(5));
  console.log(nature4(-5));
  console.log(nature4(0));
}

// using braces for logic separation
{
  /**
   * @param {number} a
   * @param {number} b
   */
  function checkValue(a, b) {
    if (a === 1) {
      if (b === 2) {
        console.log("a is 1 and b is 2");
      }
    } else {
      console.log("a is not 1");
    }
  }
  checkValue(1, 2);
  checkValue(1, 3); // nothing will print
}

// using braces will allow to use multiple statements inside the conditions
{
  /**
   * @param {string} password
   */
  function unlock(password) {
    if (password === "AZWTMEFI") {
      console.log("Access granted");
      console.log("Welcome Mr. President");
      console.log("You can select the target package");
      console.log("Target acquired");
      console.log("Confirm launch");
      console.log("🚀🚀🚀");
    }
  }
  unlock("kdkshsk");
  unlock("AZWTMEFI");
}

{
  /**
   * @param {boolean} sing
   */
  function sadPanda(sing) {
    if (sing) console.log("hey");
    console.log("ho");
    console.log("let go");
  }
  sadPanda(false);
}

// how to avoid to check multiple values
{
    let birthday;

    birthday = (/** @type {{ age: number | null; experience: number | null; }} */ person) => {
        if(person){
            if(person.age !== null){
                if(person.experience !== null){
                    person.experience += 10
                    person.age++
                }
            }
        }
    }
    // use this type of writing condition and return from function
    birthday = (/** @type {{ age: number | null; experience: number | null; }} */ person) => {
        if(
            !person
            || person.age === null
            || person.experience === null
        ) return
        person.experience += 10
        person.age++
    }
}