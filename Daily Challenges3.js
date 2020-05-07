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
