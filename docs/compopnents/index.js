const users = require('./user.components');
const contacts = require('./contacts.components');

module.exports = {
    components: {
        schemas: {
            ...users,
            ...contacts
        }
    }
}