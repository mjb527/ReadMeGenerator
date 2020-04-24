
const axios = require('axios').default;

module.exports = {
  request : username => {
    request.get('https://api.github.com/users/' + username, {
      params: {
            Accept: 'application/vnd.github.v3+json', // specify v3 of the api

          }
        })
        .then(function (response) {
          // handle success
          return [response.data.email, response.data.avatar_url];
        })
        .catch(function (error) {
          console.log("Error querying GitHub server:");
          console.log("error");
          return null;
        });

  }
};
