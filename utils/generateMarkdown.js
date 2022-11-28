// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (answers.inputLicense === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.inputTitle}
  
  ${renderLicenseBadge(answers)}

  ## Description
  ${answers.inputDescription}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.inputInstallation}
  
  ## Usage
  ${answers.inputUsage}
  
  ## License
  
  ## Contributing
  ${answers.inputContributions}
  
  ## Tests
  ${answers.inputTests}
  
  ## Questions
  ${answers.inputGitHubUser}
  <br />
  [LINK TO USER ON GITHUB](https://github.com/${answers.inputGitHubUser})
  <br />
  ${answers.inputEmail}
      `;
}

module.exports = generateMarkdown;
