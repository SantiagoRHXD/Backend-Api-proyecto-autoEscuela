// Importamos Sequelize de la biblioteca 'sequelize'
const { Sequelize } = require('sequelize');
// Cargamos las variables de entorno desde un archivo .env
require('dotenv').config();

// Creamos una nueva instancia de Sequelize utilizando la URL de la base de datos de las variables de entorno
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Exportamos la instancia de Sequelize para que pueda ser utilizada en otros archivos
module.exports = sequelize;
