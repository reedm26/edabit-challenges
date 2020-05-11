// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
function isSymmetrical(num) {
  var n = num + "";
  let newNum = n.split("").reverse().join("");
  if (n != newNum) {
    return false;
  } else {
    return true;
  }
}

// Use ES6 object destructuring to assign variables one and two to obj.one and obj.two respectively.
let str = `( {one, two} = { one : 1, two : 2}).toString()`;

// Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("got it");
  }, 1000);
});

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.
const REGEXP = /\b\d\d:\d\d\b/;

// Create a function to multiply all of the values in an array by the amount of values in the given array
function multiplyByLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr.length;
  }
  return arr;
}
