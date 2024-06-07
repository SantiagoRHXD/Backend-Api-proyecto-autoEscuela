// Importar los controladores necesarios desde el archivo clase.controllers.js
const { getAll, create, getOne, remove, update } = require('../controllers/clase.controllers');

// Importar el módulo Express
const express = require('express');

// Crear un nuevo enrutador utilizando el método Router de Express
const routerClase = express.Router();

// Definir las rutas utilizando el enrutador creado

// Ruta para obtener todas las clases y crear una nueva clase
routerClase.route('/')
    .get(getAll) // Método GET para obtener todas las clases
    .post(create); // Método POST para crear una nueva clase

// Ruta para obtener, eliminar y actualizar una clase específica por su ID
routerClase.route('/:id')
    .get(getOne) // Método GET para obtener una clase por su ID
    .delete(remove) // Método DELETE para eliminar una clase por su ID
    .put(update); // Método PUT para actualizar una clase por su ID

// Exportar el enrutador de clase para su uso en otros archivos
module.exports = routerClase;
