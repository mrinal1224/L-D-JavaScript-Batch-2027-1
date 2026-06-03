// Map
// Map works with or on an Array
// Prototype of an Array
// internally it is running a loop
// Data is returned in a New Array

// let sqr = arr.map(function (n) {
//   return n * n;
// });

// console.log(sqr)

Array.prototype.myMap = function (callback , thisArg) {
  // Edge cases
  if (typeof callback != "function") {
    throw new TypeError("callback is not a function");
  }

  let resultArray = [];

  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i] , thisArg));
  }

  return resultArray;
};

let arr = [1, 2, 3, 4];

let sqaures = arr.myMap(function (n) {
  return 2 * n;
});

console.log(sqaures)



const obj = {
    multiplier: 2,
    multiply(arr) {
      return arr.map(function(num) {
        return num * this.multiplier; // ❌ this is undefined
      } , this);
    }
  };
  
  console.log(obj.multiply([1, 2, 3]));
