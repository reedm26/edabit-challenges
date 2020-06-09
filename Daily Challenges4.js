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
