// models/DatosMedicos.ts
import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Direcciones = db.define('direccion', {
    id_direccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      calle: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      numExt: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      numInt: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      colonia: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      delegacionMunicipio: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      telefonoFijo: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      telefonoMovil: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      labora: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
    
},{
    createdAt:false,
    updatedAt : false
});

export default Direcciones;
