// falsy values in js
{
    // @ts-ignore
    if(false){console.log('Will only log if truthy')}
    if(null){console.log('Will only log if truthy')}
    if(undefined){console.log('Will only log if truthy')}
    if(''){console.log('Will only log if truthy')}
    if(0n){console.log('Will only log if truthy')}
    if(0){console.log('Will only log if truthy')}
    if(NaN){console.log('Will only log if truthy')}
    //0n is bigInt
}

// convert the falsy to true
{
   console.log(!false) 
   console.log(!0) 
   console.log(!0n) 
   console.log(!undefined) 
   console.log(!null) 
   console.log(!NaN) 
   console.log(!'') 
}
// !! what is it and it's usecase
{
    console.log(!false)
    console.log(!true)

    console.log(!!false)
    console.log(!!true)

    // convert the falsy value to its boolean correspondance
    console.log(!!false)
    console.log(!!null)
    console.log(!!undefined)
    console.log(!!'')
    console.log(!!NaN)
    console.log(!!0)
    console.log(!!0n)

    // convert the truthy value to its boolean correspondance
    console.log(!!true)
    console.log(!!42)
    console.log(!!'Hello world')

    //usecase
    let array, hasItems
    array = []
    hasItems = !!array.length
    console.log(hasItems)

    array = [1,23]
    hasItems = !!array.length
    console.log(hasItems)

    /**
     * @param {string | number} value
     */
    function logNature(value){
        return value ? 'truthy' : 'falsy'
    }
    // '0' should be true and not false unlike loosly equality operator ,
    // so truthy and falsy are reliable than loose equality
    console.log(logNature(0))
    console.log(logNature(''))
    console.log(logNature('j'))
    console.log(logNature('0'))
    
    // @ts-ignore
    console.log(0 == false)
    // @ts-ignore
    console.log('' == false)
    // @ts-ignore
    console.log('0' == false)
    // @ts-ignore
    console.log('0.00' == false)
}