const inquirer = require('inquirer');

const confirmAnswerValidator = async (input) => {
    if (!questions.text.length == 3) {
       return 'Must be 3 letters long. Try again!';
    }
    return true;
};

questions = [
    {
        name: 'text',
        type: 'input',
        message: 'Choose three letters for your logo.',
        default: 'SVG',
        validate: confirmAnswerValidator,
    },
    {
        name: 'textColor',
        type: 'rawlist',
        message: 'Which color would you like the letters to be?',
        choices: ['Black', 'Blue', 'Red'],
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
        choices: ['White', 'Gray', 'Beige'],
        default: '#FFFFFF',
    },
]

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log('Success!'))
};

function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            writeToFile(`logo.svg`, generateLogo(answers));
        })
}

init();