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
    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-Boost_Software_License_1.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "Creative Commons Zero v1.0 Universal License":
      return `[![License](https://img.shields.io/badge/License-Creative_Commons_Zero_v1.0_Universal_License-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/)`;
    case "Eclipse Public License 2.0":
      return `[![License](https://img.shields.io/badge/License-Eclipse_Public_License_2.0-blue.svg)](https://www.eclipse.org/legal/epl-2.0/)`;
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
      return `This project is licensed under the terms of the ${answers.inputLicense}. The license badge at the top of this README includes a link to the description of the license.`;
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
  If you have any questions about this project, please reach out via GitHub or email. <br />
  GitHub: (https://github.com/${answers.inputGitHubUser}) <br />
  Email: ${answers.inputEmail}
      `;
}

module.exports = generateMarkdown;
