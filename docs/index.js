const users = require('./users.docs/index');
const tags = require('./tags');
const components = require('./users.docs/components');
const servers = require('./servers');
const basicInfo = require('./basicInfo');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...users
}