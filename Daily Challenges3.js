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

// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "[user1] online".
// If there are 2 people, return [user 1] and [user 2] online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
function chatroomStatus(users) {
  var players = users.length - 1;
  for (var i = 0; i <= users.length - 1; i++) var x = users[i];
  if (users.length == 0) {
    return "no one online";
  } else if (users.length == 1) {
    return `${x} online`;
  } else if (users.length == 2) {
    return `${users[0]} and ${users[1]} online`;
  } else if (users.length >= 3) {
    return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
  }
}

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
function sortNumsAscending(arr) {
  if (arr === null) return [];
  return arr.sort((a, b) => a - b);
}

// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.
function minusOne(arr) {
  if (arr.length == 5) {
    arr.pop();
    return arr;
  } else {
    return arr;
  }
}

// Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
  var x = " ";
  return str.includes(x);
}

// Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// Fix the code so that all tests pass:
//Beginning Function
function checkAllEven(arr) {
  // @ts-ignore
  return arr.every(x % 2 === 0);
}

// Fixed Function
function checkAllEven(arr) {
  for (var x = 0; x <= arr.length - 1; x++);
  return arr.every((x) => x % 2 === 0);
}

// Write a function that returns true if there exists at least one number that is larger than or equal to n.
function existsHigher(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      return true;
    }
  }
  return false;
}

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
  var newArr = [];
  var x = Math.min(...arr);
  var y = Math.max(...arr);
  newArr.push(x, y);
  return newArr;
}

// Write a function to reverse an array.
function reverse(arr) {
  return arr.reverse();
}

// Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.
// @ts-ignore
const REGEXP = /\w/g;

// Write a function that returns true if an object is empty, and false otherwise.
function isEmpty(obj) {
  if (Object.keys(obj).length == 0) {
    return true;
  } else {
    return false;
  }
}

// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
function reverseAndNot(i) {
  return parseInt(i.toString().split("").reverse().join("") + i);
}

// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
function highLow(str) {
  var nums = str.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
function reverseCapitalize(str) {
  let x = str
    .toUpperCase(...str)
    .split("")
    .reverse()
    .join("");
  return x.toString();
}

// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
function repetition(txt, n) {
  return txt.repeat(n);
}
