"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../db/connection"));
const PadreTutor = connection_1.default.define('padretutors', {
    idPadreTutor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreTutor: {
        type: DataTypes.STRING(45),
    },
    rfcTutor: {
        type: DataTypes.STRING(45),
    },
    nombrePadre: {
        type: DataTypes.STRING(45),
    },
    nombreMadre: {
        type: DataTypes.STRING(45),
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = PadreTutor;
