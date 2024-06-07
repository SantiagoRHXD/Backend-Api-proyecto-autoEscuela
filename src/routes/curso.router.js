// Importar los controladores necesarios desde el archivo curso.controllers.js
const { getAll, create, getOne, remove, update } = require('../controllers/curso.controllers');

// Importar el módulo Express
const express = require('express');

// Crear un nuevo enrutador utilizando el método Router de Express
const routerCurso = express.Router();

// Definir las rutas utilizando el enrutador creado

// Ruta para obtener todos los cursos y crear un nuevo curso
routerCurso.route('/')
    .get(getAll) // Método GET para obtener todos los cursos
    .post(create); // Método POST para crear un nuevo curso

// Ruta para obtener, eliminar y actualizar un curso específico por su ID
routerCurso.route('/:id')
    .get(getOne) // Método GET para obtener un curso por su ID
    .delete(remove) // Método DELETE para eliminar un curso por su ID
    .put(update); // Método PUT para actualizar un curso por su ID

// Exportar el enrutador de curso para su uso en otros archivos
module.exports = routerCurso;
