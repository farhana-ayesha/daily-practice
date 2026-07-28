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
