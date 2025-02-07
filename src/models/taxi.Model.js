const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Taxi extends Model {}

Taxi.init(
    {
        taxi_number: { type: DataTypes.STRING, primaryKey: true },
        status: { type: DataTypes.INTEGER, allowNull: false },
        parking_slot: { type: DataTypes.STRING },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        last_updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
        sequelize,         
        modelName: "Taxi", 
        tableName: "taxi", 
        timestamps: false, 
    }
);

module.exports = Taxi;
