let prices = {
    "banana": 4,
    "apple": 2,
    "orange":1.5,
    "pear":3
}
let stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}
let key = Object.keys(prices);
let totalPrice = 0;
key.forEach((product,index)=>{
    console.log(`-${product}\n-Price: ${prices[product]}\n-Stock: ${stock[product]}\n-Total Cost: ${prices[product]*stock[product]}`)
    totalPrice += prices[product]*stock[product];
})
console.log(`Total: ${totalPrice}`);