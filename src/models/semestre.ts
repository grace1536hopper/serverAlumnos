const { DataTypes, Model } = require('sequelize');
import DatosMedicos from './datosMedicos';
import Direccion from './direccion';
import Escolaridad from './escolaridad'
import PadreTutor from './tutor';
import Tramites from './tramites';
import db from '../db/connection';

class Semestre extends Model {}

Semestre.init(
  {
    id_semestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    noSemestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'semestre',
    createdAt: false,
    updatedAt: false,
  }
);

class Grupo extends Model {}

Grupo.init(
  {
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
  },
  {
    sequelize: db,
    modelName: 'grupo',
    createdAt: false,
    updatedAt: false,
  }
);


class Asignaturas extends Model {}

Asignaturas.init(
  {
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
  },
  {
    sequelize: db,
    modelName: 'asignaturas',
    createdAt: false,
    updatedAt: false,
  }
);


/* modelo de calificaciones  */
class Calificaciones extends Model {}

Calificaciones.init(
  {
    id_calificaciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    noBoleta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    materia: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    primerParcial: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    segundoParcial: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tercerParcial: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    extra: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    calificacionFinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'calificaciones',
    createdAt: false,
    updatedAt: false,
  }
);


//carrera del alumno 
class Carrera extends Model {}

Carrera.init(
  {
    id_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    totalCreditos: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    cargaMaxima: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    cargaMinima: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    duracionCarreraEscolares: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duracionMaximaPeriodos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'carreras',
    createdAt: false,
    updatedAt: false,
  }
);

class Kardex extends Model {}

Kardex.init(
  {
    idKardex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    clave: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    materia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    periodo: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    formaEvaluacion: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    calificacionFinal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'kardexes',
    createdAt: false,
    updatedAt: false,
  }
);

// ----muestra el estado general del alumno 
class EstadoGeneral extends Model {}

EstadoGeneral.init(
  {
    idEstadoGeneral: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    noBoleta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    materiasReprobadas: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    materiasNoCursadas: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    materiasDesfasadas: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    fechaInscripcion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaFinalizacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    turno: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    totalCreditosObtenidos: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    totalCreditosFaltantes: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    periodosCursados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    periodosDisponibles: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cargaAutorizada: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    creditosReprobados: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'estadogs',
    createdAt: false,
    updatedAt: false,
  }
);

class DatosAcademicos extends Model {}

DatosAcademicos.init(
  {
    id_dato_academico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    noBoleta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    planEstudios: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    promedio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'datosacademicos',
    createdAt: false,
    updatedAt: false,
  }
);


class ingreso extends Model {}

ingreso.init(
  {
    idIngreso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    boleta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.DOUBLE,
      allowNull: false,
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
Alumno.belongsTo(EstadoGeneral, { foreignKey: 'idEstadoGeneral' });
Alumno.belongsTo(DatosAcademicos, { foreignKey: 'idDatoAcademico' });
Alumno.belongsTo( ingreso , { foreignKey: 'idIngreso' });

Grupo.belongsTo( Semestre , { foreignKey: 'id_semestre' });
Asignaturas.belongsTo( Grupo , { foreignKey: 'id_Grupos' });
Calificaciones.belongsTo( Asignaturas , { foreignKey: 'id_Asignatura' });
Carrera.belongsTo( Asignaturas , { foreignKey: 'id_asignaturas' });
Kardex.belongsTo( Carrera , { foreignKey: 'idCarrera' });
EstadoGeneral.belongsTo( Carrera , { foreignKey: 'id_carrera' });
DatosAcademicos.belongsTo( Carrera , { foreignKey: 'idCarrera' });
DatosAcademicos.belongsTo( Kardex , { foreignKey: 'idKardex' });

export { Semestre, Grupo, Asignaturas, Calificaciones, Carrera, Kardex, EstadoGeneral, DatosAcademicos, Alumno, ingreso };
