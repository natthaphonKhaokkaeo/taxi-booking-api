const express = require('express');
const bodyParser = require('body-parser');
const webhookRoutes = require('./routes/webhookRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(bodyParser.json());
app.use('/api', webhookRoutes);

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Database sync failed:', err));

module.exports = app;
