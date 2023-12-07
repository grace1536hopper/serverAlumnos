const jwt = require('jsonwebtoken');
import { Ingreso } from "../models/semestre";
import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validarJWT = (req:any, res: Response, next: NextFunction) => {
  
   //leer el token 
   const token = req.header('x-token');

   if(!token){
    return res.status(401).json({
        ok:false,
        msg: 'no hay token en la peticion'
    });
   }
   
   //verificar el token 
   try {
    const { uid } = jwt.verify( token, process.env.JWT_SECRET);

    req.uid = uid;
    next();

   } catch (error) {
    return res.status(401).json({
        ok:false,
        msg:'Token no valido'
    });
   }
};