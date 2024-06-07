const catchError = require('../utils/catchError');
const Evaluacion = require('../models/Evaluacion');

const getAll = catchError(async(req, res) => {
	const results = await Evaluacion.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const result = await Evaluacion.create(req.body);
	return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Evaluacion.findByPk(id);
	if(!result) return res.sendStatus(404);
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	await Evaluacion.destroy({ where: {id} });
	return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Evaluacion.update(
		req.body,
		{ where: {id}, returning: true }
	);
	if(result[1] == 0) return res.status(404).json({menssage: "la evaluacion no se actualizo porque no existe"})
		return res.json({menssage: "la evidencia se actualizo exitosamente"});
});

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}