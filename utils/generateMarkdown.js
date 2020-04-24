
module.exports = {
  generateMarkdown : data => {
    try {
      return `
        # ${data.title} <a name="introduction"></a>
        ### Author ${data.username}
        ### Email ${data.email}
        ![${data.username} Avatar](${data.avatar})

        ## Table Of Contents
        1) [Introduction](#introduction)
        2) [Description](#description)
        3) [Installation](#installation)
        4) [Usage](#usage)
        5) [License](#license)
        6) [Contributing](#contributing)
        7) [Questions](#questions)

        ## Description <a name="description"></a>
        ${data.description}

        ## Installation <a name="installation"></a>
        ${data.installation}

        ## Usage <a name="usage"></a>
        ${data.usage}

        ## License <a name="license"></a>
        ${data.license}

        ## Contributing <a name="contributing"></a>
        ${data.contributng}

        ## Questions <a name="questions"></a>
        ${data.questions}
        `;
      }
    catch(err) {
      console.log("Could not build the file:");
      console.log(err);
      return null;
    }
  }
};
