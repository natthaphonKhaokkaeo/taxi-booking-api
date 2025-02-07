const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.Model');

const NotificationLog = sequelize.define('NotificationLog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
    message: { type: DataTypes.TEXT, allowNull: false },
    status: { type: DataTypes.INTEGER, defaultValue: 0 },
    fcm_token: { type: DataTypes.STRING },
    sent_at: { type: DataTypes.DATE },
}, { timestamps: true });

module.exports = NotificationLog;
