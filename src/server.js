// Importamos la aplicación desde el archivo 'app'
const app = require('./app');

// Importamos la instancia de Sequelize desde el archivo de conexión
const sequelize = require('./utils/connection');

// Importamos todos los modelos definidos (esto asegurará que los modelos estén disponibles para Sequelize)
require("./models/index")

// Definimos el puerto en el que nuestro servidor va a escuchar, tomando el valor de la variable de entorno PORT si está definida, de lo contrario, usa 8080
const PORT = process.env.PORT || 8080;

// Función principal que se ejecuta al iniciar la aplicación
const main = async () => {
    try {
        // Sincronizamos la base de datos usando Sequelize (esto crea las tablas en la base de datos si no existen)
        sequelize.sync();
        console.log("DB connected");  // Mensaje de éxito en la conexión a la base de datos

        // Iniciamos el servidor y hacemos que escuche en el puerto definido
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);  // Mensaje de éxito indicando que el servidor está funcionando
    } catch (error) {
        // Capturamos y mostramos cualquier error que ocurra durante la sincronización de la base de datos o el inicio del servidor
        console.log(error)
    }
}

// Ejecutamos la función principal
main();
