// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.
function profit(info) {
  var x = (info.sellPrice -= info.costPrice) * info.inventory;
  return Math.round(x);
}

// Create a function that takes a number of a guitar string and the number of the fret and returns the corresponding frequency of the note.
const gStr = [329.63, 246.94, 196, 146.83, 110, 82.41];
let fretFreq = (...fr) =>
  // Create a function that replaces all the vowels in a string with a specified character.

  function replaceVowels(str, ch) {
    let regEx = /[aeiou]/g;
    return str.replace(regEx, ch);
  };

// In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.
function kmtomiles(kilometers) {
  return parseFloat((kilometers * 0.621371).toFixed(5));
}

// Create a function that applies a discount d to every number in the array.
function getDiscounts(nums, d) {
  var discount = parseFloat(d) / 100;
  return nums.map((x) => x * discount);
}

// Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
function yeah_nope(bool) {
  return bool ? "yeah" : "nope";
}

// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
function cardHide(card) {
  let lastFour = card.slice(-4);
  return lastFour.padStart(card.length, "*");
}

// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.
function sortDescending(num) {
  return parseInt(num.toString().split("").sort().reverse().join(""));
}

// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
function societyName(friends) {
  return friends
    .map((m) => m[0])
    .sort()
    .join("");
}

// Create a function takes in two arrays and returns an intersection array and a union array.
// Intersection Array: Elements shared by both.
// Union Array: Elements that exist in first or second array, or both (not exclusive OR).
function intersectionUnion(arr1, arr2) {
  var r = [[], []];
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) != -1 && r[0].indexOf(arr1[i]) == -1) {
      r[0].push(arr1[i]);
    }
    if (r[1].indexOf(arr1[i]) == -1) r[1].push(arr1[i]);
  }
  for (var i in arr2) {
    if (r[1].indexOf(arr2[i]) == -1) r[1].push(arr2[i]);
  }
  r[0] = r[0].sort(function (a, b) {
    return a - b;
  });
  r[1] = r[1].sort(function (a, b) {
    return a - b;
  });
  return r;
}
