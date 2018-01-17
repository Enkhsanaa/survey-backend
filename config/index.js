'use strict';
var path = require('path');
var sequelize = require('sequelize');

module.exports = {
	env: process.env.NODE_ENV,
	root: path.normalize(__dirname + '/..'),
	port: process.env.PORT || 8668,
	ip: process.env.IP || '0.0.0.0',
	sequelize: {
		uri: 'sqlite://',
		database: 'survey',
		user: 'survey_user',
		pass: 'survey_pass',
		options: {
			host: 'localhost',
			dialect: 'mysql',
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			},
			define: {
				charset: 'utf8',
				collate: 'utf8_general_ci'
			},
			operatorsAliases: sequelize.Op,
			logging: false
		}
	}
};