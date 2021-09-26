const tags = require('./tags');
const components = require('./compopnents/index');
const servers = require('./servers');
const basicInfo = require('./basicInfo');
const paths = require('./paths/index');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...paths
}