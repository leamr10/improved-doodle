
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
    }
    return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `- [License](#license)`
    }
    return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License /n This project is licensed under ${license} license.`
    }
    return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ${renderLicenseBadge(data.license)}

   ## Description
   ${data.description}

   ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   ${renderLicenseLink(data.license)}
   - [Contributing](#contributing)
   - [Testing](#testing)
   = []

   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## Contributing
   ${data.contributing}

   ## Tests
   ${data.testing}

   ## License
   This application is covered under the ${data.license} license. 

   ## Questions
   Additional Questions:
   Email: ${data.email}
   GitHub: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;