// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.
function profit(info) {
  var x = (info.sellPrice -= info.costPrice) * info.inventory;
  return Math.round(x);
}
