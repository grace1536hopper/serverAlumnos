const { DataTypes } = require('sequelize');
import db from '../db/connection'
import Grupo from './grupo';

const Asignaturas = db.define('asignaturas', {
    id_asignatura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      docente: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      creditos: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      clave: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
},{
    createdAt:false,
    updatedAt : false
});

Asignaturas.belongsTo( Grupo , { foreignKey: 'id_Grupos' });

export default Asignaturas;
