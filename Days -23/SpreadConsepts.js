//Rest Operator ...
//Spread আর Rest দেখতে একই:
//কিন্তু কাজ আলাদা।
Rest = বাকি সব সংগ্রহ করে
const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);
Output:
10
[20, 30, 40]
Function-এ:
function add(...numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(add(10, 20, 30, 40));
Output:
100
