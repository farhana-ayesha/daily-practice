//"Programming Hero" এর length ber koro

const name = 'Programming Hero';
console.log(name.length);

// "javascript" কে বড় হাতের অক্ষরে প্রিন্ট করো।
const name= "javascript";
console.log(name.toUpperCase());

// "HELLO" কে ছোট হাতের অক্ষরে প্রিন্ট করো।
const text ="HELLO"
console.log(text.toLowerCase());

// "I love JavaScript"-এ "Java" আছে কিনা দেখো।
const texts = "I love JavaScript";
console.log(texts.includes("Java"));

৫. "Farhana Ayesha" থেকে "Farhana" অংশ slice() দিয়ে বের করো।
const name= "Farhana Ayesha";
console.log(name.slice(0,7));

৬. " apple,banana,mango " থেকে trim() এবং split() ব্যবহার করে একটি Array তৈরি করো।

const fruits = " apple, banana, mango ";
console.log(fruits.trim().split(", "));
