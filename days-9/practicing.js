6. Leap year check (year % 4)

let year = 2024;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
-------------------------------------

7. BMI category (if-else if)

let bmi = 22.5;

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi < 25) {
  console.log("Normal");
} else if (bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
-------------------------------
8. Month number → Season

let month = 6;

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month === 3 || month === 4 || month === 5) {
  console.log("Summer");
} else if (month === 6 || month === 7 || month === 8 || month === 9) {
  console.log("Monsoon");
} else {
  console.log("Autumn");
}
-----------------------------

9. Voting eligibility (nested if-else)

let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible - ID required");
  }
} else {
  console.log("Not eligible - underage");
}
----------------------------------
10. Dashboard access (nested condition)

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Admin Dashboard");
  } else {
    console.log("User Dashboard");
  }
} else {
  console.log("Please Login");
}

-------------------------------------
11. Even or Odd (ternary operator)

let number = 7;

let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);
