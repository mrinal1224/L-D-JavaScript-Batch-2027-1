// Globally
//Function
// method of an Object
// nested methoda of an object

// Globally

// console.log(this)

// function

function test() {
  console.log(this); // window
  this.count = 2; // pollute
}

function update() {
  this.count = 1;
}

test();

// let obj = {
//   name: "adam",
//   age: 20,
//   printName: function () {
//     console.log(this);
//   },
// };

// obj.printName();

let obj2 = {
  name: "mark",
  age: 25,
  printName: function () {
    return function printName() {
      console.log(this);
    }
  },
};

let val = obj2.printName()
val()
