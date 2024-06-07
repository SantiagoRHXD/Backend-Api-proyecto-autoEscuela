const catchError = require('../utils/catchError');
const Rol = require('../models/Rol');

const getAll = catchError(async(req, res) => {
	const results = await Rol.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const result = await Rol.create(req.body);
	return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Rol.findByPk(id);
	if(!result) return res.sendStatus(404);
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	await Rol.destroy({ where: {id} });
	return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Rol.update(
		req.body,
		{ where: {id}, returning: true }
	);
	if(result[1] == 0) return res.status(404).json({menssage: "El rol no se actualizo porque no existe"})
	return res.json({menssage: "El rol se actualizo exitosamente"});
});

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}