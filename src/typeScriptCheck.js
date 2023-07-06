const valid = parseFloat('2.144')
console.log(valid)

const useless = parseFloat(2.133)
console.log(useless)

console.log([23,67])

const dangerous = [24] + [34];
console.log(dangerous)

// to create tsconfig.json file
//npx tsc --init --checkJs --noEmit --rootDir src

/*
    --checkJs -> check all js file with typescript
    --noEmit -> don't transpil js file to ts file
    --rootDir src -> check this with files in src folder
*/