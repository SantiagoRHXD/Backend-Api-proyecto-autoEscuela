const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Rol = sequelize.define('rol', {
	NombreRol: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
});

module.exports = Rol;