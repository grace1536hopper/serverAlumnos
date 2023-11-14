const { DataTypes } = require('sequelize');
import db from '../db/connection'

const Tramites = db.define('tramites', {
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
},{
    createdAt:false,
    updatedAt : false
});

export default Tramites;
