const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

let expenses = {};
for (let i = 0; i < transactions.length; i++) {
    const category = transactions[i]["category"];
    const price = transactions[i]["price"];

    if (!expenses[category]) {
        // If the category is not in the Price object, initialize it
        expenses[category] = price;
    }
    else {
        // If the category is already in the Price object, accumulate the price
        expenses[category] += price;
    }
}
const resultArray = Object.keys(expenses).map(category => ({ category, total_price: expenses[category] }));
console.log(resultArray);
