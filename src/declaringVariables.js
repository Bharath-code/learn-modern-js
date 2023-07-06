/* 
    let , const and var -> are way to declare a variable

    let:
    Iniatialization is optional
    reassignment is possible
    block scoped
*/

let exampleLet;
console.log(exampleLet);

exampleLet = "hello";

console.log(exampleLet);

let exampleLet1 = "hello world";
console.log(exampleLet1);
console.log(exampleLet1);

exampleLet1 = "allow reassignment";
console.log(exampleLet1);

console.log("------------const------------");

/*
    const must be initialized -> 'const' declarations must be initialized.
    block scoped
*/
{
  let withLet;
  withLet = 0;
}

{
  //cannot reassign an constant ->  this error will show at run time
  /* const withConst = 0;
  withConst = 1;
  console.log(withConst); */
}
console.log("---------temporal dead zone------");
/*temporal dead zone
    before variable declared or ini ,if we access it shows error 
    after variable declared not ini , it shows undefined
*/
{
  //console.log(example) // cannot access uninitialized variable
  let example;
  console.log(example);
}
// var will hoist the variable at the top of the scope , so we don't get temporal dead zone
{
  console.log(example);
  var example;
  console.log(example);
}
// const cannot have TDZ because we have to initialize it
/* {
    console.log(example)
    const example;
    console.log(example)
} */
console.log("-------block scope-------");
// message is variable if it is let or const is block scoped , we can use same variable in different blocks
{
  let message = "hello there....";
  console.log(message);
}

{
  const message = "hey, hi.. how do you do...";
  console.log(message);
}

//console.log(message); // message not defined

console.log("------commenting--------");

// single line commenting
/* 
    multiline commenting
    you can add more lines
*/

//comment const newSingle = 10
const newSingle = 10; // we can add single line comment at the end of the line not at the beginning

/* before */ const newDouble = /*middle*/ "nice"; /* after */

/**
 * Nicely formatted *\/ multi-line code
 * 
 * shows up as documentation, hover over hello variable
 */

let hello = "world"