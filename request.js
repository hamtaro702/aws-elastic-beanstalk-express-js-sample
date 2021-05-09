const rest = require('rest')
const mime = require('rest/interceptor/mime')

exports = rest.wrap(mime);