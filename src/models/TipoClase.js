const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const TipoClase = sequelize.define('tipoclase', {
	TipoNombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Duracion: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

module.exports = TipoClase;