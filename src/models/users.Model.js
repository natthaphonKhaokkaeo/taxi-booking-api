const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    fcm_token: { type: DataTypes.STRING, unique: true },
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
    type: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: true });

module.exports = User;
