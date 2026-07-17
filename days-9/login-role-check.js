18. Login + Role-check system (সব কিছু একসাথে)

let username = "farah";
let password = "1234";
let role = "admin";

let correctUsername = "farah";
let correctPassword = "1234";

// Comparison + Logical operator (&&)
if (username === correctUsername && password === correctPassword) {
  console.log("Login successful");

  // if-else if for role check
  if (role === "admin") {
    console.log("Welcome Admin! Full access granted.");
  } else if (role === "user") {
    console.log("Welcome User! Limited access granted.");
  } else {
    console.log("Unknown role");
  }

  // Ternary operator bonus
  let accessLevel = (role === "admin") ? "Full Access" : "Limited Access";
  console.log("Access Level: " + accessLevel);

} else {
  console.log("Invalid username or password");
}

