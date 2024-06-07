// Función de orden superior para manejar errores en controladores asincrónicos
const catchError = controller => {
    // Retorna una función middleware que maneja la solicitud, respuesta y el siguiente middleware
    return (req, res, next) => {
        // Ejecuta el controlador proporcionado y, si hay un error, pasa el error a la siguiente función middleware
        controller(req, res, next)
            .catch(next);
    }
}

// Exportamos la función para que pueda ser utilizada en otros archivos
module.exports = catchError;
