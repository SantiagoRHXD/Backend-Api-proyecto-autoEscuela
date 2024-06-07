const { getAll, create, getOne, remove, update } = require('../controllers/asignatura.controllers');
const express = require('express');

const routerAsignatura = express.Router();

routerAsignatura.route('/')
	.get(getAll)
	.post(create);

routerAsignatura.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerAsignatura;