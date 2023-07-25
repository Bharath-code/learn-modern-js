
{
const person = 'Mike'
const age =28;

const simple = `Person: ${person}, Age: ${age}`
console.log(simple)

const format = (/** @type {any} */ strings, /** @type {any[]} */ ...expression) => {
  console.log(strings);
  console.log(expression)
  return strings[0] + expression[0] + strings[1] + expression[1] + strings[2];
};

const tagged = format`Person: ${person}, Age: ${age}.`;
console.log(tagged)

}

{
    let x=10, y = 20, z=30;
    const debug = (/** @type {any} */ strs, /** @type {any[]} */ ...exps) => {
        console.log(strs,exps)
    };
    debug`${x}${y}${z}`;
    debug`${x}`
    debug`${x+y+z}`
    debug``
}

{
    /**
     * @param {any[]} strs
     * @param {any[]} exps
     */
    function interpolate(strs, ...exps){
        return strs.reduce(
            (result,str,i) => {
                const exp = (i < exps.length) ? exps[i] : ''
                return result+str+exp.toUpperCase()
            },
            ''
        )
    };
    let pine = 'pineapple';
    let caps = 'capsicum';
    console.log(`I like ${pine} and ${caps} on pizza`)
    // @ts-ignore
    console.log(interpolate`I like ${pine} and ${caps} on pizza`)
}

// replace ** with ^ for exponential
{
    
    // @ts-ignore
    function calculate(strs,...exps){
        // @ts-ignore
        const math = strs.reduce((acc,str,i) => {
            return acc + str.replaceAll('^','**') + (exps[i]??'')
        },'');
        return eval(math)
    }

    const a =2;
    const b =4;
    console.log(calculate`${a}^${b}`)
}