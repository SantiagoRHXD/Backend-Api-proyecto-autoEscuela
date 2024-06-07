const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Asignatura = sequelize.define('asignatura', {
	NombreAsignatura: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

module.exports = Asignatura;