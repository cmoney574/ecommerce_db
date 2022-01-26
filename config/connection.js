const Sequilize = require('sequelize')
require('dotenv').config();

const sequelize = new Sequilize(
    process.env.HIDDEN_DB,
    process.env.HIDDEN_USER,
    process.env.HIDDEN_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',
    }
);
module.exports = sequelize