// diff b/w traditional for and for of loops

{
    const people = [
        {name : 'john'},
        {name : 'jane'},
        {name : 'mike'},
    ]

    for(let i=0; i < people.length; i++){
        let person = people[i]
        console.log(person.name)
    }

    //no need to do the index
    for(const person of people){
        console.log(person.name)
    }
}

//break statement , how can be used inside to two for loops and break from each for loop to exit , if match found
{
    const places=['paris','tokoyo','vegas','london']
    const favs=['angeles','newyork','vegas','madrid']
    let match;
    for(const place of places){
        for(const fav of favs){
            if(fav === place){
                match = place
                break
            }
            console.log([fav,place])
        }
        if(match) break
    }
    console.log(match)
}

// continue - it will skip the given condition 
{
    for(let i=0; i < 15 ; i++){
        if(i%3 === 0) continue
        if(i%5 === 0) continue
    console.log(i)
    }
}

// for in loop is for object, but with Object.entries() we can use it in for of loop
{
    const point = {
        x: 10,
        y:20
    }

    // we need to get the key and with that key we have to get the value associated with it
    for(const key in point){
        // @ts-ignore
        const value = point[key]
        console.log(value)
    }
    console.log(Object.entries(point))

    for(const [key,value] of Object.entries(point)){
        console.log(`${key} ${value}`)
    }


}

// if we use complex and multiple inputs then use for loop
//otherwise use arr built in methods like forEach
{
    const car= ['volvo','benz','cruiser','audi']
    for(const val of car){
        console.log(val)
    }
    car.forEach(val => console.log(val))
    let hasAudi;
    for(const val of car){
        if(val === 'audi'){
            hasAudi = true
            break
        }
    }
    console.log(hasAudi)
    hasAudi = car.findIndex(val => val === 'audi') !== 1
    console.log(hasAudi)
}

// how to use break and continue in arr methods , to achieve same result of for  loops
{
    const nums = [3,2,6,5,0]
    for(const num of nums){
        if(num ===2) continue;
        if(num === 5) break
        console.log(num)
    }

    // find method let's you find the value you wanted when condition becomes true
    // it returns a single value not an array
    // return will skip the value and return true will break from the method
    const newArr = nums.find(val => {
        if(val === 2) return;
        if(val === 5) return true
        console.log(val)
    })
    console.log(newArr)
}