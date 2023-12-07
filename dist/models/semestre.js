"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingreso = exports.Alumno = exports.DatosAcademicos = exports.EstadoGeneral = exports.Kardex = exports.Carrera = exports.Calificaciones = exports.Asignaturas = exports.Grupo = exports.Semestre = void 0;
const { DataTypes, Model } = require('sequelize');
const datosMedicos_1 = __importDefault(require("./datosMedicos"));
const direccion_1 = __importDefault(require("./direccion"));
const escolaridad_1 = __importDefault(require("./escolaridad"));
const tutor_1 = __importDefault(require("./tutor"));
const tramites_1 = __importDefault(require("./tramites"));
const connection_1 = __importDefault(require("../db/connection"));
class Semestre extends Model {
}
exports.Semestre = Semestre;
Semestre.init({
    id_semestre: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    noSemestre: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'semestre',
    createdAt: false,
    updatedAt: false,
});
class Grupo extends Model {
}
exports.Grupo = Grupo;
Grupo.init({
    id_grupos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    noGrupo: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'grupo',
    createdAt: false,
    updatedAt: false,
});
class Asignaturas extends Model {
}
exports.Asignaturas = Asignaturas;
Asignaturas.init({
    id_asignatura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    docente: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    creditos: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    clave: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'asignaturas',
    createdAt: false,
    updatedAt: false,
});
/* modelo de calificaciones  */
class Calificaciones extends Model {
}
exports.Calificaciones = Calificaciones;
Calificaciones.init({
    id_calificaciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    noBoleta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    materia: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    primerParcial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    segundoParcial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tercerParcial: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    extra: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    calificacionFinal: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'calificaciones',
    createdAt: false,
    updatedAt: false,
});
//carrera del alumno 
class Carrera extends Model {
}
exports.Carrera = Carrera;
Carrera.init({
    id_carrera: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    totalCreditos: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    cargaMaxima: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    cargaMinima: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    duracionCarreraEscolares: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duracionMaximaPeriodos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'carreras',
    createdAt: false,
    updatedAt: false,
});
class Kardex extends Model {
}
exports.Kardex = Kardex;
Kardex.init({
    idKardex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    clave: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    materia: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    periodo: {
        type: DataTypes.STRING(34),
        allowNull: false,
    },
    formaEvaluacion: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    calificacionFinal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'kardexes',
    createdAt: false,
    updatedAt: false,
});
// ----muestra el estado general del alumno 
class EstadoGeneral extends Model {
}
exports.EstadoGeneral = EstadoGeneral;
EstadoGeneral.init({
    idEstadoGeneral: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    noBoleta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    materiasReprobadas: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    materiasNoCursadas: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    materiasDesfasadas: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    fechaInscripcion: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    fechaFinalizacion: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    turno: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    totalCreditosObtenidos: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    totalCreditosFaltantes: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    periodosCursados: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    periodosDisponibles: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cargaAutorizada: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    creditosReprobados: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'estadogs',
    createdAt: false,
    updatedAt: false,
});
class DatosAcademicos extends Model {
}
exports.DatosAcademicos = DatosAcademicos;
DatosAcademicos.init({
    id_dato_academico: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    noBoleta: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    planEstudios: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    promedio: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'datosacademicos',
    createdAt: false,
    updatedAt: false,
});
class Alumno extends Model {
}
exports.Alumno = Alumno;
Alumno.init({
    id_alumnos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    plantel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    curp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rfc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cartilla: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pasaporte: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaNacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    entidadNacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    boleta: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'alumnos',
    createdAt: false,
    updatedAt: false,
});
class Ingreso extends Model {
}
exports.Ingreso = Ingreso;
Ingreso.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    boleta: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    id_alumnos: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Alumno',
            key: 'id_alumnos',
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: 'ingresos',
    createdAt: false,
    updatedAt: false,
});
Ingreso.belongsTo(Alumno, { foreignKey: 'id_alumnos' });
Alumno.belongsTo(datosMedicos_1.default, { foreignKey: 'idDatoMedico' });
Alumno.belongsTo(direccion_1.default, { foreignKey: 'idDireccion' });
Alumno.belongsTo(escolaridad_1.default, { foreignKey: 'idEscolaridad' });
Alumno.belongsTo(tutor_1.default, { foreignKey: 'idTutor' });
Alumno.hasMany(tramites_1.default, { foreignKey: 'idtramite' }); // tabla tramite 
Alumno.belongsTo(tramites_1.default, { foreignKey: 'idTramite' }); //tabla de alumno
Alumno.belongsTo(EstadoGeneral, { foreignKey: 'idEstadoGeneral' });
Alumno.belongsTo(DatosAcademicos, { foreignKey: 'idDatoAcademico' });
Grupo.belongsTo(Semestre, { foreignKey: 'id_semestre' });
Asignaturas.belongsTo(Grupo, { foreignKey: 'id_Grupos' });
Calificaciones.belongsTo(Asignaturas, { foreignKey: 'id_Asignatura' });
Carrera.hasMany(Asignaturas, { foreignKey: 'idalumno' });
Carrera.belongsTo(Asignaturas, { foreignKey: 'idAsignatura' });
Kardex.belongsTo(Carrera, { foreignKey: 'idCarrera' });
EstadoGeneral.belongsTo(Carrera, { foreignKey: 'id_carrera' });
DatosAcademicos.belongsTo(Carrera, { foreignKey: 'idCarrera' });
DatosAcademicos.hasMany(Kardex, { foreignKey: 'idkardexs' });
DatosAcademicos.belongsTo(Kardex, { foreignKey: 'idKardex' });
