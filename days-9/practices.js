12. Adult or Minor (ternary)
let age = 16;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
---------------------------

13. Expensive or Affordable (ternary)

let price = 1500;

let result = (price > 1000) ? "Expensive" : "Affordable";
console.log(result);
-----------------------------

14. hasPermission with ! operator

let hasPermission = false;

if (!hasPermission) {
  console.log("Access Denied");
}
--------------------------------

15. isOnline with NOT operator
let isOnline = false;

if (!isOnline) {
  console.log("User is offline");
}
----------------------------

16. Discount system (AND, OR, if-else if)

let cartTotal = 1200;
let isMember = true;

if (cartTotal > 1000 && isMember) {
  console.log("20% discount applied");
} else if (cartTotal > 1000) {
  console.log("10% discount applied");
} else {
  console.log("No discount");
}
-------------------------------------------------

17. Login + role-check system

let username = "farah";
let password = "1234";
let role = "admin";

let correctUsername = "farah";
let correctPassword = "1234";

if (username === correctUsername && password === correctPassword) {
  console.log("Login successful");

  if (role === "admin") {
    console.log("Welcome Admin");
  } else if (role === "user") {
    console.log("Welcome User");
  } else {
    console.log("Unknown role");
  }
} else {
  console.log("Invalid username or password");
}
--------------------------------------------------
