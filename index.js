// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project',
    },
    {
      type: 'select',
      name: 'license',
      message: 'Select a license',
      choices: [
        {
          name: 'MIT',
          value: 'MIT',
        }
      ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Please enter your github username',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data,null,'\t'), (err) => err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
const init = () => {
    prompt(questions)
    .then((answers) => writeToFile('README.md',answers))
}

// Function call to initialize app
init();
