const inquirer = require('inquirer');

questions = [
    {
        name: 'text',
        type: 'input',
        message: 'Choose three letters for your logo.',
        default: 'SVG',
    },
    {
        name: 'textColor',
        type: 'rawlist',
        message: 'Which color would you like the letters to be?',
        choices: ['Black', 'Blue', 'Green'],
        default: '#000000',
    },
    {
        name: 'shape',
        type: 'rawlist',
        message: 'Choose a shape to house the letters.',
        choices: ['Circle', 'Triangle', 'Square'],
        default: 'circle',
    },
    {
        name: 'shapeColor',
        type: 'rawlist',
        message: 'Which color would you like the shape to be?',
        choices: ['White', 'Pink', 'Beige'],
        default: '#FFFFFF',
    },
]

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log('Success!'))
};

function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            writeToFile(`${questions.text.toLowerCase}logo.svg`, generateLogo(answers));
        })
}

init();