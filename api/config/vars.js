const path = require('path');
require('dotenv-safe').config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example')
});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mysql: {
        host: process.env.DB_ENDPOINT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    baseURL: process.env.API_URL,
    vueURL: process.env.VUE_URL,
};