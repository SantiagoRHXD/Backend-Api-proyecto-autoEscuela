// Importar el módulo catchError desde el archivo catchError.js en la carpeta utils
const catchError = require('../utils/catchError');

// Importar los modelos Clase, Curso y TipoClase desde los archivos correspondientes en la carpeta models
const Clase = require('../models/Clase');
const Curso = require('../models/Curso');
const TipoClase = require('../models/TipoClase');

// Controlador para obtener todos los registros de Clase con sus relaciones
const getAll = catchError(async (req, res) => {
    const results = await Clase.findAll({
        include: [
            Curso,
            TipoClase
        ]
    });
    return res.json(results);
});

// Controlador para crear un nuevo registro de Clase
const create = catchError(async (req, res) => {
    const result = await Clase.create(req.body);
    return res.status(201).json(result);
});

// Controlador para obtener un registro de Clase por su ID con sus relaciones
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Clase.findByPk(id, {
        include: [
            Curso,
            TipoClase
        ]
    });
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

// Controlador para eliminar un registro de Clase por su ID
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Clase.destroy({ where: { id } });
    return res.sendStatus(204);
});

// Controlador para actualizar un registro de Clase por su ID
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Clase.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[1] == 0) return res.status(404).json({ message: "La clase no se actualizó porque no existe" });
    return res.json({ message: "La clase se actualizó exitosamente" });
});

// Exportar los controladores para su uso en otros archivos
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
