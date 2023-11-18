import { Request, Response } from "express"
// import Alumno from "../models/alumnoM"
import DatosMedicos from "../models/datosMedicos"
import Direccion from "../models/direccion"
import Escolaridad from "../models/escolaridad"
import PadreTutor from "../models/tutor"
import Tramites from "../models/tramites"
import { Semestre, Grupo, Asignaturas, Calificaciones, Carrera, Kardex, EstadoGeneral, DatosAcademicos, Alumno} from '../models/semestre';
import { Model } from "sequelize"

// import Direccion from '../models/direccion';



export const getAlumnos = async (req:Request, res:Response) =>{
    const listAlumnos = await Alumno.findAll()
    res.json({
        listAlumnos
    })
}


// export const getAlumno = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const usuario = await Alumno.findAll(id, {
//      // include: [
//          include: [
//           {model: DatosMedicos},
//           {model:Direccion }, 
//           {model:Escolaridad}, 
//           {model:PadreTutor},
//           {model:Tramites},
//           {model:EstadoGeneral,include: [
//             {
//               model: Carrera,
//               include:[
//               {model: Asignaturas,include: [
//                 {
//                   model: Grupo,include: [
//                     {
//                       model: Semestre,
//                     },],
//                 },
//               ],
//               }
                
//               ],
//             },
//           ],
//          },
//           {model:DatosAcademicos,
//             include: [            
//             {model:Kardex},
//              {model:Carrera},            
//           ],
//           }
          
//         ],
//     });

//     if (usuario) {
//       res.json(usuario);
//     } else {
//       res.status(404).json({
//         msg: `No existe el usuario con el id ${id}`,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       msg: 'Ocurrió un error, comuníquese con soporte',
//     });
//   }
// }

export const getAlumno = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario = await Alumno.findByPk(id, {
      include: [
        { model: DatosMedicos },
        { model: Direccion },
        { model: Escolaridad },
        { model: PadreTutor },
        
        { model: EstadoGeneral, include: [
            {
               model: Carrera ,
              include: [
                { model: Asignaturas, include: [
                    {
                      model: Grupo, include: [
                        {
                          model: Semestre,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        { model: DatosAcademicos, include: [            
            { model: Kardex },
            { model: Carrera },
          ],
        },
      ],
    });

    if (usuario) {
      const tramites = await usuario.getTramites();
      usuario.setDataValue('Tramites', tramites);
    
      const datosAcademicos = await DatosAcademicos.findByPk(id);
      const kardexes = await datosAcademicos.getKardexes();
      datosAcademicos.setDataValue('Kardexes', kardexes);

      const carreras = await Carrera.findByPk(id); //Suponiendo que Carrera está asociada directamente con EstadoGeneral
      const asignaturas = await carreras.getAsignaturas();
      carreras.setDataValue('Asignaturas', asignaturas);

      res.json(usuario);
    }  else {
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


export const deletAlumno = async (req:Request, res:Response) =>{
   //eliminar registros de la tabla 
    const { id } = req.params;
    const alumnos = await Alumno.findByPk(id);

    if(!alumnos){
        res.status(404).json({
            msg:`No existe un alumno con el id ${id}`
        })
    }else{

        await alumnos.destroy();
        res.json({
            msg: ' El alumno fue eliminado con exito'
        })
    }
}

export const postAlumno = async (req:Request, res:Response) =>{
   
    const { body } = req;
    try {
        
        await  Alumno.create(body);
        res.json({
        msg:`El alumno fue agregado con exito`,
        
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg:`Ocurrio un error, comuniquese con soporte `
        })
    }
}

export const updateAlumno = async (req:Request, res:Response) =>{
    const { body } = req;
    const { id } = req.params;
    
    const alumnos = await Alumno.findByPk(id);

    try {
        if(alumnos){
            await  alumnos.update(body);
            res.json({
              msg: `El alumno fue actualizado con exito !`
            })
          } else {
              res.status(404).json({
                  msg:`No existe el alumno con el id ${id}`
              });
          }
    } catch (error) {
        console.log(error);
        res.json({
            msg:`Ocurrio un error, comuniquese con soporte `
        })
    }
    
    


    
}