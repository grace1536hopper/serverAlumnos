"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const connection_1 = __importDefault(require("../db/connection"));
// import Semestre from './semestre';
const Grupo = connection_1.default.define('grupos', {
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
    createdAt: false,
    updatedAt: false
});
// Grupo.belongsTo( Semestre , { foreignKey: 'id_semestre' });
exports.default = Grupo;
