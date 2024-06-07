// Importar el módulo catchError desde el archivo catchError.js en la carpeta utils
const catchError = require('../utils/catchError');

// Importar el modelo Evaluacion desde el archivo Evaluacion.js en la carpeta models
const Evaluacion = require('../models/Evaluacion');

// Controlador para obtener todos los registros de Evaluacion
const getAll = catchError(async (req, res) => {
    const results = await Evaluacion.findAll();
    return res.json(results);
});

// Controlador para crear un nuevo registro de Evaluacion
const create = catchError(async (req, res) => {
    const result = await Evaluacion.create(req.body);
    return res.status(201).json(result);
});

// Controlador para obtener un registro de Evaluacion por su ID
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Evaluacion.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

// Controlador para eliminar un registro de Evaluacion por su ID
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Evaluacion.destroy({ where: { id } });
    return res.sendStatus(204);
});

// Controlador para actualizar un registro de Evaluacion por su ID
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Evaluacion.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[1] == 0) return res.status(404).json({ message: "La evaluación no se actualizó porque no existe" });
    return res.json({ message: "La evaluación se actualizó exitosamente" });
});

// Exportar los controladores para su uso en otros archivos
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
