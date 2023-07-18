/**
 * nullish coalescing is a new feature in js
 * '||' operator only checks the falsy check for null and undefined
 * if '' or 0 it intercepts as false and return fallback value
 * so this is not ideal , this '??' operator is introduced to avoid confusion.
 */

{
    let message, input;
    // message = input || 'default value'  ->  (does more than null + undefined)
    message =  input == null ? 'default value' : input
    //or do this
    message = input ?? 'default value';
    console.log(message)

    // testing for string value
    console.log(null ?? 'default value')
    console.log(undefined ?? 'default value')
    console.log('valid input' ?? 'default value')
    console.log('' ?? 'default value')

    //testing for numberic value
    console.log(10 ?? 'default value')
    console.log(0 ?? 'default value')

}

// using ?? in objects and how it's usefull
{
    const armando = {
        name : 'Armando',
        cat : {
            name : 'Pixel',
            toys : ['floppy fish']
        }
    };
    //no error
    console.log(armando.name)
    console.log(armando.cat.name)

    // error
    // @ts-ignore
    console.log(armando.cat.food)
    // @ts-ignore
    console.log(armando.dog) // undefined
    //console.log(armando.dog.name) // error -> cannot  read properties
    // @ts-ignore
    console.log(armando.dog?.food)
    // @ts-ignore
    console.log(armando.getAddress)
   // console.log(armando.getAddress()) // error
   // @ts-ignore
   console.log(armando.getAddress?.());


}

// so previous block have error while accessing the undefined properties
// so let's do optional chaining
{
    let john = {
        name : 'John',
        address : {
            country : 'England'
        }
    }

    // jane obj doesn't have address , so accesing the properties will result in error, but
    // we have john who have address , so optional chaining comes in.
    let jane = {
        name : 'Jane'
    }

    /**
     * @param {{ name: any; address?: any; }} person
     */
    function logPerson(person){
        console.log('Name : ', person?.name)
        console.log('Address : ', person?.address?.country)
        // here ?. same as person.address == null ? undefined : person.address.country
        // so we can remove the ternary operator
    }
    logPerson(john)
    logPerson(jane)
}