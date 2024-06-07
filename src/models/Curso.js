// Importar el módulo DataTypes de Sequelize
const { DataTypes } = require('sequelize');

// Importar la conexión a la base de datos desde el archivo connection.js en la carpeta utils
const sequelize = require('../utils/connection');

// Definir el modelo Curso utilizando el método define de Sequelize
const Curso = sequelize.define('curso', {
    // Definir las columnas del modelo y sus propiedades
    Nombre: {
        type: DataTypes.STRING, // Tipo de dato STRING para el nombre del curso
        allowNull: false // No permitir valores nulos en esta columna
    },
    Precio: {
        type: DataTypes.STRING, // Tipo de dato STRING para el precio del curso
        allowNull: false // No permitir valores nulos en esta columna
    },
    Duracion: {
        type: DataTypes.STRING, // Tipo de dato STRING para la duración del curso
        allowNull: false // No permitir valores nulos en esta columna
    },
    Horario: {
        type: DataTypes.STRING, // Tipo de dato STRING para el horario del curso
        allowNull: false // No permitir valores nulos en esta columna
    },
    Hora_Inicio: {
        type: DataTypes.STRING, // Tipo de dato STRING para la hora de inicio del curso
        allowNull: false // No permitir valores nulos en esta columna
    },
    Hora_Fin: {
        type: DataTypes.STRING, // Tipo de dato STRING para la hora de fin del curso
        allowNull: false // No permitir valores nulos en esta columna
    },
    Cupos_Disponibles: {
        type: DataTypes.STRING, // Tipo de dato STRING para los cupos disponibles del curso
        allowNull: false // No permitir valores nulos en esta columna
    }
});

// Exportar el modelo Curso para que pueda ser utilizado en otros archivos
module.exports = Curso;
