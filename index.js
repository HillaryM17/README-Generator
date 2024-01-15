const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: "questions",
    message: "Please list any questions"}
];

inquirer.prompt (questions)


// function to write README file
function writeToFile(fileName, data) {
  
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

