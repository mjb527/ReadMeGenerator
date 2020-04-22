
// prompt the user
const inquirer = require('inquirer');
// make requests
const request = require('axios').default;

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
    type: 'input',
    name: 'tableOfContents',
    message: 'Give me a comma separated Table of Contents.'
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

function writeToFile(fileName, data) {
}

function init() {
  // prompt the user for their GitHub username
  if(false)
  inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers);
    makeRequest(answers.username);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
  console.log(makeRequest('mjb527'));
  // github badge: [![GitHub version](https://badge.fury.io/gh/Naereen%2FStrapDown.js.svg)](https://github.com/Naereen/StrapDown.js)

}


// return the user's email address and avatar's url in an array [email, avatar]
function makeRequest(username) {
  const returnThis = [];

  request.get('https://api.github.com/users/' + username, {
    params: {
      Accept: 'application/vnd.github.v3+json', // specify v3 of the api

    }
  })
  .then(function (response) {
    // handle success
    returnThis.push(response.data.email);
    returnThis.push(response.data.avatar_url);
    console.log(response.data.email);
    console.log(response.data.avatar_url);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    return returnThis;
});

}

init();
