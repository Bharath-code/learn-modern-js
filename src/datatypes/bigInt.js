// bigInt is a primitive datatype , you can how digits as big as you want
{
    const bigInt = 100000000000000n
    console.log(typeof bigInt)

    console.log(-100n)

    console.log(100**300) //infinity
    console.log(100n**300n)

    console.log(9999999999999999999) //round-off
    console.log(9999999999999999999n); //wont round-off

    console.log(BigInt('99999999999999999'))

    const parsed = BigInt('100') //100n
    console.log(100n === parsed)

    console.log(BigInt('0x64') === 100n)

}

{
    console.log(Number(100n) === 100)
    console.log(BigInt(100) === 100n)

    //only integer can be converted
    try{
        BigInt(10.5)
    }catch(e){
        // @ts-ignore
        console.log(e.message)
    }

    console.log(Number(10n ** 500n))
    console.log(Number(9007199254740993n)) //beyond maxsafe
    //cannot mix bigInt with other types
    try{
        // @ts-ignore
        console.log(10+20n)
    }catch(e){
        // @ts-ignore
        console.log(e.message)
    }
    //convert the bigInt to number type and do the calc
    console.log(10+Number(20n))
}

//maxsafe
{
    console.log(Number.MAX_SAFE_INTEGER +1)
    console.log(Number.MAX_SAFE_INTEGER +2)

    const completelySafe = BigInt(Number.MAX_SAFE_INTEGER)
    console.log(completelySafe+1n)
    console.log(completelySafe+6n)

    console.log(20n*2n)
    console.log(20n-2n)
    console.log(20n+2n)
    console.log(21n/2n) // 10.5 won't be the result it will be floored to 10
    console.log(3n % 2n) 

    console.log(50n === 50n)
    // @ts-ignore
    console.log(50n == 50) // comparing bigInt and number with loose equal
    console.log(1n < 2)
    console.log(2n > 1)
}