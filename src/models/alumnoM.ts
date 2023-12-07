import {DataTypes, Model} from 'sequelize'
import db from '../db/connection'
import DatosMedicos from './datosMedicos';
import Direccion from './direccion';
import Escolaridad from './escolaridad'
import PadreTutor from './tutor';
import Tramites from './tramites';

class Ingreso extends Model {}
Ingreso.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    boleta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING(10), // Assuming you want a maximum length of 10 characters for the password
      allowNull: false,
    },
    id_alumnos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ingreso', // Assuming you reference the same table
        key: 'id_Alumnos',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'ingreso',
    createdAt: false,
    updatedAt: false,
  }
);
 

class Alumno extends Model {}

Alumno.init(
  {
    id_alumnos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plantel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    curp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rfc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cartilla: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pasaporte: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entidadNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boleta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'alumnos',
    createdAt: false,
    updatedAt: false,
  }
);

Alumno.belongsTo(DatosMedicos, { foreignKey: 'idDatoMedico' });
Alumno.belongsTo(Direccion, { foreignKey: 'idDireccion' });
Alumno.belongsTo(Escolaridad, { foreignKey: 'idEscolaridad' });
Alumno.belongsTo(PadreTutor, { foreignKey: 'idTutor' });
Alumno.belongsTo(Tramites, { foreignKey: 'idTramites' });

Ingreso.belongsTo(Alumno, { foreignKey: 'id_alumno' });




export {Alumno, Ingreso};