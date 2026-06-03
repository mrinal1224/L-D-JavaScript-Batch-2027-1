let nums = [1, 2, 5, 7, 9, 10, 6];




Array.prototype.myFilter = function (callback, thisArg) {
  // Edge cases
  if (typeof callback != "function") {
    throw new TypeError("callback is not a function");
  }

  let resultArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultArray.push(this[i]);
    }
  }

  return resultArray;
};

let evens = nums.myFilter(function (n) {
  return n % 2 == 0;
});


console.log(evens);
