let student = {
name: "Farhana",
age: 29,
country: "Bangladesh"
};
console.log(Object.keys(student));

let laptop = {
brand: "Asus",
ram: "16GB",
price: 85000
};
console.log(Object.entries(laptop));

let phone = {
brand: "OnePlus",
color: "Black",
price: 30000
};

console.log(Object.keys(phone)); // brand , color, price
console.log(Object.values(phone)); // OnePlus, Black, 30000
console.log(Object.entries(phone)); // ["brand": "OnePlus"],
["color": "Black"],
["price": 30000]
