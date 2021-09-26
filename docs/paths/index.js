const users = require('../users.docs/index')
const contacts = require('../contacts/index')
module.exports = {
    paths: {
        ...users,
        ...contacts
    }
}