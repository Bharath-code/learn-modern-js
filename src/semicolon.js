// @ts-nocheck


//ASI -> Automatic Semicolon Insertion
//js will add semicolon by default at the end of the each line, if we don't provide the semicolon


// this code will return error because , without semicolon at the end of b=2
//(a+b).toString() will attach to the b=2 line results in error
/*const a =1
const b =2
(a+b).toString()*/

// correct code will be 
// recommed to use prettier

const a =1 
const b=2
;console.log((a+b).toString())


