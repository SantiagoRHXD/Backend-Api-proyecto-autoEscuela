// Importar el módulo DataTypes de Sequelize
const { DataTypes } = require('sequelize');

// Importar la conexión a la base de datos desde el archivo connection.js en la carpeta utils
const sequelize = require('../utils/connection');

// Definir el modelo Rol utilizando el método define de Sequelize
const Rol = sequelize.define('rol', {
    // Definir las columnas del modelo y sus propiedades
    NombreRol: {
        type: DataTypes.STRING, // Tipo de dato STRING para el nombre del rol
        allowNull: false, // No permitir valores nulos en esta columna
        unique: true // Asegurar que el nombre del rol sea único
    },
});

// Exportar el modelo Rol para que pueda ser utilizado en otros archivos
module.exports = Rol;
