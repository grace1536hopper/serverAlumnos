//Esta es para el ingreso a la plataforma 

import { Request, Response } from "express"
import { Alumno, Asignaturas, Carrera, DatosAcademicos, EstadoGeneral, Grupo, Ingreso, Kardex, Semestre } from "../models/semestre";
import { generarJWT } from "../helpers/jwt";
import * as bcrypt from "bcryptjs"; 
import { Model } from 'sequelize';
import Direcciones from "../models/direccion";
import DatosMedicos from "../models/datosMedicos";
import Escolaridad from "../models/escolaridad";
import PadreTutor from "../models/tutor";
import Tramites from "../models/tramites";


// Suponiendo que tienes una columna "boleta" y "contrasena" en tu modelo de Ingreso
export const Credencial = async (req: Request, res: Response) => {
  try {
    const { boleta, contrasena } = req.body; // Obtener boleta y contraseña desde la solicitud

    // Buscar el ingreso con la boleta y contraseña proporcionadas
    const ingreso = await Ingreso.findOne({
      where: { boleta, contrasena },
      include: [
        { model: Alumno, as: 'alumno',
         include: [{
          model: Direcciones, 
          as: 'direccion'
        },{
          model: DatosMedicos, 
          as: 'datosmedico' 
        },{
          model: Escolaridad, 
          as: 'escolaridad' 
        },{
          model: PadreTutor, 
          as: 'padretutor' 
        },{
          model: Tramites,
          as: 'tramite' 
        },{
          model: EstadoGeneral, 
          as: 'estadog', 
          include: [
            {
              model: Carrera,
              as: 'carrera',
              include: [
                {
                  model: Asignaturas,
                  as: 'asignatura',
                  include: [
                    {
                      model: Grupo,
                      as: 'grupo',
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          model: DatosAcademicos, 
          as: 'datosacademico',
          include: [
            {
              model: Carrera,
              as: 'carrera',
              include: [
                {
                  model: Asignaturas,
                  as: 'asignatura',
                  include: [
                    {
                      model: Grupo,
                      as: 'grupo',
                      include: [
                        {
                          model: Semestre,
                          as: 'semestre',
                        }
                      ]
                    }
                  ]
                }
              ]
            },{
              model:Kardex,
              as: 'kardexes',
              include: [
                {
                  model: Carrera,
                  as: 'carrera',
                  include: [
                    {
                      model: Asignaturas,
                      as: 'asignatura',
                      include: [
                        {
                          model: Grupo,
                          as: 'grupo',
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }


        ]},
        
      ]
    });

    //encriptar la contraseña 
    const salt =  bcrypt.genSaltSync();
    ingreso.contrasena = bcrypt.hashSync( contrasena, salt);
    //await ingreso.save();
    
    //genera TOKEN -JWT 
    const token = await generarJWT(ingreso.id);

    if (!ingreso) {
      return res.status(404).json({
        msg: 'Ingreso not found',
      });
    }

    res.json({
      ok:true,
      token,
      ingreso,
     
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'An error occurred, please contact support',
    });
  }
};

export const renewToken = async(req: any, res: Response) =>{
  const uid = req.uid;
  const { id } = req.params;
  const ingreso = await Ingreso.findByPk(id, {
    include: [
      { model: Alumno, as: 'alumno' } // Assuming you have set an alias 'alumno' for the association in the model
    ]
  });
  // generar el TOKEN - JWT
  const token = await generarJWT(uid);
  
  res.json({
      ok:'true',
      // uid: req.uid 
      token
  });
}


