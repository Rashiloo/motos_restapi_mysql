const cors = require('cors');
const express = require('express');
const routes = require('../routes');
const db = require('../database/models');

const server = express();
server.use(cors());
server.options('*', cors());

server.use(express.json());

db.sequelize.sync()
  .then(() => console.log('✔ Base de datos conectada'))
  .catch(err => console.error('✖ Error de conexión a DB:', err));

server.use('/api', routes);

module.exports = server;
