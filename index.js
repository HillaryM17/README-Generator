const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// function licenseBadge(answers){ 
//     let license = ""
//     if (answers.license == "Apache 2.0"){
//         license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//     }
//     else 
//     (license = "BADGE");
// return license
// }

// array of questions for user

const questions = [
{
    type: "input",
    name: "title",
    message: "What is the Title of your project?"
},
{
    type: "input",
    name: "description",  
    message: "Please give a description of your program"
}, 
{
    type: "input",
    name: "installation",
    message: "How do you install your program?"
}, 
{
    type: "input",
    name: "usage",
    message: "How do you use your program?"
}, 
{
    type: "list",
    name: "license",
    message: "What License would you like for your repository?",
    choices: ["MIT", "Apache License 2.0","Mozilla Public License 2.0", "GNU General Public License v3", "BSD 3-Clause License"]
}, 
{
    type: "input",
    name: "contributors",
    message: "Please list and contributors or sources for your project"
}, 
{
    type: "input",
    name: "tests",
    message: "Please list any tests for your project"
}, 
{
    type: "input",
    name: "gitHub",
    message: "Please enter your GitHub username"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address"
}
];

const promptUser = () => inquirer.prompt (questions) 
//.then((answers) => licenseBadge(answers))
.then ((answers) => generateMarkdown(answers))
.then ((response) => writeToFile("README1.md", response))
.then(() => console.log('Successfully wrote to README1.md'))
.catch((err) => console.error(err));


// function to write README file
function writeToFile(filename, data) {
fs.writeFile(filename,data,(err) =>
err ? console.log(err) : console.log('Success!')
)};

// function to initialize program
function init() {
promptUser(questions)
}

// function call to initialize program
init();

