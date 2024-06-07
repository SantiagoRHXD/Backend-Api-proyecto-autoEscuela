// Importar el módulo DataTypes de Sequelize
const { DataTypes } = require('sequelize');

// Importar la conexión a la base de datos desde el archivo connection.js en la carpeta utils
const sequelize = require('../utils/connection');

// Definir el modelo Clase utilizando el método define de Sequelize
const Clase = sequelize.define('clase', {
    // Definir las columnas del modelo y sus propiedades
    Tema: {
        type: DataTypes.STRING, // Tipo de dato STRING para el tema de la clase
        allowNull: false // No permitir valores nulos en esta columna
    },
    Aula: {
        type: DataTypes.STRING, // Tipo de dato STRING para el aula de la clase
        allowNull: false // No permitir valores nulos en esta columna
    },
    Fecha: {
        type: DataTypes.STRING, // Tipo de dato STRING para la fecha de la clase
        allowNull: false // No permitir valores nulos en esta columna
    },
    Hora_Inicio: {
        type: DataTypes.STRING, // Tipo de dato STRING para la hora de inicio de la clase
        allowNull: false // No permitir valores nulos en esta columna
    },
    Hora_Fin: {
        type: DataTypes.STRING, // Tipo de dato STRING para la hora de fin de la clase
        allowNull: false // No permitir valores nulos en esta columna
    },
    Estado: {
        type: DataTypes.STRING, // Tipo de dato STRING para el estado de la clase
        allowNull: false // No permitir valores nulos en esta columna
    },
});

// Exportar el modelo Clase para que pueda ser utilizado en otros archivos
module.exports = Clase;
