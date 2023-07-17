{
  // order of call in error handling

  function tantarum() {
    throw new Error("nooooooooooo");
  }

  function comeHere() {
    tantarum();
  }

  try {
    comeHere();
  } catch (e) {
    // @ts-ignore
    console.log("~~~~~~handled~~~~~~", e.message);
  }
}

{
  // here when calling bigBoy function , in function itself we are handling the error
  // so the second catch won't execute
  function bigBoy() {
    try {
      throw new Error("noooooo");
    } catch (e) {
      console.log("it's okay");
    }
  }

  try {
    bigBoy();
  } catch (e) {
    console.log("~~this catch won't execure");
  }
}
// finally  -> this will execute irrespective what happen in try or catch block
{
  try {
    console.log("setup a db connection");
    console.log("run a query");
  } catch (error) {
    // @ts-ignore
    console.log(error.message);
  } finally {
    console.log("close the db connection");
  }

  /*  try {
             console.log("setup a db connection");
            throw new Error('failed to run a query')
           }  finally {
             console.log("close the db connection");
           }
        */
}

// how to error handle in async code
// it works in sync manner so use it the body of the async code not outside.
{
  setTimeout(() => {
    try {
      // @ts-ignore
      weExistInMatrix();
    } catch (e) {
      console.log("we have Neo");
    }
  }, 1000);
}

// what happens in server or in the browser when error occured
// server -> second timeout func won't execute because in server if first func din't execute and second execute,
// the this create data issue in database -> duplicate will be formed
// brower ->  if first throws error and second will execute , so for an HTTP request failure we don't want freeze the web
// so still we can see the page , use other functionalities not the failed one.
{
  setTimeout(() => {
    // @ts-ignore
    imaginationFunc();
    console.log("this func doesn't exists");
  }, 1000);
  setTimeout(() => {
    console.log("My world......");
  }, 1000);
}
