module.exports = function(sequelize, DataTypes) {
	var Survey = sequelize.define('data', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		age: {
			type: DataTypes.STRING,
			defaultValue: '',
			validate: {
				notEmpty: {
					msg: 'нас оруулаагүй'
				}
			}
		},
		gender: {
			type: DataTypes.STRING,
			defaultValue: '',
			validate: {
				notEmpty: {
					msg: 'хүйс оруулаагүй'
				}
			}
		},
		question_id: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		preference: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		}
	});

	return Survey;
};
