const axios = require('axios');

class Users {

     static async all() {
        let res = await axios.get('https://api.github.com/users/hamtaro702');
        return res;
      }
}

module.exports = Users;