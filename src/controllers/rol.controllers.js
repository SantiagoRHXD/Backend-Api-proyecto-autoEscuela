// Importar el módulo catchError desde el archivo catchError.js en la carpeta utils
const catchError = require('../utils/catchError');

// Importar el modelo Rol desde el archivo Rol.js en la carpeta models
const Rol = require('../models/Rol');

// Controlador para obtener todos los registros de Rol
const getAll = catchError(async (req, res) => {
    const results = await Rol.findAll();
    return res.json(results);
});

// Controlador para crear un nuevo registro de Rol
const create = catchError(async (req, res) => {
    const result = await Rol.create(req.body);
    return res.status(201).json(result);
});

// Controlador para obtener un registro de Rol por su ID
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Rol.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

// Controlador para eliminar un registro de Rol por su ID
const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Rol.destroy({ where: { id } });
    return res.sendStatus(204);
});

// Controlador para actualizar un registro de Rol por su ID
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Rol.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[1] == 0) return res.status(404).json({ message: "El rol no se actualizó porque no existe" });
    return res.json({ message: "El rol se actualizó exitosamente" });
});

// Exportar los controladores para su uso en otros archivos
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
};
