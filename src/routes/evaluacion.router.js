// Importar los controladores necesarios desde el archivo evaluacion.controllers.js
const { getAll, create, getOne, remove, update } = require('../controllers/evaluacion.controllers');

// Importar el módulo Express
const express = require('express');

// Crear un nuevo enrutador utilizando el método Router de Express
const routerEvaluacion = express.Router();

// Definir las rutas utilizando el enrutador creado

// Ruta para obtener todas las evaluaciones y crear una nueva evaluación
routerEvaluacion.route('/')
    .get(getAll) // Método GET para obtener todas las evaluaciones
    .post(create); // Método POST para crear una nueva evaluación

// Ruta para obtener, eliminar y actualizar una evaluación específica por su ID
routerEvaluacion.route('/:id')
    .get(getOne) // Método GET para obtener una evaluación por su ID
    .delete(remove) // Método DELETE para eliminar una evaluación por su ID
    .put(update); // Método PUT para actualizar una evaluación por su ID

// Exportar el enrutador de evaluación para su uso en otros archivos
module.exports = routerEvaluacion;
