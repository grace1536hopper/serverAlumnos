// controllers/datosMedicos.ts
import { Request, Response } from 'express';
import { Semestre, Grupo, Asignaturas, Calificaciones, Carrera, Kardex, EstadoGeneral, DatosAcademicos} from '../models/semestre';
import { Model } from 'sequelize';

export const getAlumnos = async (req:Request, res:Response) =>{
    const listAlumnos = await DatosAcademicos.findAll()
    res.json({
        listAlumnos
    })
}

export const getAlumno = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const usuario = await DatosAcademicos.findByPk(id, {
        include: [
          {
            model: Carrera,
            include: [
                {
                    model: Asignaturas,
                    include: [
                      {
                        model: Grupo,
                        include: [
                          {
                            model: Semestre,
                          },
                        ],
                      },
                    ],
                  },
            ]
          },
          {
            model: Kardex,
          },
          
        ],
      });
  
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({
          msg: `No existe el usuario con el id ${id}`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error, comuníquese con soporte',
      });
    }
  };

