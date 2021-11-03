// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
  {
    type: "input",
    message: "Title?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Description? Consider motivation, problem solved, what makes it standout?",
    name: "description",
  },
  {
    type: "input",
    message: "usage/purpose?",
    name: "purpose",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project step by step?",
    name: "installation",
  },
  {
    type: "input",
    message: "Instructions and examples of use?",
    name: "instructions",
  },
  {
    type: "input",
    message: "Github Link?",
    name: "github",
  },
  {
    type: "input",
    message: "License?",
    name: "license",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile((fileName = "README.md"), init(data), (err) => {
    console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
