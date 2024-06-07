// Importa las funciones del controlador 'tipoClase.controllers'.
// Estas funciones manejan las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para 'TipoClase'.
const { getAll, create, getOne, remove, update } = require('../controllers/tipoClase.controllers');

// Importa el módulo 'express'.
const express = require('express');

// Crea un nuevo router usando Express para manejar las rutas relacionadas con 'TipoClase'.
const routerTipoClase = express.Router();

// Define las rutas para '/'. 
// La ruta raíz ('/') maneja las solicitudes GET para obtener todos los elementos (getAll) 
// y POST para crear un nuevo elemento (create).
routerTipoClase.route('/')
    .get(getAll)   // Maneja las solicitudes GET para obtener todos los 'TipoClase'.
    .post(create); // Maneja las solicitudes POST para crear un nuevo 'TipoClase'.

// Define las rutas para '/:id'.
// La ruta con parámetro ':id' maneja las solicitudes GET para obtener un elemento por su ID (getOne), 
// DELETE para eliminar un elemento por su ID (remove), y PUT para actualizar un elemento por su ID (update).
routerTipoClase.route('/:id')
    .get(getOne)   // Maneja las solicitudes GET para obtener un 'TipoClase' específico por su ID.
    .delete(remove) // Maneja las solicitudes DELETE para eliminar un 'TipoClase' específico por su ID.
    .put(update);   // Maneja las solicitudes PUT para actualizar un 'TipoClase' específico por su ID.

// Exporta el router para que pueda ser utilizado en otras partes de la aplicación.
module.exports = routerTipoClase;
