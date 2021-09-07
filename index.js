// Imported Packages
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of Questions for User Input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? Please enter in your GitHub username.'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? Please enter in your email address.'
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? Please enter in a project name.'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short explanation that describes your project'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm i'
    },

    {
        type: 'input',
        name: 'test',
        message: 'What commands should be used to run tests?',
        default: 'npm test'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using your repository? Provide instructions and examples for use. Include screenshots as needed.'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to include in your project? Please select a license.',
        choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'Mozilla Public License 2.0', 'None']
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines would you like to include in your project to let users know about contributing?'
    }
];

// Function to Write README File Using the User's Input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to Initialize App
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile('READMEEX.md', generateMarkdown({... inquirerResponses}));
    });
    console.log('Your README.md has been generated.')
}

// Function Call to Initialize App
init();
