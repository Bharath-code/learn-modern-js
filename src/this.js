{
    /**
     * @param {any} value
     * @this {any}
     */
    function simple(value){
        console.log(`value is ${value}`,this)
    }

   const person = {name : "john"}
   simple.call(person,123)
   // @ts-ignore
   person.simple = simple
   // @ts-ignore
   person.simple(890)

}

{
    class Point{
        /**
         * @param {any} x
         * @param {any} y
         */
        constructor(x,y){
            this.x =x
            this.y = y
        }
        log(){
            console.log(this.x,this.y)
        }
    }
    const point = new Point(1,2)
    console.log(point)
    point.log()
}

{
    /**
     * @this {{ name: string; age: number; growOlder: () => void; }}
     */
    function growOlder(){
        this.age++
    }
    const john = {
        name: "john",
        age: 22,
        growOlder
    }
    const jane = {
        name: "jane",
        age : 18,
        growOlder
    }
    // left side of dot operator is passed as reference to this 
    // here john object is passed as reference as this to growOlder() where this 
    // this function is common to used used among john and john object and correct reference will be passed
    john.growOlder()
    console.log(john.age)
    jane.growOlder()
    console.log(jane.age)
}

//bind
{
    function logName(){
        // @ts-ignore
        console.log(this?.name)
    }
    logName()
    const jane = {name : "jane", logName}
    const john = {name : "john", logName}
    jane.logName()
    john.logName()
    //this wont' work in bind
    const logNameJane = logName.bind(jane)
    // this function is bind to jane object only
    logNameJane()
    logName()

    const jack = {name:"jack", logName:logNameJane}
    jack.logName()
}

{
    class Auth{
        isLoggedIn = false
        login = () =>  { this.isLoggedIn = true}
        logout = () =>  { this.isLoggedIn = false}

    }
    const auth  = new Auth
    auth.login()
    console.log(auth.isLoggedIn)
    auth.logout()
    console.log(auth.isLoggedIn)

    const login = auth.login
    login()
    console.log(auth.isLoggedIn)
    //without using arrow function we can't pass the auth.logout argument it will result in error
    // arrow function will know the context 
    setTimeout(auth.logout,1000)
    setTimeout(function() {console.log(auth.isLoggedIn)},2000)
    

}

{
    class Auth {
      isLoggedIn = false;
      login = () => {
        this.isLoggedIn = true;
      };
      logout = () => {
        this.isLoggedIn = false;
      };
      logoutSoon = () => {
        if(this.isLoggedIn){
          setTimeout(() => {
            console.log("loging out soon...");
            this.logout();
          }, 1000);
        }
        }
    }
    const auth = new Auth();
    auth.login()
    console.log(auth.isLoggedIn)
    auth.logoutSoon();
    setTimeout(function() {console.log(auth.isLoggedIn)},2000)
}

// chaining
{
    class Calculator{
        /**
         * @param {number} value
         */
        constructor(value){
            this.value = value;
        }
        /**
         * @param {number} n
         */
        add(n){
            this.value += n
            return this
        }
        /**
         * @param {number} n
         */
        subtract(n){
            this.value -= n
            return this
        }
    }
    console.log(new Calculator(1).add(3).subtract(2).value)
}