'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, unique: true, allowNull: false },
      phone_number: { type: Sequelize.STRING, allowNull: false },
      fcm_token: { type: Sequelize.STRING, unique: true },
      status: { type: Sequelize.INTEGER, defaultValue: 1 },
      type: { type: Sequelize.INTEGER, allowNull: false },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });

    await queryInterface.createTable('taxi', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      taxi_number: { type: Sequelize.STRING, unique: true, allowNull: false },
      status: { type: Sequelize.INTEGER, allowNull: false },
      parking_slot: { type: Sequelize.STRING },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      last_updated: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });

    await queryInterface.createTable('booking', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'users', key: 'id' } },
      taxi_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'taxi', key: 'id' } },
      booking_time: { type: Sequelize.DATE, allowNull: false },
      status: { type: Sequelize.INTEGER, allowNull: false },
      type: { type: Sequelize.INTEGER, allowNull: false },
      date_time_booking: { type: Sequelize.DATE, allowNull: false },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });

    await queryInterface.createTable('notification_log', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'users', key: 'id' } },
      message: { type: Sequelize.TEXT, allowNull: false },
      status: { type: Sequelize.INTEGER, defaultValue: 0 },
      fcm_token: { type: Sequelize.STRING },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      sent_at: { type: Sequelize.DATE },
    });

    await queryInterface.createTable('webhook_log', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      parking_slot: { type: Sequelize.STRING },
      event_type: { type: Sequelize.INTEGER, allowNull: false },
      taxi_number: { type: Sequelize.STRING, allowNull: false, references: { model: 'taxi', key: 'taxi_number' } },
      status: { type: Sequelize.INTEGER, allowNull: false },
      payload: { type: Sequelize.TEXT, allowNull: true},
      received_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('webhook_log');
    await queryInterface.dropTable('notification_log');
    await queryInterface.dropTable('booking');
    await queryInterface.dropTable('taxi');
    await queryInterface.dropTable('users');
  }
};
