// @ts-nocheck
//intro
{
    const alpha = {name : "john"}
    console.log(typeof alpha)
    console.log(typeof alpha.name)
    console.log(typeof alpha.toString)
    console.log(typeof alpha.__proto__)
    console.log(typeof alpha.__proto__.toString)

    const beta = {
        age : 23,
        __proto__: alpha,
    }
    console.log(beta.age)
    console.log(beta.name)
    alpha.name = "jane"
    console.log(beta.name)
}
//proto-chain
{
    const person = {
        __proto__:{
            __proto__:{
                __proto__:{
                    name: 'jack',
                    age: 18,
                }
            }
        }
    }

    console.log(person.name)
    console.log(person.age)
    console.log(person.weight)
    console.log(person.__proto__.__proto__.__proto__)
    console.log(person.__proto__.__proto__.__proto__.__proto__.__proto__)
}
//__proto__ is different than prototype
{

    class Alpha{ log() {console.log('Bonjour')}}
    console.log(typeof Alpha)
    console.log(typeof Alpha.prototype)
    console.log(typeof Alpha.prototype.log)

    function Beta(){}
    console.log(typeof Beta)
    console.log(typeof Beta.prototype)
    Beta.prototype.log = function () {
        console.log("Bonjour")
    }


}

{
    let created;
    class NewEffects{
        constructor(message){
            this.message = message;
            created = this;
        }
        log() {
            console.log(this.message)
        }
    }

    const instance = new NewEffects('Bonjour');
    console.log(instance === created)
    console.log(Object.keys(instance))
    console.log(typeof instance.log)
    console.log(typeof NewEffects.prototype.log)
    console.log(instance.__proto__ === NewEffects.prototype)
    console.log(typeof instance.__proto__.log);
    instance.log();
}

{
    function Func() {}
    const func = new Func();
    console.log(func.__proto__ === Func.prototype)

    class Cls {}
    const cls = new Cls()
    console.log(cls.__proto__ === Cls.prototype)

    const str = 'abc'
    console.log(str.__proto__ === String.prototype)

    const num = 123.4
    console.log(num.__proto__ === Number.prototype)

    console.log(typeof Number.prototype.toPrecision)
    console.log(typeof num.__proto__.toPrecision)
    console.log(num.toPrecision(3))
}

//polyfill
{
    String.prototype.upperCaseTrim = function () {
        return this.toUpperCase().trim()
    }

    console.log(''.__proto__ === String.prototype)
    console.log(''.__proto__.upperCaseTrim === String.prototype.upperCaseTrim)
    console.log(' hello world    '.upperCaseTrim());
}

//How extends work
{
    class Animal {
        eat() { return 'yum yum'}
    }
    class Bird extends Animal {
        fly() { return 'flap flap'}
    }

    const bird = new Bird()
    //new keyword will pass the protype to __proto__
    console.log(bird.__proto__ === Bird.prototype)
    console.log(bird.__proto__.fly === Bird.prototype.fly)
    console.log(bird.fly())

    console.log(Bird.prototype.__proto__ === Animal.prototype)
    console.log(bird.__proto__.__proto__ === Animal.prototype)
    console.log(bird.__proto__.__proto__.eat === Animal.prototype.eat)
    console.log(Bird.prototype)

}

// way to create proto to an object
{
    let animal = {
        eat : function () { return 'yum yum';}
    };
    let bird = {
        __proto__ : animal,
        fly : function () {return 'flap flap'}
    }
    console.log(bird.fly())
    console.log(bird.eat())

    // recommmed way , this __proto__ will be inherited
    bird = Object.create(animal);
    bird.fly =  function () {return 'flap flap'}
    console.log(bird.fly())
    console.log(bird.eat())
}

// how to neglate __proto__ while object creation
{
    let dictionary = {}
    dictionary['john'] = true
    dictionary['jane'] = false
    console.log(dictionary.__proto__ === Object.prototype)
    console.log(typeof Object.prototype.toString)
    console.log('toString' in dictionary)
    if(dictionary['toString']) { console.log('toString went to the party')}

    dictionary = Object.create(null)
    console.log('__proto__' in dictionary)
    dictionary['john'] = true
    dictionary['jane'] = true
    console.log('john' in dictionary)
    console.log('jane' in dictionary)
    console.log('toString' in dictionary)


}