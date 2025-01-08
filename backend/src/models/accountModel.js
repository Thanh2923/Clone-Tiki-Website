// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Account = sequelize.define(
  'Account',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: 'Account',
    timestamps: false,
  }
);


module.exports = { Account, sequelize };
