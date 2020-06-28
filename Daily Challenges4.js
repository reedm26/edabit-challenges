// Create a function that takes an array and returns the difference between the biggest and smallest numbers.
function diffMaxMin(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

// Write a function that checks if two numbers are: Smaller than 0, Greater than 0, Exactly 0
function both(n1, n2) {
  if (Math.sign(n1) === Math.sign(n2)) {
    return true;
  } else {
    return false;
  }
}

// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.
function getFillings(sandwich) {
  sandwich.shift();
  sandwich.pop();
  return sandwich;
}

// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.
function additiveInverse(arr) {
  return arr.map((x) => -x);
}

// Create a function that takes ball speed bs and club speed cs as arguments and returns the smash factor to the nearest hundredth.
function smashFactor(bs, cs) {
  var x = bs / cs;
  var y = x.toFixed(2);
  return Number(y);
}

// Let's say we wanted to change the amount of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.
function googlify(n) {
  return n > 1 ? "G" + "o".repeat(n) + "gle" : "invalid";
}

// Create a function that takes a string and returns a string with its letters in alphabetical order.
function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.
function formatDate(date) {
  return date.split("/").reverse().join("");
}

// Given a word, create a function that checks whether it is a palindrome.
function checkPalindrome(str) {
  return [...str].reverse().join("") == str;
}

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
function helloWorld(num) {
  if (num % 5 == 0 && num % 3 == 0) {
    return "Hello World";
  } else if (num % 5 == 0) {
    return "World";
  } else if (num % 3 == 0) {
    return "Hello";
  } else {
    return;
  }
}
// OR
function helloWorld(num) {
  return num % 15 === 0 ? "Hello World" : num % 3 === 0 ? "Hello" : "World";
}

// Write a function that returns true if two rooks can attack each other, and false otherwise.
function canCapture([yourRook, opponentsRook]) {
  let myRook = yourRook;
  let hisRook = opponentsRook;
  if (myRook.charAt(0) === hisRook.charAt(0)) {
    return true;
  } else if (myRook.charAt(1) === hisRook.charAt(1)) {
    return true;
  } else {
    return false;
  }
}

// Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.
function scoreCalculator(easy, med, hard) {
  if (easy >= 0 && med >= 0 && hard >= 0) {
    return easy * 5 + med * 10 + hard * 20;
  } else {
    return "invalid";
  }
}

// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".
const helloName = (name) => "Hello " + name + "!";

// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]));
  }
  return newArr;
}

// Create a function that removes the first and last characters from a string.
function removeFirstLast(str) {
  var x = str.length - 1;
  if (str.length <= 2) {
    return str;
  } else {
    return str.substring(1, x);
  }
}

// Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.
const emptySq = (step) => Math.pow(step * 2, 2) - step * 4;
