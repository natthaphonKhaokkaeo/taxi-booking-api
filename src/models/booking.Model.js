const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.Model');
const Taxi = require('./taxi');

const Booking = sequelize.define('Booking', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
    taxi_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Taxi, key: 'id' } },
    booking_time: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.INTEGER, allowNull: false },
    date_time_booking: { type: DataTypes.DATE, allowNull: false },
}, { timestamps: true });

module.exports = Booking;
