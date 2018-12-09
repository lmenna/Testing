/* timers.js
 * desc: async, await and Promise examples using timers to simulate long running processes.
 *
 */

 function myFunc(arg) {
   console.log(`arg was => ${arg}`);
 }


async function timeoutResolveSuccess(delay, retVal) {

  return(new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(retVal);
    }, delay)
  }));
}

async function timeoutRejectError(delay, retError) {

  return(new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      reject(retError);
    }, delay)
  }));
}

async function getSlowValue(val) {
  return(timeoutResolveSuccess(1000*Math.random() + 500, val));
}

async function slowAddition() {

  return(new Promise(async (resolve, reject) => {
    var firstValue = await getSlowValue(2);
    console.log("firstValue:", firstValue)
    var secondValue = await getSlowValue(3);
    console.log("secondValue:", secondValue)
    resolve(firstValue + secondValue);
  }));
}


export { timeoutResolveSuccess, timeoutRejectError, slowAddition };
