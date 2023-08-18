// @ts-nocheck
/**
 * Difference between weakmap and map is map has strong reference to its keys and hard to garbage collect
 * WeakMap holds weak reference to the keys and can be easily freed from the memory
 * WeakMap is useful in framework building task where memoziation, efficiency and speed is very important for heavy computation task
 * WeakMap has all the functions of Map but except size,keys,values,entries
 * Key of the WeakMap should have object and value can be string -> so it's easy for garbage collection
 */

const map = new Map()

let x,y;

x= {element : 'div'}
y= {element: 'input'}

map.set(x,'alpha')
map.set(y, 'omega')

console.log(map.get(x))
console.log(map.get(y))

// x and y go out of scope
x = null
y = null

// but still keys reference attached to the Map
console.log([...map.keys()])

console.log('----------WeakMap----------')

const weakMap = new WeakMap();



x = { element: "div" };
y = { element: "input" };

weakMap.set(x, "alpha");
weakMap.set(y, "omega");

console.log(weakMap.get(x));
console.log(weakMap.get(y));

// x and y go out of scope
x = null;
y = null;

// but here no  keys reference attached to the WeakMap and allows for garbage collection

