// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter the title of your project:",
    name: "inputTitle",
  },
  {
    type: "input",
    message: "Please enter a description of your project:",
    name: "inputDescription",
  },
  {
    type: "input",
    message: "Please enter any installation instructions for this project:",
    name: "inputInstallation",
  },
  {
    type: "input",
    message:
      "Please enter details about how a user should use this application:",
    name: "inputUsage",
  },
  {
    type: "list",
    message: "Please select the license for your project:",
    name: "inputLicense",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal License",
      "Eclipse Public License 2.0",
      "None",
    ],
  },
  {
    type: "input",
    message:
      "Please enter any contributors who helped work on this project (type N/A if there are none):",
    name: "inputContributions",
  },
  {
    type: "input",
    message:
      "Please enter details about any tests for this project (type N/A if there are none):",
    name: "inputTests",
  },
  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "inputGitHubUser",
  },
  {
    type: "email",
    message: "Please enter your email address:",
    name: "inputEmail",
  },
];

// Function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, generateMarkdown(answers), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile("README.md", answers));
}

// Function call to initialize app
init();
