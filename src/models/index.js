const sequelize = require('../config/db');
const User = require('./users.Model');
const Taxi = require('./taxi');
const Booking = require('./booking');
const NotificationLog = require('./notification_log');
const WebhookLog = require('./webhook_log');

// เชื่อมความสัมพันธ์
User.hasMany(Booking, { foreignKey: 'user_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });

Taxi.hasMany(Booking, { foreignKey: 'taxi_id' });
Booking.belongsTo(Taxi, { foreignKey: 'taxi_id' });

User.hasMany(NotificationLog, { foreignKey: 'user_id' });
NotificationLog.belongsTo(User, { foreignKey: 'user_id' });

Taxi.hasMany(WebhookLog, { foreignKey: 'taxi_number' });
WebhookLog.belongsTo(Taxi, { foreignKey: 'taxi_number' });

module.exports = {
    sequelize,
    User,
    Taxi,
    Booking,
    NotificationLog,
    WebhookLog,
};
