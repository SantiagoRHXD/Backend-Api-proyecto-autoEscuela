const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Evaluacion = sequelize.define('evaluaciones', {
	NombreEvaluacion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Fecha_Evaluacion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Tipo_Evaluacion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Nota: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

module.exports = Evaluacion;