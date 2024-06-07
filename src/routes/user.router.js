// Importamos los controladores necesarios desde '../controllers/user.controllers'
const { getAll, create, getOne, remove, update, login, addCursoToUser } = require('../controllers/user.controllers');
// Importamos Express
const express = require('express');

// Creamos una instancia del enrutador de Express
const routerUser = express.Router();

// Definimos las rutas para la entidad 'User'

// Ruta para obtener todos los usuarios y crear un nuevo usuario
routerUser.route('/')
    .get(getAll)  // Maneja solicitudes GET para obtener todos los usuarios
    .post(create);  // Maneja solicitudes POST para crear un nuevo usuario

// Ruta para iniciar sesión
routerUser.route('/login')
    .post(login)  // Maneja solicitudes POST para el inicio de sesión

// Ruta para agregar un curso a un usuario
routerUser.route('/addCurso')
    .post(addCursoToUser)  // Maneja solicitudes POST para agregar un curso a un usuario

// Ruta para obtener, eliminar y actualizar un usuario específico por ID
routerUser.route('/:id')
    .get(getOne)  // Maneja solicitudes GET para obtener un usuario por ID
    .delete(remove)  // Maneja solicitudes DELETE para eliminar un usuario por ID
    .put(update);  // Maneja solicitudes PUT para actualizar un usuario por ID

// Exportamos el enrutador para que pueda ser utilizado en otros archivos
module.exports = routerUser;
