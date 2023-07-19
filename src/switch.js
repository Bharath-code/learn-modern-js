{
  // status code 200,300,400,500
  // only 200 is success and others are error
  // need not write error message for invalid code , we group it and give only one message
  const code = 200;
  switch (code) {
    case 200:
      console.log("success");
      break;
    // @ts-ignore
    case 300:
    // @ts-ignore
    case 400:
    // @ts-ignore
    case 500:
      console.log("Error");
      break;
  }
}

{
  /**
   * @param {string} animal
   */
  function sendToArk(animal) {
    switch (animal) {
      case "dog":
      case "cat":
        console.log("send to lower deck");
        break;
      case "piegon":
      case "chicken":
        console.log("send to upper deck");
      default:
        console.log("extinct");
    }
  }
  sendToArk("dog");
  sendToArk("chicken");
  sendToArk("dino");
}

// stricly equal
{
  let person = {
    name: "john",
  };

  // this wont work because switch comparsion is of stricly equal '==='
  // so eventhough object is of same structure and value , there are not in same memory, as we learned about objects

  switch (person) {
    case { name: "john" }:
      console.log("hey john~~~~");
      break;
  }

  switch (person.name) {
    case "john":
      console.log("hey john!!!");
      break;
  }
}

// replace break to return
{
    /**
     * @param {number} value
     */
    function tossResult(value){
        switch(value){
            case 0:
                return "heads"
            case 1: 
                return "tails"
        }
    }
    console.log(tossResult(0))
    console.log(tossResult(1))
}

// how to block scope if we are using multiple lines in case
// variable declared in one case will conflict with others
{
    const greetings = 'say_hello'
    switch (greetings) {
      case "say_hello": {
        let message = "hello";
        console.log(message);
        break;
      }
      // @ts-ignore
      case "say_hi": {
        let message = "hi";
        console.log(message);
        break;
      }
      default: {
        let message = "invalid greetings received";
        console.log(message);
        break;
      }
    }
}

// we simplify the switch with object lookup
{
    /**
     * @param {string | number} day
     */
    function officeHours(day){
        return{
            Monday : '9:00 - 17:00',
            Tuesday : '11:00 - 17:00',
            Wednesday : '11:00 - 17:00',
            Friday : '11:00 - 17:00',
            Saturday : '9:00 - 15:00',
        }[day] ?? 'closed'
    }
    console.log(officeHours('Monday'))
    console.log(officeHours('Sunday'))
}