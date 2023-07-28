const inquirer = require('inquirer'); 
const generateLogo = require('./_other/old/generateLogo');
const fs = require('fs');



function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log('Success!'))
};

function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            const svg = generateLogo(answers);
            colorPicker(answers);
            writeToFile(`logo.svg`, svg);
        })
}

init();