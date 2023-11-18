const { DataTypes } = require('sequelize');
import db from '../db/connection'
// import Semestre from './semestre';

const Grupo = db.define('grupos', {
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
},{
    createdAt:false,
    updatedAt : false
});

export default Grupo;
