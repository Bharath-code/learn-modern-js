const channing = {
  name: "magic mike",
  gender: "male",
};

console.log(channing);

channing.name = "tatum";
console.log(channing);
// @ts-ignore
channing.skill = "dance";
console.log(channing);

// @ts-ignore
channing.born = 1980;
console.log(channing);

// @ts-ignore
channing.planet = { name: "earth" };
// @ts-ignore
console.log(channing.planet.name);
console.log(channing);
//console.log(channing.citizenship) //undefined

// objects are mutable
let neoVar = { name: "vard" };
neoVar.name = "Nard";
console.log(neoVar);
neoVar = { name: "mad" }; // can reassign and mutable because it's let
console.log(neoVar);
// channing = {name : "willhem"} -> cannot reassign but mutable because it's const

//Acessing values in objects
/***
 * key can be with numeric , string , expression or [with , without] quotes but all will be converted to string under the hood
 * while accessing with bracket notation we use string to access the value
 */
const diet = "pizza";
const alien = {
  name: "martian",
  age: 100,
  "current-status": "alive",
  ["home" + "planet"]: "mars",
  ["favorite" + diet]: "pizza",
};
console.log(alien);
console.log(alien["name"]);
alien["name"] = "martin";
console.log(alien);
console.log(alien["current-status"]);
console.log(alien["favorite" + diet]);

// key as numeric
/**
 * In this case, since the key is a number, you can use digits[1] to access the value 'one' without any issues.

However, when you try to access digits[dos], an error occurs. 
The reason is that dos is not a string literal or a variable declared in the code. 
JavaScript treats it as a variable, attempting to access its value and use it as a key to retrieve a value from the digits object. 
Since there is no variable named dos defined in the code snippet, an error is thrown.
 */

const digits = {
  1: "one",
  dos: "two",
  3: "three",
};

console.log(digits[1]);
console.log(digits["1"]);
console.log(digits["dos"]);
console.log(digits.dos);

// call by reference
/**
 * Call by Value:
    When a "primitive data type (such as a number, string, boolean)" is passed to a function, it is passed by value.
    A copy of the value is created and passed to the function, 
    so any changes made to the parameter inside the function do not affect the original value.
 * Call by Reference:
    When an "object or an array" is passed to a function, it is passed by reference.
    The memory address of the object or array is passed, 
    so any changes made to the object or array inside the function will affect the original value.

 */
{
  const personA = { name: "john doe" };
  const personB = { name: "john doe" };
  // both are distinct object that have different memory spaces even though the values are the same
  console.log(personA === personB);

  console.log(personA === personA);
  console.log(personB === personB);

  const personC = personA;
  console.log(personC.name);
  // here both names of personA and personC are referenced to the same memory if name of C changes then name of A also changes
  personC.name = "jane doe";
  console.log(personC.name);
  console.log(personA.name);
}

//spread operator
{
  const point2d = {
    x: 0,
    y: 0,
  };

  let point3d;
  point3d = {
    x: point2d.x,
    y: point2d.y,
    z: 1,
  };
  console.log(point3d);
  //or using spread
  point3d = {
    ...point2d,
    z: 2,
  };
  console.log(point3d);

  let taskPending = {
    title: "record tutorial",
    when: "today",
    isCompleted: false,
  };

  let taskCompleted;

  taskCompleted = {
    ...taskPending,
    isCompleted: true,
  };
  console.log(taskCompleted);

  // after spreading we should add out key to replace the old value otherwise changes won't reflect -> typescript throws error
  /*  taskCompleted = {
    isCompleted :  true,
    ...taskPending
 } */
}

// destructing
{
  let point = { x: 0, y: 0, z: 0 };

  {
    const x = point.x,
      y = point.y;
    console.log(x, y);
  }
  {
    const { x, y } = point;
    console.log(x, y);
  }
  // naming different for default variable names
  {
    const { x: pointA, y: pointB, z: pointC } = point;
    console.log(pointA, pointB, pointC);
  }
  // rest operator -> destructuring obj and spread -> structuring and obj (forming a structing or building it)
  {
    const { x, ...rest } = point;
    console.log(x, rest);
  }

  let center = {
    name: "origin",
    location: { x: 0, y: 0, z: 0 },
  };
  {
    const { location: loc } = center;
    console.log(loc);
  }
  {
    const {
      location: { x: x_axis, y: y_axis, z: z_axis },
    } = center;
    console.log(x_axis, y_axis, z_axis);
  }
}

//typeof objects
{
  let point = { x: 0, y: 0 };
  let person = { name: "jane" };
  console.log(typeof point);
  console.log(typeof person);
  // @ts-ignore
  point = { ...point, type: "point" };
 // @ts-ignore
 person = { ...person, type:"person"}

 // @ts-ignore
 console.log(point.type)
 // @ts-ignore
 console.log(person.type)

}

// delete property in objects
{
    let bird = {
        type : 'chicked'
    }
    // @ts-ignore
    bird.name = "liftoo"
    console.log(bird)

    // @ts-ignore
    bird.name = undefined;
    console.log(bird)

    console.log('name' in bird)
    // @ts-ignore
    delete bird.name
    console.log(bird)
    console.log('name' in bird)
    if('type' in bird){
        console.log(bird.type)
    }
}