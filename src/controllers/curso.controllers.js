// Importar el módulo catchError desde el archivo catchError.js en la carpeta utils
const catchError = require('../utils/catchError');

// Importar los modelos Curso, Clase, Asignatura, TipoClase y Evaluacion desde los archivos correspondientes en la carpeta models
const Curso = require('../models/Curso');
const Clase = require('../models/Clase');
const Asignatura = require('../models/Asignatura');
const TipoClase = require('../models/TipoClase');
const Evaluacion = require('../models/Evaluacion');

// Controlador para obtener todos los registros de Curso con sus relaciones
const getAll = catchError(async (req, res) => {
    const results = await Curso.findAll({
        include: [
            {
                model: Clase,
                include: [TipoClase]
            },
            Asignatura,
            Evaluacion
        ]
    });
    return res.json(results);
});

// Controlador para crear un nuevo registro de Curso
const create = catchError(async (req, res) => {
    const result = await Curso.create(req.body);
    return res.status(201).json(result);
});

// Controlador para obtener un registro de Curso por su ID con sus relaciones
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Curso.findByPk(id, {
        include: [
            {
                model: Clase,
                include: [TipoClase]
            },
            Asignatura,
            Evaluacion
        ]
    });
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

// Controlador para eliminar un registro de Curso por su ID
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Curso.destroy({ where: { id } });
    return res.sendStatus(204);
});

// Controlador para actualizar un registro de Curso por su ID
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Curso.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[1] == 0) return res.status(404).json({ message: "El curso no se actualizó porque no existe" });
    return res.json({ message: "El curso se actualizó exitosamente" });
});

// Exportar los controladores para su uso en otros archivos
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
