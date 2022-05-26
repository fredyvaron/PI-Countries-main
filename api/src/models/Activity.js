const { DataTypes } = require("sequelize");

module.exports = (sequelize)=>{
  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3', '4', '5']
    },
    duration: {
      type: DataTypes.INTEGER
    },
    season: {
      type: DataTypes.ENUM,
      values: ["Summer", "Autumn", "Winter", "Spring"]
    }
  })
};
