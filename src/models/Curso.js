const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Curso = sequelize.define('curso', {
	Nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Precio: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Duracion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Horario: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Hora_Inicio: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Hora_Fin: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Cupos_Disponibles: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

module.exports = Curso;