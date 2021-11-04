// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// const questions =
inquirer
  .prompt([
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
  ])

  // TODO: Create a function to write README file
  // function writeToFile(fileName, data) {
  .then((data) =>
    fs.writeFile("README.md", init(data), (err) => {
      console.log(err);
    })
  );

// TODO: Create a function to initialize app
function init(data) {
  return `
    # ${data.title}
    
    ## Description
    ${data.description}

    ## Purpose
    ${data.purpose}
    

    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    ${data.instructions}
    To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
       [three back ticks] md
        ![alt text](assets/images/screenshot.png)
        [three back ticks]
    
    ## Credits
    ${data.github}
    ## License
    [${data.license}] 2021
    ---
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    ## Badges
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    ## Features
    If your project has a lot of features, list them here.
    ## How to Contribute
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    ## Tests
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.`;
}

// Function call to initialize app
// init();
