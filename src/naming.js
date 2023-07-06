/**
 * Identifier naming restriction in javascript
 *
 * Allowed -> variable starts with [a-z],[A-Z],_,$,unicode
 * Not allowed -> digits,emojis,no special character
 * case sensitive
 */
let allowed;
let $allowed;
let _allowed;
let all0wed;
let allowed0;
let aLLowed;
let Allowed;

//let 0notAllowed;
//let notAllowed🚀;

/**
 * Conventions in naming an identifier
 */

let first_name = "Bharath"; // snake_case ❌
let firstName = "Bharath"; // camelCase - Most things in JS ✅
let FirstName = "Bharath"; // PascalCase - only for classes and special library things (like react component)✅
const FIRST_NAME = "BHARATH"; // CAPITAL_SNAKE_CASE - only for constants✅
//let first-name = "Bharath" // kebab-case is not valid in js because "-" will treat it as minus❌
