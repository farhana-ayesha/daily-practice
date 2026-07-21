1. Leap Year Checker

Question:

Write a program that checks whether a given year is a Leap Year.

If it is a leap year, print "Leap Year".

Otherwise, print "Not a Leap Year".


let year = 2024;

Solution:

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


---

2. Student Grade

Question:

Write a program that prints the student's grade based on the marks.

80 or above → "A+"

70–79 → "A"

60–69 → "A-"

50–59 → "B"

40–49 → "C"

Below 40 → "Fail"


let marks = 73;

Solution:

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

Question:

Write a program to check the login information.

If the username is "admin" and the password is "12345", print "Login Successful".

If the username is correct but the password is incorrect, print "Wrong Password".

Otherwise, print "User Not Found".


let username = "admin";
let password = "12345";

Solution:

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

Question:

Write a program to calculate the ticket price based on age.

Under 5 → "Free Ticket"

5–12 → "Ticket: 100 TK"

13–59 → "Ticket: 300 TK"

60 or above → "Senior Discount: 150 TK"


let age = 65;

Solution:

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

Question:

Write a program that checks whether a number is:

Positive Even

Positive Odd

Negative Even

Negative Odd

Zero


let num = -8;

Solution:

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


---

Question:

Write a program using the following conditions:

If the year is a Leap Year and marks >= 80, print "Congratulations! Scholarship".

If only the year is a Leap Year, print "Lucky Year".

If only marks >= 80, print "Excellent Student".

Otherwise, print "Keep Working".


let year = 2024;
let marks = 85;

Solution:

let year = 2024;
let marks = 85;

if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && marks >= 80) {
    console.log("Congratulations! Scholarship");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Lucky Year");
} else if (marks >= 80) {
    console.log("Excellent Student");
} else {
    console.log("Keep Working");
}
