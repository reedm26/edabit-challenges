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
