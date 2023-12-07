"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingreso = exports.Alumno = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const datosMedicos_1 = __importDefault(require("./datosMedicos"));
const direccion_1 = __importDefault(require("./direccion"));
const escolaridad_1 = __importDefault(require("./escolaridad"));
const tutor_1 = __importDefault(require("./tutor"));
const tramites_1 = __importDefault(require("./tramites"));
class Ingreso extends sequelize_1.Model {
}
exports.Ingreso = Ingreso;
Ingreso.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    boleta: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    id_alumnos: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'ingreso',
            key: 'id_Alumnos',
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: 'ingreso',
    createdAt: false,
    updatedAt: false,
});
class Alumno extends sequelize_1.Model {
}
exports.Alumno = Alumno;
Alumno.init({
    id_alumnos: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    plantel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    curp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rfc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cartilla: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    pasaporte: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fechaNacimiento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nacionalidad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    entidadNacimiento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    boleta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'alumnos',
    createdAt: false,
    updatedAt: false,
});
Alumno.belongsTo(datosMedicos_1.default, { foreignKey: 'idDatoMedico' });
Alumno.belongsTo(direccion_1.default, { foreignKey: 'idDireccion' });
Alumno.belongsTo(escolaridad_1.default, { foreignKey: 'idEscolaridad' });
Alumno.belongsTo(tutor_1.default, { foreignKey: 'idTutor' });
Alumno.belongsTo(tramites_1.default, { foreignKey: 'idTramites' });
Ingreso.belongsTo(Alumno, { foreignKey: 'id_alumno' });
