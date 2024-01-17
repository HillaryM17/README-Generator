const licenseBadge = (answers) => {
    let license = "";
    if (answers.license === "MIT"){
        license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (answers.license === "Apache License 2.0"){
        license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (answers.license === "Mozilla Public License 2.0"){
        license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (answers.license === "GNU General Public License v3"){
        license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    else if (answers.license === "BSD 3-Clause License"){
        license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    return console.log(license);
}

//["MIT", "Apache License 2.0","Mozilla Public License 2.0", "GNU General Public License v3", "BSD 3-Clause License"]


// function to generate markdown for README
const generateMarkdown = (answers, license) => {
let response = 
`
${license}
# ${answers.title}

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
module.exports = licenseBadge;

