// Importar el módulo DataTypes de Sequelize
const { DataTypes } = require('sequelize');

// Importar la conexión a la base de datos desde el archivo connection.js en la carpeta utils
const sequelize = require('../utils/connection');

// Definir el modelo TipoClase utilizando el método define de Sequelize
const TipoClase = sequelize.define('tipoclase', {
    // Definir las columnas del modelo y sus propiedades
    TipoNombre: {
        type: DataTypes.STRING, // Tipo de dato STRING para el nombre del tipo de clase
        allowNull: false // No permitir valores nulos en esta columna
    },
    Descripcion: {
        type: DataTypes.STRING, // Tipo de dato STRING para la descripción del tipo de clase
        allowNull: false // No permitir valores nulos en esta columna
    },
    Duracion: {
        type: DataTypes.STRING, // Tipo de dato STRING para la duración del tipo de clase
        allowNull: false // No permitir valores nulos en esta columna
    },
});

// Exportar el modelo TipoClase para que pueda ser utilizado en otros archivos
module.exports = TipoClase;
