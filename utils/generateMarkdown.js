// function to generate markdown for README
 const generateMarkdown = (answers) => {
let response = 
`# ${answers.title}

## Table of Contents:

- [Description](#Description)  
- [Installation](#Installation)  
- [Usage](#Usage)  
- [License](#License)  
- [Contributors](#Contributors)  
- [Tests](#Tests)  
- [Questions](#Questions)  

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}

## Contributors

${answers.contributors}

## Tests

${answers.tests}

## Questions

GitHub: [${answers.gitHub}](github.com/${answers.gitHub})  
Email: [${answers.email}](${answers.email})`


return response
 }



module.exports = generateMarkdown;

