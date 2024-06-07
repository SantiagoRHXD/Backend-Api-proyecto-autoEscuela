const catchError = require('../utils/catchError');
const TipoClase = require('../models/TipoClase');
const Clase = require('../models/Clase');

const getAll = catchError(async(req, res) => {
	const results = await TipoClase.findAll({include: [Clase]});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const result = await TipoClase.create(req.body);
	return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await TipoClase.findByPk(id, {include: [Clase]});
	if(!result) return res.sendStatus(404);
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	await TipoClase.destroy({ where: {id} });
	return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await TipoClase.update(
		req.body,
		{ where: {id}, returning: true }
	);
	if(result[1] == 0) return res.status(404).json({menssage: "El tipoclase no se actualizo porque no existe"})
	return res.json({menssage: "El usuario se actualizo exitosamente"});
});

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}