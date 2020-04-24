const inquirer = require('inquirer');

// const inquire =

module.exports = {
  inquire: questions => {
      inquirer
      .prompt(questions)
      .then(answers => {
        return answers;
      })
      .catch(error => {
        console.log("You didn't answer all the questions");
        console.log(error);
        return null;
    });
}
}
