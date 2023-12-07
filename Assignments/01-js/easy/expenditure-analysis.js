/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length !== 0){
    const expenses = {};
      for (let i = 0; i < transactions.length; i++) {
        const category = transactions[i]["category"];
        const price = transactions[i]["price"];

        if (!expenses[category]) {
            // If the category is not in the expenses object, initialize it
            expenses[category] = price;
        }
        else {
            // If the category is already in the expenses object, accumulate the price
            expenses[category] += price;
        }
    }
    // Convert expenses object to an array of objects
    const output = Object.keys(expenses).map(category => ({ category, totalSpent: expenses[category] }));
    return output;
  }
  return[] 
}
module.exports = calculateTotalSpentByCategory;
