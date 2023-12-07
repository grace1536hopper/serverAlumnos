const jwt = require('jsonwebtoken')
import dotenv from 'dotenv';

//se configura las variables de ambiente 
dotenv.config();


export const generarJWT = ( uid: any ) =>{

    return new Promise(( resolve: any, reject:any)=>{
        const payload = {
            uid
        };
     jwt.sign( payload, process.env.JWT_SECRET, {
        expiresIn: '12h'
     }, (err:any, token:any) =>{
        if(err){
            console.log(err);
            reject('No se puedo general el jwt')
        }else{
            resolve(token);
        }
     });
    })
  
}