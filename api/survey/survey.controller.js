const sqldb = require('../../sqldb'),
	Survey = sqldb.survey,
	Op = sqldb.Sequelize.Op,
	config = require('../../config');

module.exports.index = (req, res, next) => {
	console.log(req.body);
	for (let i = 1; i <= 20; i++) {
		Survey.create({
			age: req.body.age,
			gender: req.body.gender,
			question_id: i,
			preference: req.body['questions[' + i + ']']
		});
	}
	res.redirect('http://milab.num.edu.mn/people/altangerelc/sudalgaa');
};
