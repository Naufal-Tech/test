const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_ch6', 'postgres', 'kadatahu', {
  dialect: 'postgres',
  host: 'localhost',
  port: parseInt('5432', 10),
});

sequelize.authenticate().then(() => {
  console.log('connect on database');
});

module.exports = { sequelize };
