/**
 * Hashmap is similar to set data structure
 * Both have hash table and collision avoidance
 * Both have benefits of constant time in BigO
 */

//We should add a key value pair to the map
// we can also add iterable of array which should have key and value

{
    const nameToAge = new Map()
    console.log(nameToAge.set('john',25));
    console.log(nameToAge.set('jane',28));
    console.log(nameToAge.set('john',26));
    
    console.log(nameToAge.get('john'))
    console.log(nameToAge.get('jill'))

    const countryToCapital = new Map([
        ['france','paris'],
        ['italy','rome'],
        ['australia','canberra']
    ]);

    console.log(countryToCapital)

    console.log(nameToAge instanceof Map)
    console.log(countryToCapital instanceof Map)


}

// map itself iterable of entries , so no need to use entries()
{
    const prices = new Map([
        ['cucumber',50],
        ['tomatoes',35]
    ])

    //no need of entries
    for(const entry of prices.entries()){
        console.log(entry)
    }

    // same output as above code
    for(const entry of prices){
        console.log(entry)
    }

    console.log([...prices])
    console.log([...prices.keys()])
    console.log([...prices.values()])

    const pricesCopy = new Map(prices)
    console.log(pricesCopy)

}

// we can set any value as key symbol,string,numeric,object etc but in object some of them are overridden
// thus makes set a versatile DS to use
{
    //array - we have four values instead of 6
    const objAsMap = Object.create(null)
    console.log(objAsMap)
    objAsMap['hi'] = 'hi'
    objAsMap[Symbol('french')] = 'bonjour'
    objAsMap[123] = 'salam'
    objAsMap['123'] = 'hola'
    // @ts-ignore
    objAsMap[{name:'john'}] = 'konnichiwa'
    // @ts-ignore
    objAsMap[{name:'jane'}] = 'namaste'
    console.log(objAsMap)

    //map
    const map = new Map()
    map.set('hi','hi')
    map.set('123','hola')
    map.set(123,'salam')
    map.set(Symbol('french'),'bonjour')
    map.set({name:'john'},'konnichiwa')
    map.set({name:'jane'},'namaste')
    console.log(map)
}

// map perserves the order of insertion same as set
{
    const orders = [
        ['john','burger'],
        ['jane','chicken'],
        ['john','salad']
    ]

    const ordersGrouped = new Map()
    for(const [name,item] of orders){
        if(ordersGrouped.has(name)) { ordersGrouped.get(name).push(item)}
        else{
            ordersGrouped.set(name,[item])
        }
    }
    console.log([...ordersGrouped])
}

{
    const balance = new Map()
    balance
        .set('john',10)
        .set('jane',18)
    
        console.log(balance.get('john'))
        console.log(balance.get('jill'))

        console.log(balance.delete('john'))
        console.log(balance.delete('jill'))

        console.log(balance.has('jane'))
        console.log(balance.has('jill'))

        console.log(balance)
        console.log(balance.size)

        console.log(balance.clear())
        console.log(balance.size)
}

// map to object and vice verca
{
    const countryWithLargeEconomy = new Map([
        ['USA',1],
        ['China',2],
        ['Japan',3],
        ['Germany',4],
        ['India',5]
    ])

    // from array of arrays to object
    const obj = Object.fromEntries(countryWithLargeEconomy)
    console.log(obj)

    // remember map only takes iterable , so we are converting object to array of arrays using entries()
    const map  = new Map(Object.entries(obj))
    console.log(map)
}

// don't give object as key to map as it won't update if finds duplicate key,
// so add object to the second argument in set and string as a key in first argument
{
    const obj1 = { name : 'Alice'}
    const obj2 = { name : 'Alice'}

    console.log(obj1 === obj2)
    console.log(obj1 === obj1)
    console.log(obj2 === obj2)

    const ageMap = new Map();
    ageMap.set({name:'Alice'},20)
    ageMap.set({name:'Alice'},21)
    console.log(ageMap)

    ageMap.clear()

    // using to variable and storing a object and using it as a key, will work but won't scale
    const alice = {name : 'Alice'}
    ageMap.set(alice,20)
    ageMap.set(alice,21)
    console.log(ageMap)

    let personMap = new Map()
    personMap.set('Alice',{name:'Alice', age: 20})
    personMap.set('Alice',{name:'Alice', age: 21})

    console.log(personMap)
}