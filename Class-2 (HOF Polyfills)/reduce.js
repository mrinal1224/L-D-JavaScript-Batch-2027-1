// Reduce
let arr = [1, 2, 3, 4, 5, 6];

// function sumArr(arr){
//   let sum = 0 // accumulator

//   for(let i=0; i<arr.length; i++){
//      sum = sum+arr[i]
//   }

//   return sum
// }

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback != "function") {
    throw new TypeError("callback is not a function");
  }

  let accumulator;
  let firstIndex;

  if (arguments.length == 1) {
    accumulator = this[0];
    firstIndex = 1;
  } else {
    accumulator = initialValue;
    firstIndex = 0;
  }

  for (let i = firstIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

let sum = arr.myReduce(function (acc, currVal) {
  acc = acc * currVal;

  return acc;
});

console.log(sum);
