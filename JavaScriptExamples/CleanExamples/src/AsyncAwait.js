
/* myPromiseStillBlocking
 * desc: This function shows a valid usage of using a promise to run a task and return
 *       the result later by resolving the promise. result = await myPromiseStillBlocking works fine.
 *       But there is a problem.  If myPromiseStillBlocking is called multiple time and a await Promise.all
 *       is each call will still run sequentially.
 */ 
var myPromiseStillBlocking = (msg) => (
  new Promise((resolve, reject) => {
    //do something, fetch something....
    //you guessed it, mongo queries go here.
    console.log(`Begin long query... ${msg}`);
    variableBlockingCode(10000000)
    //I can continue to process my result inside my promise
    .then(function(result){
      console.log("In .then")
      resolve(result);
      return result;
    })
  })
);

/* myPromiseInParallel
 * desc: Same as the blocking version above, but this version can be run in parallel using await Promise.all
 */ 
var myPromiseInParallel = (msg) => (
   Promise.resolve().then(msg => {
    //do something, fetch something....
    //you guessed it, mongo queries go here.
    console.log(`Begin long query... ${msg}`);
    variableBlockingCode(10000000)
    //I can continue to process my result inside my promise
    .then(function(result){
      console.log("In .then")
       return result;
    })
  })
);

var myPromiseError = (msg) => (
  new Promise((resolve, reject) => {
    //do something, fetch something....
    //you guessed it, mongo queries go here.
    console.log(`Begin long query... ${msg}`);
    variableBlockingCode(1000000)
    //I can continue to process my result inside my promise
    .then(function(result){
      console.log("In .then")
      reject("Something Bad!");
      return result;
    })
  })
);

const codeBlocker = (msg) => {
  return new Promise(async (resolve, reject) => {
    await variableBlockingCode(5000000);
    resolve(msg);
  });
}

const codeNonBlocker = (msg) => {
  return Promise.resolve().then(async (v) => {
    await variableBlockingCode(5000000);
    return(msg);
  });
}


var variableBlockingCode = (maxCount) => (
  new Promise((resolve, reject) => {
    let x = 0;
    while(x < maxCount) {
      x += Math.random();
    }
    resolve(maxCount);
  })
);

export { codeBlocker, codeNonBlocker, myPromiseStillBlocking, myPromiseInParallel, myPromiseError }