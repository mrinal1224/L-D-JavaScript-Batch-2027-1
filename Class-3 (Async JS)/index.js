// Asynchronous JS
const fs = require("fs");
console.log("Hello");

fs.readFile("f1.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file", err);
  }

  console.log("F1 data " + data);
});

fs.readFile("f2.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file", err);
  }

  console.log("F1 data " + data);
});

fs.readFile("f3.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file", err);
  }

  console.log("F1 data " + data);
});

console.log("Bye");
