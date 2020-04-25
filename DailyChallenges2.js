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
