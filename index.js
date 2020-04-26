
// prompt the user
const inquirer = require('inquirer');
// make requests
const api = require('./utils/api.js');
// build markdown
const md = require('./utils/generateMarkdown.js');
// file system
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?'
    },
    {
      type: 'editor',
      name: 'description',
      message: 'Tell me about your project.'
    },
    {
      type: 'editor',
      name: 'installation',
      message: 'How would someone install your project (git clone, npm install, etc.)?'
    },
    {
      type: 'editor',
      name: 'usage',
      message: 'How would someone use your project?'
    },
    {
      type: 'input',
      name: 'license',
      message: 'If applicable, tell me about your project\'s licensing.'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How could someone contribute?'
    },
    {
      type: 'editor',
      name: 'tests',
      message: 'What tests were run?'
    },
    {
      type: 'editor',
      name: 'questions',
      message: 'What are some common questions you could answer now?'
    }
  ];

// const questions = [
//   {
//     type: 'input',
//     name: 'username',
//     message: 'What is your Github username?'
//   }
// ];

// "main" method
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      api.request(answers.username).then(response => {
        // if response was fine, set the email and avatar from the request
        if(response !== null) {
          answers.email = response[0];
          answers.avatar = response[1];
        }
        else {
          console.log('Could not communicate with Github server');
          return;
        }

        // generate the file content based on the data variable
        const content = md.generateMarkdown(answers);

        // write the data to a file
        writeToFile('README.md', content);
      });

    });


}

function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function(error) {
    if(error) console.log(error);
    else console.log('Success!');
  });


}

// run program
init();
