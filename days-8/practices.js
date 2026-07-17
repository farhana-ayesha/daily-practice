2. "5" == 5 vs "5" === 5
Guess: == true হবে (শুধু value check করে), === false হবে (type ও check করে)।

console.log("5" == 5);   // true
console.log("5" === 5);  // false
-------------------------------------------

3. isRaining check

let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella");
}

--------------------------------------------
4. stock check (only if, no else)

let stock = 0;

if (stock === 0) {
  console.log("Out of stock");
}
----------------------------------------
5. Positive or Negative (if...else)

let num = -7;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
