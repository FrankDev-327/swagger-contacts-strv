const loginUser = require('./login')
const createUser = require('./register');
module.exports = {
    paths: {
        '/register': {
            ...createUser
        },
        '/login': {
            ...loginUser
        }
    }
}