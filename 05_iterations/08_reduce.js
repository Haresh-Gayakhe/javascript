const number = [1, 2, 3];
const total = number.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const finalPrice = shoppingCart.reduce((acc, item) => {
    return acc + item.price
},0)
console.log(finalPrice)