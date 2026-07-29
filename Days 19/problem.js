// Function, Arrow Function, Loop, Array, Object—সবগুলোর use kore Problem Solving improve হবে।


// Problem 1: Array-এর সব Number Double করো

const doubleNumbers = (numbers) => {
    let result = [];

    for (let number of numbers) {
        result.push(number * 2);
    }

    return result;
};

console.log(doubleNumbers([1, 2, 3, 4]));

Output

[2, 4, 6, 8]


---------------------

 // Problem 2: শুধু Even Number Return করো

const getEvenNumbers = (numbers) => {
    let result = [];

    for (let number of numbers) {
        if (number % 2 === 0) {
            result.push(number);
        }
    }

    return result;
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

Output

[2, 4, 6]


---

 // Problem 3: সব Number-এর Sum

const getSum = (numbers) => {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
};

console.log(getSum([10, 20, 30]));

Output

60


---

// Problem 4: String-এর Vowel Count

const countVowels = (word) => {
    let count = 0;

    for (let char of word) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("education"));

Output

5

-------------------------------

  //Problem 5: Object-এর সব Key Print করো

const printKeys = (obj) => {
    for (let key in obj) {
        console.log(key);
    }
};

printKeys({
    name: "Farhana",
    age: 29,
    city: "Khulna"
});

Output

name
age
city


---

// Pattern প্রায় সব Problem-এর Structure একই।

const functionName = (parameter) => {

    // Variable

    // Loop

    // Condition (যদি দরকার হয়)

    // Return

};

______________________________________________
---

    // Odd numbers 


const getOddNumbers = (numbers) => {
    let result = [];

    for (let number of numbers) {
        if (number % 2 !== 0) {
            result.push(number);
        }
    }

    return result;
};

console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7]));





    







    
    
