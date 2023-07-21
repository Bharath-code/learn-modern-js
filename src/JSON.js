// convert JSON to js object ->  deserialization
{
  const jsonString = `
    {
     "name" : "John",
     "age" : 23
    }

`;
  const obj = JSON.parse(jsonString);
  console.log(obj);

  console.log(obj.name);
  console.log(obj.age);

  console.log(typeof obj);
  console.log(typeof obj.name);
  console.log(typeof obj.age);
}

// convert js object to JSON -> serialization
// see the output of both serial and de-serial ,
//de-serialization make compact structure
{
  const person = {
    name: "John",
    age: 23,
  };
  const jsonString = JSON.stringify(person);
  console.log(jsonString);
  console.log(typeof jsonString);
}

// all json are all valid js objects, but not all js object are valid json
// not all function of js is supported in json

// invalid json structure
// 1. no single quotes for key and value - use ""
// 2. no trailing at the  

// valid json structure
{
  console.log(
    JSON.parse(`
        {
            "name" : "John Doe",
            "age" : 30,
            "isMarried": true,
            "children": null,
            "phoneNumbers" : [
                {"type": "home", "number": 14124124},
                {"type": "mobile", "number": 123424124}
            ],
            "address":{
                "streetNumber": 123,
                "streetName": "Main St"
            }
        }
    `)
  );
  // console.log(jsonString)
}

// json convert NaN and infinity -because these types of javascript
// so support all language it converts to null
{
    const nums = {
        age: 25,
        price: 666.96,
        location: NaN,
        experience: Infinity
    }
    console.log(JSON.stringify(nums))
}

//undefined -> will be removed from the output
// to use the properties of value undefined make it as null
// accessing invalid properties will also be undefined
{
    const person = {
        name: 'Jack',
        age: undefined
    }
    console.log(JSON.stringify(person))
}

// we can use custom function insie serialization
{
    const mozilla = {
        foundation : "mozilla",
        year: 1998
    }

    /**
     * @param {string} key
     * @param {any} value
     */
    function replacer(key,value){
        if(typeof value === "string"){
            return undefined
        }
        if(key === 'year'){
            return '****'
        }
        return value
    }
    console.log(JSON.stringify(mozilla,replacer))

    const point = {
        x:1,
        y:2,
        z:3
    };
    console.log(JSON.stringify(point))
    //to format with spacing optional third parameter can be passed to intend spacing
    console.log(JSON.stringify(point,null,2))
}

// we customize the json using toJSON() function in class
{
    class Person{
        /**
         * @param {{ name: string; age: number; }} config
         */
        constructor(config){
            this.config = config
        }

        toJSON(){
            return{
                type: 'person',
                ...this.config
            }
        }
    }
    const person = new Person({ name: 'John', age: 25})
    console.log(JSON.stringify(person))
}