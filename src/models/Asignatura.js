// Importar el módulo DataTypes de Sequelize
const { DataTypes } = require('sequelize');

// Importar la conexión a la base de datos desde el archivo connection.js en la carpeta utils
const sequelize = require('../utils/connection');

// Definir el modelo Asignatura utilizando el método define de Sequelize
const Asignatura = sequelize.define('asignatura', {
    // Definir las columnas del modelo y sus propiedades
    NombreAsignatura: {
        type: DataTypes.STRING, // Tipo de dato STRING para el nombre de la asignatura
        allowNull: false // No permitir valores nulos en esta columna
    },
    Descripcion: {
        type: DataTypes.STRING, // Tipo de dato STRING para la descripción de la asignatura
        allowNull: false // No permitir valores nulos en esta columna
    },
});

// Exportar el modelo Asignatura para que pueda ser utilizado en otros archivos
module.exports = Asignatura;
