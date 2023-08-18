// @ts-nocheck
/**
 * Difference between WeakSet and Set is Set has strong reference to its keys and hard to garbage collect
 * WeakSet holds weak reference to the keys and can be easily freed from the memory
 * WeakSet is useful in framework building task where memoziation, efficiency and speed is very important for heavy computation task
 * WeakSet has all the functions of Set but except size,keys,values,entries
 * Key of the WeakSet should have object and value can be string -> so it's easy for garbage collection
 */

const set = new Set();

let x, y;

x = { element: "div" };
y = { element: "input" };

set.add(x, "alpha");
set.add(y, "omega");

console.log(set.has(x));
console.log(set.has(y));

// x and y go out of scope
x = null;
y = null;

// but still keys reference attached to the Map
console.log([...set]);

console.log("----------WeakSet----------");

const weakSet = new WeakSet();

x = { element: "div" };
y = { element: "input" };

weakSet.add(x, "alpha");
weakSet.add(y, "omega");

console.log(weakSet.has(x));
console.log(weakSet.has(y));

// x and y go out of scope
x = null;
y = null;

// but here no  keys reference attached to the WeakMap and allows for garbage collection
//console.log([...weakSet]) weakSet is not iterable

// use case
const visited = new WeakSet()
function hasVisited(object){
    return visited.has(object)
}
function visit(object){
    visited.add(object)
}

let john = {name : 'john'}
let mary = {name : 'mary'}
let jack = {name : 'jack'}

visit(john)
visit(mary)

console.log(hasVisited(john))
console.log(hasVisited(mary))
console.log(hasVisited(jack))

john = null
mary = null
jack = null
//objects previously referenced are now garabage collected