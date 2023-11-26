// Importing required packages
const fs = require('fs');
const inq = require("inquirer");

// Importing function from shapes.js
const generateSvg = require('./lib/shapes')

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters',
        name: 'text',
        validate: (name) => {
            if (name.length > 3) {
                return 'Only 3 characters allowed'
            }

            return true
        }
    },
    {
        type: 'input',
        message: 'Specify text color (color name or hexadecimal number)',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Select a shape',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Specify shape color (color name or hexadecimal number)',
        name: 'shapeColor'
    }
];

// Function that initializes the program
// // Uses inquirer to prompt the user questions from the questions array
// // Takes user input (data) and writes a new SVG file based off the text the user entered
// // SVG file content is generated using the generateSvg() function imported from shapes.js
// // Tells the user that their SVG is finished once the file has been created
function init() {
    inq
        .prompt(questions)
        .then((data) => {
            fs.writeFileSync(`./results/${data.text}.svg`, generateSvg(data));
        })
        .then(() => console.log('Your SVG has been generated!'))
}

// Calling above function
init()
