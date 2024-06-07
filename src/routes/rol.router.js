// Importa las funciones del controlador 'rol.controllers'.
// Estas funciones manejan las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para 'Rol'.
const { getAll, create, getOne, remove, update } = require('../controllers/rol.controllers');

// Importa el módulo 'express' para crear el enrutador.
const express = require('express');

// Crea un nuevo router usando Express para manejar las rutas relacionadas con 'Rol'.
const routerRol = express.Router();

// Define las rutas para '/'.
// La ruta raíz ('/') maneja las solicitudes GET para obtener todos los roles (getAll) 
// y POST para crear un nuevo rol (create).
routerRol.route('/')
    .get(getAll)   // Maneja las solicitudes GET para obtener todos los 'Rol'.
    .post(create); // Maneja las solicitudes POST para crear un nuevo 'Rol'.

// Define las rutas para '/:id'.
// La ruta con parámetro ':id' maneja las solicitudes GET para obtener un rol por su ID (getOne), 
// DELETE para eliminar un rol por su ID (remove), y PUT para actualizar un rol por su ID (update).
routerRol.route('/:id')
    .get(getOne)    // Maneja las solicitudes GET para obtener un 'Rol' específico por su ID.
    .delete(remove) // Maneja las solicitudes DELETE para eliminar un 'Rol' específico por su ID.
    .put(update);   // Maneja las solicitudes PUT para actualizar un 'Rol' específico por su ID.

// Exporta el router para que pueda ser utilizado en otras partes de la aplicación.
module.exports = routerRol;
