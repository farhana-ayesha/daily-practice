//Basic Function

function sayHello() {
  console.log("আমি JavaScript শিখছি");
}

sayHello(); // call korle output ashbe
------------------------------------------
//Parameter with 

  function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Farah"); // Hello, Farah!
------------------------------------------
  //Even/Odd Check

  function checkEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEven(7));  // Odd
console.log(checkEven(10)); // Even
---------------------------------------
  
  //Default Parameter

  function calculatePrice(price, discount = 10) {
  let finalPrice = price - (price * discount / 100);
  return finalPrice;
}

console.log(calculatePrice(1000));     // discount na dile 10% dhore: 900
console.log(calculatePrice(1000, 20)); // 20% discount: 800
------------------------------------------------------------------
 // Multiple Return Path
    //Grade Function
  function getGrade(marks) {
  if (marks >= 80) {
    return "A+";
  } else if (marks >= 60) {
    return "A";
  } else if (marks >= 40) {
    return "B";
  } else {
    return "Fail";
  }
}

console.log(getGrade(85)); // A+
console.log(getGrade(45)); // B
console.log(getGrade(30)); // Fail
-----------------------------------------
  
//Array-এর মধ্যে সবচেয়ে বড় সংখ্যা

 function findLargest(numbers) {
  let largest = numbers[0]; // প্রথমটাকে ধরে নিলাম largest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; // বড় পেলে update kora
    }
  }

  return largest;
}

console.log(findLargest([4, 9, 2, 7])); // 9 
--------------------------

//  Arrow Function-এ Convert

  const square = (num) => {
  return num * num;
};

// আরো short vabe (এক লাইনে return hole {} ar return lage na):
const square2 = (num) => num * num;

console.log(square(5)); // 25

-------------------------------------
  
   // Callback Function

  function processOrder(item, callback) {
  console.log("Processing " + item + "...");
  callback();
}

processOrder("Laptop", function() {
  console.log("Order Complete!");
});

// Output:
// Processing Laptop...
// Order Complete!

//note:callback হলো একটা function যেটা আরেকটা function-এর ভেতরে parameter হিসেবে pass kora hoyeche। ভেতরে গিয়ে সেটাকে callback() লিখে call kora hoy।

-------------------------------------------

  
//Combination (Total + Discount)

  function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }

  if (total > 300) {
    total = total - (total * 10 / 100); // 10% discount
  }

  return total;
}

console.log(calculateTotal([100, 250, 75])); // 425 total → discount → 382.5
console.log(calculateTotal([50, 100]));      // 150 total → discount nai → 150


  
  
