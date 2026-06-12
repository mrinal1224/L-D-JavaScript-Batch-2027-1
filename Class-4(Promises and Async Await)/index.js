// Promises and Async/Await

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const isHeads = Math.random() >= 0.5;

    if (isHeads) {
      resolve("Heads Promise Successful");
    } else {
      reject("Tails Promise Failed");
    }
  }, 2000);
});

console.log(p1);

// then and catch

p1.then(function (result) {
  console.log(result);
});

p1.catch(function (failedMsg) {
  console.log(failedMsg);
});

// finally

p1.finally(function(){
    console.log('Promise Settled')
})
