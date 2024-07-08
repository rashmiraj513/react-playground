const readline = require('readline');

// Create an interface to read from the standard input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Arrow Function to accept user input
// Call this function inside an async function only.
const getUserInput = async (question) => {
  return new Promise((resolve) => rl.question(question, (ans) => resolve(ans)));
};

// The package `inquirer` can also be used to accept the user input.
// First install this package before using.
// const inquirer = require("inquirer");

// const question = [
//   {
//     type: "input",
//     name: "name",
//     message: "Enter a number: ",
//   },
// ];

// inquirer.prompt(question).then((ans) => console.log(ans.name));

// Standard function to calculate the factorial of a number
// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// An arrow function to calculate the factorial of a number
const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

const main = async () => {
  const input = await getUserInput('Enter a number: ');
  rl.close();
  console.log(`The factorial of ${input} is ${factorial(input)}.`);
};

main();
