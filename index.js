
const fs = require('fs');
const inq = require("inquirer");
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

function init() {
    inq
        .prompt(questions)
        .then((data) => {
            fs.writeFileSync(`./results/${data.text}.svg`, generateSvg(data));
        })
        .then(() => console.log('Your SVG has been generated!'))
}

init()
