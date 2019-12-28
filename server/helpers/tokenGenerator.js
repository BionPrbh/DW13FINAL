const jwt = require('jsonwebtoken');
const secretKey = 'this-is-my-deepest-secret'

function tokenGenerator(data) {
  let token = jwt.sign(data, secretKey)
  return token
}

module.exports = tokenGenerator