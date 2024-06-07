// Importa la función catchError desde el archivo catchError en el directorio utils
const catchError = require('../utils/catchError');

// Importa los modelos User, Rol, y Curso desde sus respectivos archivos en el directorio models
const User = require('../models/User');
const Rol = require('../models/Rol');
const Curso = require('../models/Curso');

// Importa bcrypt para el hashing de contraseñas
const bcrypt = require("bcrypt");

// Importa jwt para la generación de tokens de autenticación
const jwt = require('jsonwebtoken');

// Define una función getAll para obtener todos los usuarios con sus roles y cursos
const getAll = catchError(async(req, res) => {
    const results = await User.findAll({include:[Rol, Curso]});
    return res.json(results);
});

// Define una función create para crear un nuevo usuario en la base de datos
const create = catchError(async(req, res) => {
    const {Contraseña, ...rest} = req.body;
    const hashPassword = await bcrypt.hash(Contraseña, 10);
    const addUser = await User.create({ ...rest, Contraseña: hashPassword});
    return res.status(201).json(addUser)
});

// Define una función getOne para obtener un usuario por su ID con sus roles y cursos
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id, {include:[Rol, Curso]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

// Define una función remove para eliminar un usuario por su ID
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

// Define una función update para actualizar los datos de un usuario por su ID
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const Datos = req.body;
    const {Contraseña, ...rest} = Datos;
    const hashPassword = await bcrypt.hash(Contraseña, 10);
    const result = await User.update(
        {...rest, Contraseña: hashPassword},
        { where: {id}, returning: true }
    );
    if(result[1] == 0) return res.status(404).json({menssage: "El usuario no se actualizo porque no existe"})
    return res.json({menssage: "El usuario se actualizo exitosamente"});
});

// Define una función login para el inicio de sesión de usuarios
const login = catchError(async(req, res) => {
    const {Correo, Contraseña} = req.body;
    const userEmail = await User.findOne({where: {Correo}})
    if(!userEmail) return res.status(404).json({menssage: "El usuario no existe en la base de datos"});

    const isValidPassword = await bcrypt.compare(Contraseña, userEmail.Contraseña)
    if(!isValidPassword) return res.status(404).json({menssage: "La contraseña es incorrecta"});

    const token = jwt.sign(
        {userEmail},
        process.env.TOKEN_SECRET,
        {expiresIn: "1d"}
    )
    return res.json({userEmail, token})

});

// Define una función addCursoToUser para agregar un curso a un usuario
const addCursoToUser = catchError (async(req, res) => {
    const {userId, cursoId} = req.body;
    const user = await User.findByPk(userId);
    const curso = await Curso.findByPk(cursoId);
    if(!user ||  !curso) return res.status(404).json({message: "Usuario o curso no encontrado"});

    await user.addCurso(curso);
    return res.status(201).json({message: "Curso agregado al usuario"})
});

// Exporta todas las funciones como un objeto para que puedan ser utilizadas en otros archivos
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login,
    addCursoToUser
}
