for (let number = 1; number < 101; number++) {
  // create a loop that prints each number from 1 to 100 on a new line
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
    // Create a else statment for numbers that are multiples of both 3 and 5 print fizzbuzz instead of the number
  } else if (number % 3 == 0) {
    console.log("Fizz");
    // Create a if statment for each multiple of 3 print fizz instead of the number
  } else if (number % 5 == 0) {
    console.log("Buzz");
    // Create a else statment for each multiple of 5 print buzz instead of the number
  } else {
    console.log(number);
    // else print the numbers
  }
}
