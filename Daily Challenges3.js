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
