// Importamos la biblioteca JSON Web Token
const jwt = require('jsonwebtoken');
// Cargamos las variables de entorno desde un archivo .env
require('dotenv').config();

// Middleware para verificar JWT en las solicitudes entrantes
const verifyJWT = (req, res, next) => {
    // Obtenemos el encabezado de autorización de la solicitud
    const authHeader = req.headers.authorization || req.headers.Authorization;
    // Si el encabezado de autorización no existe o no comienza con 'Bearer ', devolvemos un estado 401 (No autorizado)
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    
    // Extraemos el token del encabezado de autorización
    const token = authHeader.split(' ')[1];
    
    // Verificamos el token usando la clave secreta de las variables de entorno
    jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        (err, decoded) => {
            // Si hay un error en la verificación del token, devolvemos un estado 403 (Prohibido)
            if (err) return res.sendStatus(403);
            
            // Si el token es válido, adjuntamos la información del usuario decodificada a la solicitud
            req.user = decoded.user;
            
            // Llamamos a next() para pasar el control al siguiente middleware o ruta
            next();
        }
    );
}

// Exportamos el middleware para que pueda ser utilizado en otros archivos
module.exports = verifyJWT;
