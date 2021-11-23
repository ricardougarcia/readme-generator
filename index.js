// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const renderLicenseSection = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions =
const start = async () => {
  const data = await inquirer.prompt([
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
      name: "usage",
    },
    {
      type: "input",
      message: "Github Link?",
      name: "github",
    },
    {
      type: "list",
      message: "License?",
      choices: ["MIT", "none"],
      name: "license",
    },
    {
      type: "input",
      message: "Email?",
      name: "email",
    },
  ]);

  // TODO: Create a function to write README file
  // function writeToFile(fileName, data) {
  fs.writeFile("README.md", init(data), (err) => {
    console.log(err);
    console.log(data);
    // generateMarkdown(data.license);
  });
};

start();
// TODO: Create a function to initialize app
function init(data) {
  return `
  ## ${data.title}
  
  ## Description
  ${data.description}

  ## Purpose
  ${data.purpose}
  

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
      [insert three back ticks] md
      ![alt text](assets/images/screenshot.png)
      [ insert three back ticks]
  
  ## Credits - Github and Email
  ${data.github}
  ${data.email}

  ## License
  ${renderLicenseSection(data.license)}`;
}
