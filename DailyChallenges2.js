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

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts year, month and day as integers and returns true if it's Christmas Eve (December 24th) and false otherwise.
// public class Program
// {
//     public static bool TimeForMilkAndCookies(int year, int month, int day)
//     {
// 			return (month == 12 && day == 24);
//     }
// }

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
