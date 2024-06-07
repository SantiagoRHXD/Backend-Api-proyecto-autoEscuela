const express = require('express');
const router = express.Router();
const routerRol = require("./rol.router")
const routerUser = require("./user.router")
const routerCurso = require("./curso.router")
const routerClases = require("./clase.router")
const routerAsignatura = require("./asignatura.router")
const routerEvaluacion = require("./evaluacion.router")
const routerTipoClase = require("./tipoClase.router")

// colocar las rutas aquí
router.use("/rols", routerRol)
router.use("/users", routerUser)
router.use("/cursos", routerCurso)
router.use("/clases", routerClases)
router.use("/asignaturas", routerAsignatura)
router.use("/Evaluaciones", routerEvaluacion)
router.use("/tipoclases", routerTipoClase)


module.exports = router;