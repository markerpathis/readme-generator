/////////////////////////////////////////////////////////////////////////
// PSEUDO CODE //////////////////////////////////////////////////////////
// 1. Install inquirer
// 2. Set up the inputs for the README
///// What is included in the README?
//////// Title of my project
//////// Sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
////////// Table of Contents
/////////////// Example "[License](#license)" ....... # license
////////// Installation
/////////////// Instructions, install NPM / inquirer?
////////// Usage
////////// Contributing
////////// Tests
////////// Questions
/////////////// Should prompt the user for github username. Use gibhub api and return profile link?
/////////////// Should prompt the user for email address, then include instructions on how to reach out with additional questions

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
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
    message: "Please enter a installation instructions for your project:",
    name: "inputInstallation",
  },
  {
    type: "mult-choice",
    message: "Please select the license for your project:",
    name: "inputUsage",
    rows: [],
  },
  {
    type: "input",
    message:
      "Please enter the details of anyone else who contributed to this project:",
    name: "inputContributions",
  },
  {
    type: "input",
    message:
      "Please enter the details of anyone else who contributed to this project:",
    name: "inputContributions",
  },
  {
    type: "input",
    message: "Please enter the details of any tests for your project:",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) =>
    fs.writeFile(
      "README.md",
      `
  # ${response.inputTitle}
  
  ## Description
  ${response.inputDescription}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${response.inputInstallation}
  
  ## Usage
  ${response.inputUsage}
  
  ## License
  
  ## Contributing
  ${response.inputContributions}
  
  ## Tests
  ${response.inputTests}
  
  ## Questions
  ${response.inputGitHubUser}
  <br />
  [LINK TO USER ON GITHUB](https://github.com/${response.inputGitHubUser})
  <br />
  ${response.inputEmail}
      `,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );
}

// Function call to initialize app
init();
