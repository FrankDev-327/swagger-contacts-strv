require('dotenv').config();
module.exports = {
    servers: [
        {
            url: process.env.URL_CONTACTS_API,
            description: "Heroku server"
        },
    ]
}