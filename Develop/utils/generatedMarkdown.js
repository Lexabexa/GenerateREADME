// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}
function renderLicenseBadge(license) {
  if (license !=="none") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
//return `# ${data.title}
//`;
//}
//module.exports = generateMarkdown;
function generateMarkdown(data) {
  return `# ${data.Title}
# Table of Contents
* [Title](#Title)
* [Table of Contents](#Table of Contents)
* [Description](#Description)
* [Screenshot](#Screenshot)
* [Link](#Link)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Contributing](#Contributing)
* [Questions](#Questions)
* [License](#License)
# Description
${data.Description}
# Screenshot
![alt-text](${data.Screenshot})
# Link
${data.link}
# Installation
${data.Installation}
# Usage
${data.Usage}
# Tests
${data.Tests}
# Contributing
${data.Contributing}
# Questions
${data.Questions}
# License
${renderLicenseBadge(data.License)}

`;
}

module.exports = generateMarkdown;