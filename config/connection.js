// import Sequelize constructor(function that creates an instance of a class) from the library
const Sequelize = require('sequelize');

// loads information stored in .env, auto executes when we use connection.js
require('dotenv').config();

// create connection to our database, process.env is linking to the information stored in .env
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;