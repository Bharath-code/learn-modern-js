const Yes = true;
const No = false;

console.log(typeof Yes);
console.log(typeof No);

{
  let person = "Kate";
  console.log(person === "John");
  console.log(person === "Jane");

  if (person === "John") {
    console.log("Hi J");
  }
  if (person === "Kate") {
    console.log("Hi K");
  }

  console.log(!true);
  console.log(!false);

  console.log(!!true);
  console.log(!!false);

  // convert string to its respective or corresponding state in boolean
  console.log(!!""); // '' -> empty string is false
  console.log(!!"hello");

  let httpCode = 200;

  if (httpCode === 200) {
    console.log("success 🚀");
  } else if (httpCode >= 400 && httpCode <= 500) {
    console.log("Error❌");
  } else {
    console.log("unexcepted status 🐦");
  }
}

console.log("------how to name a boolean variables-------");
// you can get to know what to use for the variable if you ask the question to yourself
//Will be true if user "is" logged in
let userLoggedIn; // ❌
let isUserLoggedIn; // ✅

//Will be true if user "has" access
let access; // ❌
let hasAccess; // ✅

// will be true if user "has" to provide address
let provideAddress; // ❌
let shouldProvideAddress; // ✅

// will be true if user "can" dance
let dance; // ❌
let canDance; // ✅

let isNotAllowed; //🙈
isNotAllowed = true;
isNotAllowed = false;

let isAllowed; //😘
isAllowed = true;
isAllowed = false;
