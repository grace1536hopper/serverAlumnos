//Esta es para el ingreso a la plataforma 

import { Request, Response } from "express"
import { Alumno, Ingreso } from "../models/semestre";
import { generarJWT } from "../helpers/jwt";
import * as bcrypt from "bcryptjs"; 

// Suponiendo que tienes una columna "boleta" y "contrasena" en tu modelo de Ingreso
export const Credencial = async (req: Request, res: Response) => {
  try {
    const { boleta, contrasena } = req.body; // Obtener boleta y contraseña desde la solicitud

    // Buscar el ingreso con la boleta y contraseña proporcionadas
    const ingreso = await Ingreso.findOne({
      where: { boleta, contrasena },
      include: [
        { model: Alumno, as: 'alumno' }
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
    
  // generar el TOKEN - JWT
  const token = await generarJWT(uid);

  res.json({
      ok:'true',
      token
  });
}
