const catchError = require('../utils/catchError');
const Clase = require('../models/Clase');
const Curso = require('../models/Curso');
const TipoClase = require('../models/TipoClase');

const getAll = catchError(async(req, res) => {
	const results = await Clase.findAll({include: [Curso, TipoClase]});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const result = await Clase.create(req.body);
	return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Clase.findByPk(id, {include: [Curso, TipoClase]});
	if(!result) return res.sendStatus(404);
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	await Clase.destroy({ where: {id} });
	return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Clase.update(
		req.body,
		{ where: {id}, returning: true }
	);
	if(result[1] == 0) return res.status(404).json({menssage: "la clase no se actualizo porque no existe"})
    return res.json({menssage: "la clase se actualizo exitosamente"});
});

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}