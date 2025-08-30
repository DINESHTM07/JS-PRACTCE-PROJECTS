// Multiplication Tables from 1 to 10

for (let number = 1; number <= 10; number++) {
  console.log("Table of", number);   // Heading for each table
  
  for (let i = 1; i <= 10; i++) {
    console.log(number, "x", i, "=", number * i);
  }

  console.log("------------------"); // Just to separate tables
}
