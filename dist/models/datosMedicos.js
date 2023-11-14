"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/DatosMedicos.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DatosMedicos = connection_1.default.define('datosmedicos', {
    peso: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    estatura: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    tipoSangre: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    institucion: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    noSeguroSocial: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    fechaDeAlta: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    fechaDeBaja: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    padeceEnfermedades: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    problemasFisicos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tatuado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    piePlano: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcionEnfermedades: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcionProblema: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = DatosMedicos;
