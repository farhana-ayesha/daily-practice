let price1 = 100;
let price2 = "100";

console.log(price1 == price2);   // true  (value same, type ignore kore)
console.log(price1 === price2);  // false (type different: number vs string)
console.log(price1 != price2);   // false
console.log(price1 !== price2);  // true
console.log(price1 > price2);    // false
console.log(price1 < price2);    // false
console.log(price1 >= price2);   // true
console.log(price1 <= price2);   // true
