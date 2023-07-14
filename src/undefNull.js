//learn about undefined -> when it will occur in runtime
{
    let message;
    console.log(message)

    //function with no return statement
    function noReturnValue(){}
    console.log(noReturnValue())

    //accessing invalid property of an object
    // @ts-ignore
    let obj = { name : 'john'}
    //console.log(obj.age) -> will return undefined

    //not passing argument to the funtion with parameter is there
    /**
     * @param {undefined} [param]
     */
    function singleParameter(param){
        console.log(param)
    }
    singleParameter();

    console.log(typeof undefined)

    console.log(undefined === undefined)
    console.log(message === undefined)
}

// how to avoid runtime error for undefined variables
{
    let message;
    if(message === undefined) console.log('message is undefined')

    //if(modernFeature === undefined) console.log('modernFeature is undefined')

    // so to avoid runtime error , use typeof
    // @ts-ignore
   
    if(typeof modernFeature === undefined) console.log('modernFeature is undefined')
}

//null
{
    //typof null -> 'object'
    const str = 'bob from bobbington'
    console.log(str.match('ben'))

    console.log(typeof null)

    const obj = {}
    console.log(typeof obj)

    //take not important
    console.log(null === null)
    console.log(obj === null)

    /**
     * @param {number} id
     */
    function getProfile(id){
        if(id === 1){
            return {name : 'John doe'}
        }else if (id === 2){
            return {name : 'Jane doe'}
        }else {
            return null
        }
    }

    console.log(getProfile(1))
    console.log(getProfile(2))
    console.log(getProfile(20))
}

//nullish -> combining both null and undefined 
// here loosly equality useful
// only undefined and null equal in loosly equality
{
    console.log(null == null)
    console.log(undefined == null)
    console.log(null == undefined)
    console.log(undefined == undefined)

    console.log(false == null)
    console.log('' == null)
    console.log(0 == null)
    console.log(false == undefined)
    console.log(0 == undefined)
    console.log(0 == undefined)

    console.log('hi' == null)
    console.log(47 == null)
    // @ts-ignore
    console.log({} == undefined)
    // @ts-ignore
    console.log([] == undefined)
    
    function capture(value){
        if(value == null){
            console.log('null or undefined')
        }else{
            console.log('everything else')
        }
    }
    capture(null)
    capture(undefined)

    capture(0)
    capture('')
    capture(false)
    capture({})
    capture([])
    
}