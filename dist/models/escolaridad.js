"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../db/connection"));
const Escolaridad = connection_1.default.define('escolaridads', {
    id_escolaridad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    escuelaProcedencia: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    entidadFederativaEscuelaProcedencia: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    promedioSecundaria: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    promedioNivelMedioSuperior: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Escolaridad;
