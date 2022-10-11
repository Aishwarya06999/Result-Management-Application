const { Sequelize } = require('sequelize');
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
  });

sequelize.authenticate().then(()=>{
  console.log('Connection has been established successfully.')
}).catch((error)=>console.log('Unable to connect to the database:', error))

  
module.exports = sequelize;
global.sequelize = sequelize;