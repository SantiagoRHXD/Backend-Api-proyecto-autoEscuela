// Importa la instancia de Sequelize desde el archivo connection en el directorio utils
const sequelize = require("../utils/connection");

// Importa el objeto DataTypes de Sequelize
const { DataTypes } = require('sequelize');

// Define el modelo User utilizando la instancia de Sequelize y especifica sus atributos
const User = sequelize.define('user', {
    Nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Modifica el prototipo del modelo User para personalizar la representación JSON
User.prototype.toJSON = function() {
    // Crea una copia del objeto user sin el atributo Contraseña
    const value = Object.assign({}, this.get());
    delete value.Contraseña;
    return value;
};

// Exporta el modelo User para que pueda ser utilizado en otros archivos
module.exports = User;
