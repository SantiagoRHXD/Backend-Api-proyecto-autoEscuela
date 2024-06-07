// Middleware de manejo de errores
const errorHandler = (error, _req, res, _next) => {
    // Manejo específico para errores de validación de Sequelize
    if (error.name === 'SequelizeValidationError') {
        const errObj = {};
        // Mapeamos cada error en el objeto de errores para obtener un mensaje específico para cada campo
        error.errors.map(er => {
            errObj[er.path] = er.message;
        });
        // Enviamos una respuesta con estado 400 (Bad Request) y el objeto de errores
        return res.status(400).json(errObj);
    }

    // Manejo específico para errores de restricción de clave foránea de Sequelize
    if (error.name === 'SequelizeForeignKeyConstraintError') {
        // Enviamos una respuesta con estado 400 (Bad Request) con el mensaje de error y detalles adicionales
        return res.status(400).json({ 
            message: error.message,
            error: error.parent.detail
        });
    }

    // Manejo específico para errores de base de datos de Sequelize
    if (error.name === 'SequelizeDatabaseError') {
        // Enviamos una respuesta con estado 400 (Bad Request) con el mensaje de error
        return res.status(400).json({ 
            message: error.message
        });
    }

    // Manejo genérico para otros tipos de errores
    return res.status(500).json({
        message: error.message,
        error: error
    });
}

// Exportamos el middleware para que pueda ser utilizado en otros archivos
module.exports = errorHandler;
