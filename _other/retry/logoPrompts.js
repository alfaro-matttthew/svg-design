const inquirer = require('inquirer');
// const { join } = require('path');
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

class Logo {
    constructor() {
        this.title = '';
        this.titleColor = '';

        this.shape = '';
        this.shapeColor = '';
    }

    run() {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: 'Please enter your name',
            },
          ])
          .then(({ name }) => {
            this.title = name;
            return this.addTask();
          })
          .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong.');
          });
      }
}

run();

console.log