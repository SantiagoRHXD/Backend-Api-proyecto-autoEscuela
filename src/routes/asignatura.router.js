// Importar los controladores necesarios desde el archivo asignatura.controllers.js
const { getAll, create, getOne, remove, update } = require('../controllers/asignatura.controllers');

// Importar el módulo Express
const express = require('express');

// Crear un nuevo enrutador utilizando el método Router de Express
const routerAsignatura = express.Router();

// Definir las rutas utilizando el enrutador creado

// Ruta para obtener todas las asignaturas y crear una nueva asignatura
routerAsignatura.route('/')
    .get(getAll) // Método GET para obtener todas las asignaturas
    .post(create); // Método POST para crear una nueva asignatura

// Ruta para obtener, eliminar y actualizar una asignatura específica por su ID
routerAsignatura.route('/:id')
    .get(getOne) // Método GET para obtener una asignatura por su ID
    .delete(remove) // Método DELETE para eliminar una asignatura por su ID
    .put(update); // Método PUT para actualizar una asignatura por su ID

// Exportar el enrutador de asignatura para su uso en otros archivos
module.exports = routerAsignatura;
