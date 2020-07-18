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
