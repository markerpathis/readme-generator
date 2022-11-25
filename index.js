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

const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "",
      name: "",
    },
  ])
  .then((response) =>
    fs.writeFile("README.md", ``, (err) =>
      err ? console.error(err) : console.log("Success!")
    )
  );
