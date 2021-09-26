const loginUser = require('./login')
const createUser = require('./register');

module.exports = {
    '/register': {
        ...createUser
    },
    '/login': {
        ...loginUser
    }
}