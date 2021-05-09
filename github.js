
const request = require('./request')
const getUser = user => request(`https://api.github.com/users/${user}`)

exports = { getUser }