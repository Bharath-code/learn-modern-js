
// default import -> give any name 
import * as example from "./example.js"
//named import -> can use only the name by export function by we can change using as keyword
import {sum as summation,subtract as subtraction, mess as message} from "./example.js"
import * as square from "./square.js"
import * as circle from "./circle.js"
console.log(message)
console.log(summation(10,34))
console.log(subtraction(10,4))

const shapes = ['circle','square']
for(const shape of shapes){
    if(shape === 'circle'){
        circle.render()
    }else if(shape === 'square'){
        square.render()
    }
}


