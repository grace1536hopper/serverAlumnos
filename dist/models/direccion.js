"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/DatosMedicos.ts
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Direcciones = connection_1.default.define('direccion', {
    id_direccion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    calle: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    numExt: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    numInt: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    colonia: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    cp: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    delegacionMunicipio: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    telefonoFijo: {
        type: sequelize_1.DataTypes.STRING(35),
        allowNull: false,
    },
    telefonoMovil: {
        type: sequelize_1.DataTypes.STRING(35),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    labora: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Direcciones;
