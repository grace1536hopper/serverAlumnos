// models/DatosMedicos.ts
import { DataTypes } from 'sequelize';
import db from '../db/connection';

const DatosMedicos = db.define('datosmedicos', {
  peso: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  estatura: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  tipoSangre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  institucion: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  noSeguroSocial: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  fechaDeAlta: {
    type: DataTypes.DATE, // Cambia a DataTypes.DATE si deseas almacenar fechas como objetos Date
    allowNull: false,
  },
  fechaDeBaja: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  padeceEnfermedades: {
    type: DataTypes.STRING, // Cambia a DataTypes.BOOLEAN si deseas usar un tipo booleano
    allowNull: false,
  },
  problemasFisicos: {
    type: DataTypes.STRING, // Cambia a DataTypes.BOOLEAN si deseas usar un tipo booleano
    allowNull: false,
  },
  tatuado: {
    type: DataTypes.STRING, // Cambia a DataTypes.BOOLEAN si deseas usar un tipo booleano
    allowNull: false,
  },
  piePlano: {
    type: DataTypes.STRING, // Cambia a DataTypes.BOOLEAN si deseas usar un tipo booleano
    allowNull: false,
  },
  descripcionEnfermedades: {
    type: DataTypes.STRING, // Cambia a DataTypes.TEXT si necesitas más espacio
    allowNull: false,
  },
  descripcionProblema: {
    type: DataTypes.STRING, // Cambia a DataTypes.TEXT si necesitas más espacio
    allowNull: false,
  },
},{
    createdAt:false,
    updatedAt : false
});

export default DatosMedicos;
