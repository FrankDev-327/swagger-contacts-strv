'use strict';

require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs/index');

app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.listen(process.env.PORT, () => {
    console.log(`Swagger running on port: ${process.env.PORT}`);
});
