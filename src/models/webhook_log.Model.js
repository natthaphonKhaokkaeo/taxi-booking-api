const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Taxi = require('./taxi.Model');

class WebhookLog extends Model {}

WebhookLog.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        parking_slot: { type: DataTypes.STRING },
        event_type: { type: DataTypes.INTEGER, allowNull: false },
        taxi_number: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.INTEGER, allowNull: false },
        payload: { type: DataTypes.TEXT },
        received_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
        sequelize,
        modelName: "webhook_log", 
        tableName: "webhook_log", 
        timestamps: false, 
    }
);

WebhookLog.belongsTo(Taxi, {
    foreignKey: "taxi_number",
    targetKey: "taxi_number",
    constraints: false,
});

module.exports = WebhookLog;
