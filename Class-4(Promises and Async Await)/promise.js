const fs = require("fs");

let fileReadP1 = fs.promises.readFile("f1.txt");

let fileReadP2 = fs.promises.readFile("f2.txt");

let fileReadP3 = fs.promises.readFile("f3.txt");

console.log("hello");

fileReadP1
  .then(function (data) {
    console.log("Data from F1 " + data);
    
  })
  .catch(function (err) {
    console.log(err);
  });

fileReadP2
  .then(function (data) {
    console.log("Data from F2 " + data);
  })
  .catch(function (err) {
    console.log(err);
  });

fileReadP3
  .then(function (data) {
    console.log("Data from F3 " + data);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("Doing Other Task");
