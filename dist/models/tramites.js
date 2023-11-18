"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../db/connection"));
const Tramites = connection_1.default.define('tramites', {
    id_tramites: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    no_boleta: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    fechaSolicitud: {
        type: DataTypes.DATE,
        allowNull: true, // Puedes cambiar a false si se requiere que siempre haya una fecha de solicitud
    },
    descripcion: {
        type: DataTypes.STRING(50),
        allowNull: true, // Puedes cambiar a false si se requiere que siempre haya una descripción
    },
    idtramite: {
        type: DataTypes.INTEGER,
        allowNull: true, // Puedes cambiar a false si se requiere que siempre haya un idtramite
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Tramites;
