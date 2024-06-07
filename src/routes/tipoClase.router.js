const { getAll, create, getOne, remove, update } = require('../controllers/tipoClase.controllers');
const express = require('express');

const routerTipoClase = express.Router();

routerTipoClase.route('/')
	.get(getAll)
	.post(create);

routerTipoClase.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerTipoClase;