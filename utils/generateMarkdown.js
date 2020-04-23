function generateMarkdown(data) {
  try {
    return `
      # ${data.title}
      ### Author ${data.username}
      ### Email ${data.email}

      `;
    }
  catch(err) {
    console.log("Could not build the file:");
    console.log(err);
    return null;
  }
}

module.exports = generateMarkdown;
