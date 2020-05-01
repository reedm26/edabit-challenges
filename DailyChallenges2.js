//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
function reverse(bool) {
  if (bool === true) {
    return false;
  } else if (bool === false) {
    return true;
  } else {
    return "boolean expected";
  }
}

// Write a regular expression that matches a string if it contains at least one digit.
let x = /\d/;

//Write a function that returns true if a hash contains the specified key, and false otherwise.
function hasKey(obj, key) {
  return key in obj;
}

//Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
function repeat(item, times) {
  let newArr = [];
  for (let i = 0; i <= times; i++) {
    i = newArr.push(item);
  }
  if (times == 0) {
    return [];
  } else {
    return newArr;
  }
}

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
  return x % y;
}

// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
// Example:
// inkLevels({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// }) ➞ 10
function inkLevels(inks) {
  // @ts-ignore
  const arr1 = Object.values(inks);
  return Math.min(...arr1);
}

//Write a function that calculates the factorial of a number recursively.
function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
