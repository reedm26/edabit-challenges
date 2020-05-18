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

// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.
function nameShuffle(str) {
  const newArr = str.split(" ");
  var newOne = newArr.reverse();
  return newOne.join(" ");
}

// Create a function to remove all null values from an array.
function removeNull(arr) {
  return arr.filter(Boolean);
}

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
function largestSwap(num) {
  var newNum = num.toString();
  if (num >= newNum.charAt(1) + newNum.charAt(0)) return true;
  return false;
}

// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spelling(str) {
  let newArr = [];
  for (let i = 1; i <= str.length; i++) {
    newArr.push(str.slice(0, i));
  }
  return newArr;
}
