// Importar el módulo catchError desde el archivo catchError.js en la carpeta utils
const catchError = require('../utils/catchError');

// Importar el modelo TipoClase desde el archivo TipoClase.js en la carpeta models
const TipoClase = require('../models/TipoClase');

// Importar el modelo Clase desde el archivo Clase.js en la carpeta models
const Clase = require('../models/Clase');

// Controlador para obtener todos los registros de TipoClase
const getAll = catchError(async (req, res) => {
    const results = await TipoClase.findAll({ include: [Clase] });
    return res.json(results);
});

// Controlador para crear un nuevo registro de TipoClase
const create = catchError(async (req, res) => {
    const result = await TipoClase.create(req.body);
    return res.status(201).json(result);
});

// Controlador para obtener un registro de TipoClase por su ID
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await TipoClase.findByPk(id, { include: [Clase] });
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

// Controlador para eliminar un registro de TipoClase por su ID
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await TipoClase.destroy({ where: { id } });
    return res.sendStatus(204);
});

// Controlador para actualizar un registro de TipoClase por su ID
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await TipoClase.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[1] == 0) return res.status(404).json({ message: "El tipo de clase no se actualizó porque no existe" });
    return res.json({ message: "El tipo de clase se actualizó exitosamente" });
});

// Exportar los controladores para su uso en otros archivos
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
