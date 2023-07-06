console.log("hello world");
console.log('hello world');
console.log("hello 'world'");
console.log('"hello" world');

console.log('\\') // to print backslash need to escape it with backslash
console.log("\u{1f339}")
console.log("Hi\tJohn")
console.log("Nick\nSalvo")

// function of string 32bit -> original value of string is immutable
console.log("------------string functions------")
let person = "Jack Salamander"
console.log(person.toLowerCase());
console.log(person.toUpperCase())
console.log(person)

console.log(person[0]);
console.log(person[1]);
console.log("undefined out of index 😂", person[100]);

console.log(typeof person)
console.log(person.length)

console.log("--------template literals--------")
console.log(`hello world`);
console.log(`"hello" 'world'`);
console.log(`'hello', "world" \`!\`  `)

const traditional = "Line 1 \n\
Line 2";
console.log("traditional -> ", traditional)
const modern = `Line 1
Line 2`
console.log("Modern -> ",modern)

let title = "Mr";
person = "Burns"

console.log("traditional -> ", title + ' '+person);
console.log(`modern ->  ${title} ${person}`);

let totalItems = 11;

console.log('Total items: '+ totalItems);
console.log(`Total items:  ${totalItems}`);
console.log(`Total items:  \${totalItems}`);

//trimStart() and trimEnd() are es2020 and later feature
const whitespaced = "\t hello world \n";
console.log(whitespaced)
console.log(whitespaced.trim())
console.log(whitespaced.trimStart())
console.log(whitespaced.trimEnd())

// replaceAll() is a es2021 and later feature
const dogs = "The quick brown fox jumps over the lazy dog. The dog was on a break."
console.log(dogs.replace('dog','hound'))
console.log(dogs.replaceAll('dog','hound'))

const VIN_DIESEL = 'X'.repeat(3);
console.log(VIN_DIESEL)

const GOOGOL =`1${'0'.repeat(100)}`
console.log(GOOGOL)

const echo =  'echoo '.repeat(51);
console.log(echo)

//these functions are case sensitives
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes('fox'))
console.log(sentence.startsWith('The'))
console.log(sentence.endsWith('dog'))
console.log(sentence.endsWith('DOG'))

const message = "Brave, Brave New World";
console.log(message.indexOf("Brave"))
console.log(message.lastIndexOf("Brave"))

// -1 if not found
console.log(message.indexOf("america"))
//case sensitive
console.log(message.includes("brave"))

const first = "Heartbreak";
const second = "Hotel";
console.log(first)
console.log(second)

console.log(first)
console.log(second.padStart(first.length))

console.log(first + " 🚀");
console.log(second.padEnd(first.length) + " 🚀");

const subMessage = "Hello World"
// single parameter -> returns string i.e omit from starting to the number provided omit index 0 positioning
// starts counting from 1 not 0 index (absolute)
console.log(subMessage.substring("Hello".length))
// two parameter -> returns string i.e from starting index to number provided
// starts counting from 1 not 0 index (absolute)
console.log(subMessage.substring(0,subMessage.indexOf('World')))
console.log(subMessage.indexOf("World"))