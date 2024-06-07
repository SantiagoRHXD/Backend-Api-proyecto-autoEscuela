// Importar el módulo catchError desde el archivo catchError.js en la carpeta utils
const catchError = require('../utils/catchError');

// Importar los modelos Asignatura y Curso desde los archivos correspondientes en la carpeta models
const Asignatura = require('../models/Asignatura');
const Curso = require('../models/Curso');

// Controlador para obtener todos los registros de Asignatura con sus relaciones a Curso
const getAll = catchError(async (req, res) => {
    const results = await Asignatura.findAll({
        include: [Curso] // Incluir el modelo Curso para obtener la relación
    });
    return res.json(results);
});

// Controlador para crear un nuevo registro de Asignatura
const create = catchError(async (req, res) => {
    const result = await Asignatura.create(req.body);
    return res.status(201).json(result);
});

// Controlador para obtener un registro de Asignatura por su ID con su relación a Curso
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Asignatura.findByPk(id, {
        include: [Curso] // Incluir el modelo Curso para obtener la relación
    });
    if (!result) return res.json({ message: "La asignatura no se encontró" });
    return res.json(result);
});

// Controlador para eliminar un registro de Asignatura por su ID
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Asignatura.destroy({ where: { id } });
    return res.sendStatus(204).json({ message: "Se ha eliminado la asignatura" });
});

// Controlador para actualizar un registro de Asignatura por su ID
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Asignatura.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[1] == 0) return res.status(404).json({ message: "La asignatura no se actualizó porque no existe" });
    return res.json({ message: "La asignatura se actualizó exitosamente" });
});

// Exportar los controladores para su uso en otros archivos
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
