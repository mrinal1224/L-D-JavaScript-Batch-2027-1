// Async/Await

// Syntatcti Sugar for Promises
// Async functions will always return a Promise

const p1 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Promise Resolved");
    }, 40000);
  });

const p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Promise Resolved");
  }, 50000);
});




async function test1() {
  console.log('Scaler') // 
  let result = await p1;
  console.log('2027 Batch is Awesome!')
  console.log(result);
}

async function test2(){
    console.log('Test Data')
    let result2 = await p2
    console.log('Other Data')
    console.log(result2)
}

test1();
test2()


// 
// Scaler
// Test Data
// 2027 Batch is Awesome!'
// p1 resolved
//Other Data
//result2