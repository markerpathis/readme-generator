// Function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  const license = answers.inputLicense;

  switch (license) {
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
    case "GNU General Public License v3.0":
      return `[![License](https://img.shields.io/badge/License-GNU_General_Public_License_v3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case "MIT License":
      return `[![License](https://img.shields.io/badge/License-MIT_License-blue.svg)](https://mit-license.org/)`;
    case "BSD 2-Clause 'Simplified' License":
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause_Simplified_License-blue.svg)](https://choosealicense.com/licenses/bsd-2-clause/)`;
    case "BSD 3-Clause 'New' or 'Revised' License":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause_New_or_Revised_License-blue.svg)](https://choosealicense.com/licenses/bsd-3-clause/)`;
    default:
      return ``;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  const license = answers.inputLicense;

  switch (license) {
    case "None":
      return ``;
    default:
      return `This project is licensed under the terms of the ${answers.inputLicense}.`;
  }
}

// Function to generate markdown for README
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
