
const inquirer = require('inquirer');

function inquire() {
  inquirer
  .prompt(questions )
  .then(answers => {
    return answers;
  })
  .catch(error => {
    console.log("You didn't answer all the questions");
    console.log(error);
    return null;
});

module.exports = inquire;
