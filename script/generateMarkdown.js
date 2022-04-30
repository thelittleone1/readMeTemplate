// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//var license;
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 2-Clause'Simplified' License":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD-3-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    default:
      return "";
  }
}

// A function that returns the license link
function renderLicenseLink(license) {
    // console.log(license);
    //console.log(renderLicenseBadge(license));
    return `${renderLicenseBadge(license)}`;
  
}


// Creates a function to generate markdown for the README
function generateMarkdown(data) {
  console.log(data);

  return `
  
  # Project: 
  ${data.projectTitle}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.install}

  ## Usage
  ${data.howTo}

  ## Contributors
  ${data.contributes}

  ## Tests
  ${data.test}

  ## Github Username
  ${data.gitHubName}

  ## Email
  ${data.email}

  ## Questions
  [Github](https://github.com/${data.gitHubName})
  
  ## License
  ${renderLicenseLink(data.license[0])}`;
}

module.exports = generateMarkdown;
