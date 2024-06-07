// Importar el módulo DataTypes de Sequelize
const { DataTypes } = require('sequelize');

// Importar la conexión a la base de datos desde el archivo connection.js en la carpeta utils
const sequelize = require('../utils/connection');

// Definir el modelo Evaluacion utilizando el método define de Sequelize
const Evaluacion = sequelize.define('evaluaciones', {
    // Definir las columnas del modelo y sus propiedades
    NombreEvaluacion: {
        type: DataTypes.STRING, // Tipo de dato STRING para el nombre de la evaluación
        allowNull: false // No permitir valores nulos en esta columna
    },
    Fecha_Evaluacion: {
        type: DataTypes.STRING, // Tipo de dato STRING para la fecha de la evaluación
        allowNull: false // No permitir valores nulos en esta columna
    },
    Tipo_Evaluacion: {
        type: DataTypes.STRING, // Tipo de dato STRING para el tipo de evaluación
        allowNull: false // No permitir valores nulos en esta columna
    },
    Nota: {
        type: DataTypes.STRING, // Tipo de dato STRING para la nota de la evaluación
        allowNull: false // No permitir valores nulos en esta columna
    },
});

// Exportar el modelo Evaluacion para que pueda ser utilizado en otros archivos
module.exports = Evaluacion;
