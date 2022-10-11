const Sequelize = require('sequelize');

module.exports = sequelize.define('student',{
    id: {
      type :  Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    } ,
    roll: {
      type : Sequelize.INTEGER(10),
      unique : true
    } ,
    name: Sequelize.STRING(300),     
    dob:{
      type:Sequelize.DATE
    } ,
    score:Sequelize.INTEGER(3) 
  },
  {tableName: 'student'}
);
