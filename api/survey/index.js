const Router = require('express').Router,
	controller = require('./survey.controller');

var router = new Router();

router.post('/', controller.index);

exports['default'] = router;
module.exports = exports['default'];
