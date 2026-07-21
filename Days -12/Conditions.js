
1. Leap Year Checker

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


---

2. Student Grade

let marks = 73;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("A-");
} else if (marks >= 50) {
    console.log("B");
} else if (marks >= 40) {
    console.log("C");
} else {
    console.log("Fail");
}


---

3. Login System

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else if (username === "admin") {
    console.log("Wrong Password");
} else {
    console.log("User Not Found");
}


---

4. Ticket Price

let age = 65;

if (age < 5) {
    console.log("Free Ticket");
} else if (age <= 12) {
    console.log("Ticket: 100 TK");
} else if (age <= 59) {
    console.log("Ticket: 300 TK");
} else {
    console.log("Senior Discount: 150 TK");
}


---

5. Number Analyzer

let num = -8;

if (num === 0) {
    console.log("Zero");
} else if (num > 0 && num % 2 === 0) {
    console.log("Positive Even");
} else if (num > 0 && num % 2 !== 0) {
    console.log("Positive Odd");
} else if (num < 0 && num % 2 === 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}


