"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../db/connection"));
const grupo_1 = __importDefault(require("./grupo"));
const Asignaturas = connection_1.default.define('asignaturas', {
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
    createdAt: false,
    updatedAt: false
});
Asignaturas.belongsTo(grupo_1.default, { foreignKey: 'id_Grupos' });
exports.default = Asignaturas;
