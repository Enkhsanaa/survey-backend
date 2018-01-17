'use strict';
var config = require('./config');
var Sequelize = require('sequelize');

var db = {
	Sequelize: Sequelize,
	sequelize: new Sequelize(
		config.sequelize.database,
		config.sequelize.user,
		config.sequelize.pass,
		config.sequelize.options
	)
};

var models = ['survey'];

var set_database = (function() {
	if (db[models[0]]) return;

	models.forEach(function(model) {
		if (!db[model]) {
			db[model] = db.sequelize.import('./api/' + model + '/' + model + '.model.js');
		}
	});
})();
module.exports = db;
