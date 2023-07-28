const inquirer = require("inquirer");
const fs = require("fs");
const svgGen = require("./svg");

function init() {
  questions = [
    {
      name: "text",
      type: "input",
      message: "Choose three letters for your logo.",
      default: "SVG",
      // validate: confirmAnswerValidator,
    },
    {
      name: "textColor",
      type: "input",
      message: "Enter the HEX code for the text color:",
      // default: '#000000',
    },
    {
      name: "shape",
      type: "rawlist",
      message: "Choose a shape to house the text.",
      choices: ["Circle", "Triangle", "Square"],
      // default: 'Circle',
    },
    {
      name: "shapeColor",
      type: "input",
      message: "Enter the HEX code for the shape color:",
      // default: '#FFFFFF',
    },
  ];

  inquirer.prompt(questions).then(function (answers) {
    // console.log(JSON.stringify(answers) + "!!! === LINE 36 === !!!");

    const svg = new svgGen(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    )
    
   
      const svgCode = svgGen.getSVG();

      fs.writeToFile(`logo.svg`, svgCode, (error) =>
        error ? console.log(error) : console.log("Logo Complete!")
      );
    
    // console.log(JSON.stringify(svg) + "!!! === LINE 45 === !!!");
  });
}

init();

// const svg = generateLogo(answers);
// writeToFile(`logo.svg`, svg);

// {
//     name: 'textColor',
//     type: 'rawlist',
//     message: 'Which color would you like the letters to be?',
//     choices: ['Black', 'Blue', 'Red'],
//     // default: '#000000',
// },
// {
//     name: 'shape',
//     type: 'rawlist',
//     message: 'Choose a shape to house the letters.',
//     choices: ['Circle', 'Triangle', 'Square'],
//     // default: 'Circle',
// },
// {
//     name: 'shapeColor',
//     type: 'rawlist',
//     message: 'Which color would you like the shape to be?',
//     choices: ['White', 'Gray', 'Beige'],
//     // default: '#FFFFFF',
// },
