const { getAll, create, getOne, remove, update } = require('../controllers/evaluacion.controllers');
const express = require('express');

const routerEvaluacion = express.Router();

routerEvaluacion.route('/')
	.get(getAll)
	.post(create);

routerEvaluacion.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerEvaluacion;