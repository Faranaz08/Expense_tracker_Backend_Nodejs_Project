const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenstracker', 'root', 'faranaz', {dialect: 'mysql', host:'localhost'});

module.exports = sequelize;