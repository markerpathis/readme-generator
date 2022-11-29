// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TRY OUT A SWITCH STATEMENT
function renderLicenseBadge(answers) {
  if (answers.inputLicense === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (answers.inputLicense === "GNU General Public License v3.0") {
    return `[![License](https://img.shields.io/badge/License-GNU_General_Public_License_v3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (answers.inputLicense === "MIT License") {
    return `[![License](https://img.shields.io/badge/License-MIT_License-blue.svg)](https://mit-license.org/)`;
  } else if (answers.inputLicense === "BSD 2-Clause 'Simplified' License") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause_Simplified_License-blue.svg)](https://choosealicense.com/licenses/bsd-2-clause/)`;
  } else if (
    answers.inputLicense === "BSD 3-Clause 'New' or 'Revised' License"
  ) {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause_New_or_Revised_License-blue.svg)](https://choosealicense.com/licenses/bsd-3-clause/)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  return `This project is licensed under the terms of the ${answers.inputLicense}.`;
}

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
  ${renderLicenseSection(answers)}

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
