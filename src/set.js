//intro
// set is new data structure , which follows hash map
// it has inbuilt hash function and allocate the values without collision
// it removes the duplicate values and we can access in O(1)



// we can pass the iterable to Set() like array or string
{
    const numbers = new Set();
    numbers.add(5)
    numbers.add(1)
    numbers.add(5)
    console.log(numbers)

    const messagesV = new Set(['holla','amigo','holla'])
    console.log(messagesV)

    const characters = new Set('hello')
    console.log(characters)

    console.log(numbers instanceof Set)
    console.log(messagesV instanceof Set)
    console.log(characters instanceof Set)
}

// set itself iterable
{
    const people = new Set(['john','jane','jack'])

    for(const person of people){
        console.log(person)
    }

    // convert set to array
    const peopleArray = [...people]
    console.log(peopleArray)

    // changes made in copied set won't reflect in original set
    const peopleCopy = new Set(people)
    peopleCopy.add('jill')
    console.log(people)
    console.log(peopleCopy)

}

// set perserves the order of insertion, so can convert to it array to manipulation
{

    const orderOne = new Set(['pizza','icecream'])
    const orderTwo = new Set(['icecream','pizza'])

    const orderOneArray = [...orderOne]
    const orderTwoArray = [...orderTwo]
    console.log(orderOneArray)
    console.log(orderTwoArray)

    const missedCalls = ['jane','jack','jane','jill']
    const uniqueMissedCalls = [... new Set(missedCalls)]
    console.log(uniqueMissedCalls)

}

// methods of Set -> 
/**
 * add
 * delete -> boolean
 * has -> boolean
 * size -> numeric
 * clear
 */
{

    const spices = new Set(['nutmeg','ginger'])
    console.log(spices.add('cumin'))

    console.log(spices.delete('ginger'))
    console.log(spices.delete('ginger'))

    console.log(spices.has('cumin'))
    console.log(spices.has('ginger'))

    console.log(spices)
    console.log(spices.size)

    console.log(spices.clear())
    console.log(spices.size)
    console.log(spices)

}

// performance between array and set
{

    const count = 10_000
    const input = [...Array(count)].map(() => Math.floor(Math.random()*(count/2)))

    console.time('array')
    /**
     * @type {number[]}
     */
    const array = []
    for(const item of input){
        if(array.indexOf(item) === -1){
            array.push(item)
        }
    }
    console.timeEnd('array')

    console.time('set')
    const set = [... new Set(input)]
    console.timeEnd('set')

    console.log({
        withArray : array.length,
        wihtSet : set.length
    })

}


// realworld use case
// find duplicate, find repeated items , has duplicate

{
    const input = ['a','b','a','c']

    // @ts-ignore
    const removeDuplicates = (array) => [... new Set(array)]
    console.log(removeDuplicates(input))

    // @ts-ignore
    const hasDuplicates = (array) => new Set(array).size !== array.length
    console.log(hasDuplicates(input))

    // @ts-ignore
    const findRepeatedItems = (array) => {
        const seen = new Set()
        const repeated = new Set()
        for(const item of array){
            if(!seen.has(item)){
                seen.add(item)
            }else{
                repeated.add(item)
            }
        }
        return [...repeated]
    }
    console.log(findRepeatedItems(input))

}
