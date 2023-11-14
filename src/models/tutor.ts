const { DataTypes } = require('sequelize');
import db from '../db/connection'

const PadreTutor = db.define('padretutors', {
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
},{
    createdAt:false,
    updatedAt : false
});

export default PadreTutor;
