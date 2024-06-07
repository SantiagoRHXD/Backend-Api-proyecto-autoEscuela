// Importar el módulo Express y crear un enrutador
const express = require('express');
const router = express.Router();

// Importar los enrutadores de cada entidad desde archivos separados
const routerRol = require("./rol.router")
const routerUser = require("./user.router")
const routerCurso = require("./curso.router")
const routerClases = require("./clase.router")
const routerAsignatura = require("./asignatura.router")
const routerEvaluacion = require("./evaluacion.router")
const routerTipoClase = require("./tipoClase.router")

// Definir las rutas en el enrutador principal

// Rutas para la entidad "rols" utilizando el enrutador "routerRol"
router.use("/rols", routerRol)

// Rutas para la entidad "users" utilizando el enrutador "routerUser"
router.use("/users", routerUser)

// Rutas para la entidad "cursos" utilizando el enrutador "routerCurso"
router.use("/cursos", routerCurso)

// Rutas para la entidad "clases" utilizando el enrutador "routerClases"
router.use("/clases", routerClases)

// Rutas para la entidad "asignaturas" utilizando el enrutador "routerAsignatura"
router.use("/asignaturas", routerAsignatura)

// Rutas para la entidad "Evaluaciones" utilizando el enrutador "routerEvaluacion"
router.use("/Evaluaciones", routerEvaluacion)

// Rutas para la entidad "tipoclases" utilizando el enrutador "routerTipoClase"
router.use("/tipoclases", routerTipoClase)

// Exportar el enrutador principal para su uso en la configuración principal de la aplicación
module.exports = router;
