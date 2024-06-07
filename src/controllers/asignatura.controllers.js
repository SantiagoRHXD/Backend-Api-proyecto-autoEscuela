const catchError = require('../utils/catchError');
const Asignatura = require('../models/Asignatura');
const Curso = require('../models/Curso');

const getAll = catchError(async(req, res) => {
	const results = await Asignatura.findAll({include: [Curso]});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const result = await Asignatura.create(req.body);
	return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Asignatura.findByPk(id, {include: [Curso]});
	if(!result) return res.json({menssage: "la clase no se encontro"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	await Asignatura.destroy({ where: {id} });
	return res.sendStatus(204).json({menssage: "se ha eliminado el usuario"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Asignatura.update(
		req.body,
		{ where: {id}, returning: true }
	);
	if(result[1] == 0) return res.status(404).json({menssage: "la asignatura no se actualizo porque no existe"})
		return res.json({menssage: "la asignatura se actualizo exitosamente"});
});

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}