let leet = 3000;
let yummy = 3.567;
let loss = -100;

/*
The === operator in JavaScript and Python compares the values 
and types of two expressions. In the case of 1377 === 1377.00, both expressions have the same value (1377). 
The .00 at the end of the second expression does not affect the type of the expression, 
as it is simply a zero-padded float literal. 
Therefore, the === operator will return True.
*/
console.log(1377 === 1377.0);

{
  let million = 1_000_000;
  console.log(million === 1000000);
}

{
  let million = 1e6;
  console.log(million === 1000000);
}

console.log(1e-6 === 0.000001);
console.log(typeof leet);

console.log(0.1 + 0.2);

//addition
console.log(1 + 2);

//subtraction
console.log(30 - 2);

//multiplication
console.log(3 * 5);

//division
console.log(14 / 4);

//modulo
console.log(3 % 2);
console.log(2 % 2);

//power
console.log(2 ** 4);

console.log("--------post-fix and pre-fix--------");
{
  let example = 0;
  let result = example++;
  console.log(result);
  console.log(example);
  console.log(result);
}
{
  let example = 0;
  let result = ++example;
  console.log(result);
  console.log(example);
  console.log(result);
}

{
  let alpha = 3;
  alpha++; //ok it will increment

  //3++ // variable is must to increment , cannot to do on value directly

  // cannot increment const variable ,  beta = beta + 1
  /* const beta = 5;
    beta++ */
}

// max safe integer -> largest number that can be handled by js runtime
{
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);

  console.log(Number.MIN_SAFE_INTEGER + 1); // rounded dont use
  console.log(Number.MIN_SAFE_INTEGER + 2); // rounded dont use

  //safe values
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));

  //unsafe values
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 2));
  console.log(Number.isSafeInteger(900030383883838383883838));
}

// Infinity
{
  console.log(10 ** 1000);
  console.log(-1 * 10 ** 1000);

  console.log(1 / 0);
  console.log(-1 / 0);

  console.log(Infinity === Infinity);
  console.log(-Infinity === -Infinity);

  console.log(Infinity > 1);
  console.log(-Infinity < -1);

  console.log(Number.POSITIVE_INFINITY === Infinity);
  console.log(Number.NEGATIVE_INFINITY === -Infinity);
}

//number to string
{
  let niceNumber = 42;
  console.log(niceNumber.toString());

  const message = "Nice number is : " + 42;
  console.log(message);

  const change = 123.353;
  console.log(change.toString());
  console.log(change.toFixed(2));
  console.log(change.toFixed(1));

  // int -> float -> string
  console.log(niceNumber.toFixed(2));
}
// string to number
{
  let niceNumber = "42";
  console.log(parseInt(niceNumber));

  const change = "123.353";
  console.log(parseInt(change));
  console.log(parseFloat(change));
  // unary operator changes string to respective number type
  console.log(+change);
}

//NaN
{
  const powerpuff = "Sugar, spice and everything nice";
  const valueOfPower = parseInt(powerpuff);
  console.log(valueOfPower);

  console.log(0 / 0);

  const first = parseFloat("alpha");
  const second = parseFloat("beta");

  console.log(first === second);
  /*
     weird parts of js
     Since NaN is a special value that represents an indeterminate value, it is not equal to any other value, including itself. 
     Hence, the comparison NaN === NaN returns false.
     
    console.log(NaN === NaN) // false
    console.log(NaN !== NaN) // true
    cossole.log(first === NaN) //false
    */

  console.log(isNaN(first));
  console.log(isNaN(second));
  console.log(isNaN(2341));
}

// convert to other number system -> binary, octal and hexadecimal
{
  let perfect = 2 ** 5;

  console.log(perfect === 32);
  console.log(perfect === 0b100000)
  console.log(perfect === 0o40)
  console.log(perfect === 0x20)

  // case insensitive
  console.log(0b100000 === 0b100000);
  console.log(0o40 === 0O40)
  console.log(0x20 === 0X20)

  //toString() decimal to number system
  console.log(perfect.toString());
  console.log(perfect.toString(2));
  console.log(perfect.toString(8));
  console.log(perfect.toString(16));

  //parseInt() convert number system to decimal
  console.log(parseInt('32'))
  console.log(parseInt('100000',2))
  console.log(parseInt('40',8))
  console.log(parseInt('20',16))

}

// math functions
{
    console.log(Math.ceil(1.01))
    console.log(Math.floor(1.51))

    console.log(Math.round(1.01))
    console.log(Math.round(1.99))
    console.log(Math.round(1.5))

    console.log(Math.random()) // random floating num between (>=0 and <1)
    const coinToss = Math.floor(Math.random() * 2)
    console.log(Math.random() * 2)
    console.log(coinToss)
    const diceRoll = Math.floor(Math.random() * 6)
    console.log(diceRoll)

    console.log(Math.min(1,2,3))
    console.log(Math.max(1,2,3))

    const radius = 1;
    const circumference = 2 * Math.PI * radius
    console.log(circumference)
}


