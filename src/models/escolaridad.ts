const { DataTypes } = require('sequelize');
import db from '../db/connection'

const Escolaridad = db.define('escolaridads', {
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
},{
    createdAt:false,
    updatedAt : false
});

export default Escolaridad;
