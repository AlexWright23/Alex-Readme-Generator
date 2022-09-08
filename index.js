// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  {
  type: 'input',
  name: 'title',
  message: 'What is the name of your application?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your application.'
  },
  {
    type: 'input',
    name: 'install',
    message: 'How do you install the application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How will you use this application?',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'List all the contributors.',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please chose a license if used.',
    choices: ['Apache', 'Mozilla Public LIcense 2.0', 'MIT'],
  },
  {
    type: 'input',
    name: 'user',
    message: 'Please enter your GitHub username.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email.'
  },

]


function askQuestions(){
  inquirer.prompt (questions)
  .then(function (answers){
      fs.writeFile("generatedMarkdown.md", generateMarkdown (answers),(err) =>{
          if(err){
              console.log("You missed some fields, please start over.");
          }
      }
      );
  });
}
askQuestions();

