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
  const mineral = ["gold", "silver", "copper"];
  const [first, second] = mineral;

  console.log(first);
  console.log(second);

  // leave a value
  const [alpha, , gamma] = mineral;
  console.log(alpha, gamma);

  const [uno, ...rest] = mineral;
  console.log(uno, ...rest);

  let [un, deux, trios, quatre = "silver"] = mineral;
  console.log(quatre);
}
// spread operator
{
  let whiteMinerals = ["platinum", "silver"];
  let yellowMinerals = ["gold", "copper"];

  let moreMinerals = ["gold", "copper", ...whiteMinerals];
  console.log(moreMinerals);
  moreMinerals = ["gold", ...whiteMinerals, "copper"];
  console.log(moreMinerals);
  let mostMinerals = ["iron", ...yellowMinerals, ...whiteMinerals];
  console.log(mostMinerals);

  // it will mutate the original array
  whiteMinerals.push("iron");
  whiteMinerals.pop();
  console.log(whiteMinerals);
  // won't mutate the original array
  let withIron = ["iron", ...whiteMinerals];
  console.log(withIron);
  console.log(whiteMinerals);

  //copy array
  const copy = [...whiteMinerals];
  copy.push("iron");
  console.log(copy);
  console.log(whiteMinerals);
}

//for-each
{
  let products = [
    { name: "Apple", price: 150 },
    { name: "orange", price: 120 },
    { name: "Pineapple", price: 100 },
    { name: "Gooseberry", price: 70 },
  ];

  products.forEach((product) => {
    console.log(product.price);
  });

  products.forEach((product, index) => {
    console.log(index + ":" + product.name);
  });
}

//map -> return new array for each call back
{
  let people = [
    { firstName: "John", lastName: "Smith" },
    { firstName: "Mike", lastName: "Markkula" },
    { firstName: "William", lastName: "Stryker" },
  ];

  const peopleWithFullName = people.map((person) => {
    return {
      ...person,
      fullName: `${person.firstName} ${person.lastName}`,
    };
  });

  peopleWithFullName.forEach((people) => {
    console.log(people.fullName, people);
  });
}

//filters
{
  const numbers = [110, 78, 45, 89, 31];

  //even and odd number
  const evenNum = numbers.filter((num) => num % 2 === 0);
  const oddNum = numbers.filter((num) => num % 2 !== 0);
  console.log(evenNum, oddNum);
}

//find method
{
  const people = [
    { name: "wally", born: 1987 },
    { name: "sally", born: 1997 },
    { name: "wilma", born: 1977 },
  ];

  const wally = people.find((item) => item.name === "wally");
  console.log(wally);
  const milly = people.find((item) => item.name === "milly");
  console.log(milly); //undefined if conditions are not met
}

//findIndex
{
  const maybeNumbers = [11, 67, undefined, 90];
  const usingFindUndef = maybeNumbers.find((num) => num === undefined);
  const usingFindInvalid = maybeNumbers.find((num) => num === 4);
  console.log(usingFindInvalid, usingFindUndef);
  //here both result are undefined even if we want to find undefined
  // so findIndex will be helpfull in this scenorio

  const undefinedIndex = maybeNumbers.findIndex((num) => num === undefined);
  console.log(undefinedIndex);
  console.log(maybeNumbers.findIndex((num) => num === 4));

  // usecase want to find before undefined value
  console.log(maybeNumbers[undefinedIndex - 1]);
}

//slice
{
  const animals = ["ant", "bison", "camel", "hen", "cow"];

  //it's index based , from index 2 to the end
  console.log(animals.slice(2));

  //it's index based from index 2 to exculding 4
  console.log(animals.slice(2, 4));
  console.log(animals.slice(0, 2));
  //evertthing - > it will give copy of the array not the reference
  console.log(animals.slice());

  const portion = animals.slice(0, 1);
  console.log(portion);
  portion.push("rabbit");
  console.log(portion, animals);
}

//every and some
{
  const product = [
    { name: "wheat", price: 200 },
    { name: "sugar", price: 80 },
    { name: "saffron", price: 2000 },
    { name: "elachi", price: 800 },
  ];

  const isExpensive = (/** @type {{ price: number; }} */ product) =>
    product.price > 1000;

  const isSomeProductExpensive = product.some(isExpensive);
  console.log(isSomeProductExpensive);
  const isEveryProductExpensive = product.every(isExpensive);
  console.log(isEveryProductExpensive);
}

// reduce
{
  const numbers = [1, 2, 3, 4, 5];
  let result = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  console.log(result);
  result = numbers.reduce((sum, current) => sum + current, 0);
  console.log(result);

  const { evenCount, oddCount } = numbers.reduce(
    (counts, current) => {
      if (current % 2 === 0) {
        return { ...counts, evenCount: counts.evenCount + 1 };
      } else {
        return { ...counts, oddCount: counts.oddCount + 1 };
      }
    },
    { evenCount: 0, oddCount: 0 }
  );

  console.log(evenCount, oddCount)

}

//reverse
{
  // reverse will mutate the original array, so better make a copy and use it
  const simple = ['alpha','beta','gamma']
  const simpleReverse = simple.reverse()
  console.log(simpleReverse)
  console.log(simple)
  
  const better = ["alpha", "beta", "gamma"];
  const reverseCopy = [...better].reverse()
  console.log(reverseCopy)
  console.log(better)
}

//sort
{
  // sort works well with strings , but if it's given with number even with string numbers , then we need callback function
  let arr = ['hello', 'friends']
  arr.sort()
  console.log(arr)

  let numArr = [1,3,22]
  numArr.sort()
  console.log(numArr)
  // @ts-ignore
  numArr = ['1','3','22']
  numArr.sort()
  console.log(numArr) // here even it's string 2 will be first and it sorted and 22 will be there in the place of 3

  numArr = [1,22,3]
  // ascending order
  numArr.sort((a,b) => a-b);
  console.log(numArr)
  // descending order
  numArr.sort((b,a) => a-b)
  console.log(numArr)

}

// Array constructor -> fill method
{
  // array build in function can't handle the empty string in the array , so we need to convert it
  let items = Array(5)
  console.log(items.length)
  console.log(items)

  items.forEach(x => console.log(x)) //nothing
  let oneToFive = items.map((_,index) => index + 1)
  console.log(oneToFive)

  items = [...Array(5)]
  console.log(items.length)
  console.log(items)

  items.forEach(x => console.log(x))
  oneToFive = items.map((_,index) => index + 1)
  console.log(oneToFive)

  // how to create undefined value
   items = [...Array(5)];
   console.log(items);

   // fill with particular value
   items = [...Array(5)].map(_ => 0)
   console.log(items)

   items = Array(5).fill(0)
   console.log(items)

}

//equality
{
  //eventhough itemA and itemB are of same value but both are not same it has different references
  const itemA = ['car','remote','tv']
  const itemB = ['car','remote','tv']
  console.log(itemA === itemB)
  console.log(itemA === itemA)
  console.log(itemB === itemB)

  // here itemC is referencing the itemA so both are same, if we change itemC then itemA will also change
  const itemC = itemA
  console.log(itemC === itemA)

  itemC.push('camera')
  console.log(itemA)
  console.log(itemB)

  const itemD = ["car", "remote", "tv"];
  function isArrEqual(a,b){
    // @ts-ignore
    return a.length === b.length && a.every((_,i) => a[i] === b[i])
  }
  console.log(isArrEqual(itemA,itemB))
  console.log(isArrEqual(itemB,itemD))
}