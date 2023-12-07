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
      fechaSolicitud: {
        type: DataTypes.STRING(15),
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
},{
    createdAt:false,
    updatedAt : false
});

export default Tramites;
