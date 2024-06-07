const User = require("./User")
const Rol = require("./Rol")
const Clase = require("./Clase")
const Curso = require("./Curso")
const Asignatura = require("./Asignatura")
const Evaluacion = require("./Evaluacion")
const TipoClase = require("./TipoClase")

//relacion de uno a uno
User.belongsTo(Rol)

//relaciones de uno a muchos
Curso.hasMany(Clase)
Clase.belongsTo(Curso)

Curso.hasMany(Asignatura)
Asignatura.belongsTo(Curso)

Curso.hasMany(Evaluacion)
Evaluacion.belongsTo(Curso)

TipoClase.hasMany(Clase)
Clase.belongsTo(TipoClase)


//relaciones de muchos a muchos
User.belongsToMany(Curso, {through: "UserCurso"})
Curso.belongsToMany(User, {through: "UserCurso"})