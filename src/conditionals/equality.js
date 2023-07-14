// @ts-nocheck
// loose-equality check
{
    console.log(0 == 0)
    console.log('Hi' == 'Hi')
    console.log(456 == 456)

    console.log(0 != 456)
    console.log('hi' == 'bye')
    console.log(42 == '42') // type coersion

    console.log(0 == false)
    console.log('' == false)

    console.log(5 == false)
    console.log('j' == false)
    console.log(42 != '42')

    console.log('' == false)
    console.log('0' == false)
    console.log('' == '0')
}
// strict-equality
{
    console.log(42 === '42') // no type coersion
    console.log( 42 === 42)
    console.log(42 === +'42') // intensional type coersion
    console.log('message' !== 'hello')
    console.log(42 !== '42')

}
//use typescript to catch this kind of errors