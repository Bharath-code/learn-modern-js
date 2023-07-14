// how to create a class and object
{
  class Car {
    /**
     * @param {string} name
     */
    constructor(name) {
      this.name = name;
    }
    drive() {
      console.log(`${this.name} driving`);
    }
  }

  const toyota = new Car("toyota");
  toyota.drive();

  const tata = new Car("Tata");
  tata.drive();
}

// accessing the public fields , which would be disastrous because any one can modify
{
  class Event {
    /**
     * @param {string} eventName
     */
    constructor(eventName) {
      this.eventName = eventName;
    }
    fire() {
      console.log(`${this.eventName}`);
    }
  }
  const evt = new Event("click");
  evt.fire();
  //oopss......
  evt.eventName = "open";
  evt.fire();
}
// prevent accessing the fields using private fields
{
  class Event {
    #eventName;
    /**
     * @param {string} eventName
     */
    constructor(eventName) {
      this.#eventName = eventName;
    }
    fire() {
      console.log(`${this.#eventName}`);
    }
  }
  const evt = new Event("click");
  evt.fire();
  // cant access evt.#eventName because it's a private field
}

//static field -> like global variable in class , it's attached to the class not the instances
{
  class Square {
    static howManySquares = 0;
    /**
     * @param {number} size
     */
    constructor(size) {
      // included here will increment the static to value 1 , whenever instances created
      Square.howManySquares++;
      this.size = size;
    }
    area() {
      return this.size * this.size;
    }
  }
  const unit = new Square(1);
  const quad = new Square(4);
  console.log(unit.area(), quad.area());
  console.log(Square.howManySquares);
}

// setter and getters
{
  class RangedValue {
    #current;
    // @ts-ignore
    constructor({ value, min, max }) {
      this.min = min;
      this.max = max;
      this.#current = value;
    }

    get value() {
      return this.#current;
    }
    set value(newValue) {
      this.#current = Math.max(this.min, Math.min(this.max, newValue));
    }
  }
  // eventhough value is function it won't work when you call , you need to access it will dot notation
  const ranged = new RangedValue({ value: 5, min: 0, max: 10 });
  console.log(ranged.value);

  ranged.value = 15;
  console.log(ranged.value);
}

// inheritance
{
  class Animal {
    /**
     * @param {string} name
     */
    constructor(name) {
      this.name = name;
    }
    eat() {
      console.log("yum yum");
    }
  }
  const simple = new Animal("Dimple");
  console.log(simple.name);
  simple.eat();

  class Bird extends Animal {
    /**
       * @param {string} name
       * @param {number} weight
       */
    constructor(name, weight) {
      super(name);
      this.weight = weight;
    }
    fly(){
        console.log(this.weight > 3 ? 'too fat to fly' : 'flying to the mountains')
    }
  }

  const poppy = new Bird('Poppy',2)
  console.log(poppy.name)
  console.log(poppy.weight)
  poppy.eat()
  poppy.fly()

}

// find the instances of the class
{
    class Alpha {}
    class Beta {}

    const alpha = new Alpha()
    const beta = new Beta()

    console.log(typeof alpha)
    console.log(typeof beta)

    console.log(alpha instanceof Alpha)
    console.log(beta instanceof Alpha)
    console.log(beta instanceof Beta)
    console.log(alpha instanceof Beta)
}
