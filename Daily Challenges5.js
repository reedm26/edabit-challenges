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
