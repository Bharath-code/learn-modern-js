// accessing array
{
  const people = ["pete", "john"];
  console.log(people.length);
  console.log(people[0]);
  console.log(people[1]);
  console.log(people[5]);
  people[0] = "jim";
  console.log(people);

  const things = ["gold", { species: "cat" }, ["car", "house"]];

  console.log(things[0]);
  console.log(things[1]);
  // @ts-ignore
  console.log(things[1].species);
  // @ts-ignore
  console.log(things[2][0]);
  // @ts-ignore
  console.log(things[2][1]);
  // @ts-ignore
  things[2][1] = "home";
  // @ts-ignore
  console.log(things[2][1]);
}

// find where it's array or not
{
  //typeof of both array and object is object
  // so to find the type of array we need to use Array.isArray()
  const items = ["keys", "chains", "ropes"];
  console.log(typeof items);
  const person = { name: "sam" };
  console.log(typeof person);

  console.log(Array.isArray(items));
  console.log(Array.isArray(person));
}

// push, pop, shift , unshift
/**
 * push -> push item to the last index
 * pop -> removes last item of the array
 * shift -> removes the first item in the array
 * unshift -> adds the item in the first index of the array
 */
{
  const numbers = ["one", "two"];
  numbers.push("three");
  numbers.push("four");
  console.log(numbers);
  console.log(numbers.pop());
  console.log(numbers.pop());
  console.log(numbers);
  console.log(numbers.pop());
  console.log(numbers.pop());
  console.log(numbers.pop());
  console.log(numbers);
  console.log("-------------++++++----------");
  const items = ["economy", "deal"];
  items.unshift("business");
  items.unshift("vip");
  console.log(items);
  console.log(items.shift());
  console.log(items.shift());
  console.log(items.shift());
  console.log(items.shift());
  console.log(items.shift());
  console.log(items);
}

// destructuring array
{
    const mineral = ['gold', 'silver','copper']
    const [first, second] = mineral

    console.log(first)
    console.log(second)

    // leave a value
    const [alpha,,gamma] = mineral
    console.log(alpha,gamma)

    const [uno, ...rest] = mineral
    console.log(uno,...rest)
    
    let [un, deux, trios, quatre = 'silver'] = mineral
    console.log(quatre)

  
}
// spread operator
{
    let whiteMinerals = ['platinum','silver']
    let yellowMinerals = ['gold','copper']

    let moreMinerals = ['gold','copper', ...whiteMinerals]
    console.log(moreMinerals)
    moreMinerals = ['gold', ...whiteMinerals,'copper']
    console.log(moreMinerals)
    let mostMinerals = ['iron',...yellowMinerals,...whiteMinerals]
    console.log(mostMinerals)

    // it will mutate the original array
    whiteMinerals.push('iron')
    whiteMinerals.pop()
    console.log(whiteMinerals)
    // won't mutate the original array
    let withIron = ['iron' , ...whiteMinerals]
    console.log(withIron)
    console.log(whiteMinerals)

    //copy array
    const copy = [...whiteMinerals]
    copy.push("iron")
    console.log(copy)
    console.log(whiteMinerals)
}